"use client";

import { Button } from "@/app/_components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { useToast } from "@/app/_components/ui/use-toast";
import { Anime, User } from "@prisma/client";
import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SaveReview from "../_actions/saveReview";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/app/_components/ui/select";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Textarea } from "@/app/_components/ui/textarea";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  review: z.string().min(2).max(150),
  nota: z.number().min(0).max(10),
  status: z.string().max(50),
});

interface AddAnimeProps {
  anime: Anime;
  user: User;
}

const AddAnime = ({ anime, user }: AddAnimeProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      review: "",
      nota: 0,
    },
  });

  const FormOnSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      await SaveReview({
        animeID: anime.id,
        userID: user.id,
        review: data.review,
        nota: data.nota,
        markbook: true,
        status: data.status,
      });
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  toast({
    title: "Anime Adicionado à lista",
    description: (
      <div className="px-5 py-6">
        <p className="text-primary">{anime.name}</p>
        <p>Adicionado</p>
      </div>
    ),
  });

  return (
    <Form {...form}>
      <form onSubmit={() => form.handleSubmit(FormOnSubmit)}>
        <table className="w-full my-4 text-white">
          <tr className="">
            <td className="w-1/3 py-3">Anime:</td>
            <td className="w-2/3 py-3">
              <p className="text-primary hover:underline">{anime.name}</p>
            </td>
          </tr>
          <tr>
            <td className="py-4">Temporada:</td>
            <td className="py-4">{anime.season}</td>
          </tr>
          <tr>
            <td className="py-4">Tipo:</td>
            <td className="py-4">{anime.type}</td>
          </tr>
          <tr>
            <td className="py-4">Estúdio:</td>
            <td className="py-4">{anime.studio}</td>
          </tr>
        </table>

        <div className="w-full py-2 ">
          <FormField
            control={form.control}
            name="nota"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="Nota">Nota</FormLabel>
                <Select onValueChange={field.onChange} defaultValue="10.0">
                  <FormControl>
                    <SelectTrigger
                      id="Nota"
                      className="w-[180px] bg-foreground"
                    >
                      <SelectValue {...field} placeholder="10.0" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position="popper">
                    <SelectGroup>
                      <SelectLabel></SelectLabel>
                      <SelectItem value="10.0">10.0</SelectItem>
                      <SelectItem value="9.5">9.5</SelectItem>
                      <SelectItem value="9.0">9.0</SelectItem>
                      <SelectItem value="8.5">8.5</SelectItem>
                      <SelectItem value="8.0">8.0</SelectItem>
                      <SelectItem value="7.5">7.5</SelectItem>
                      <SelectItem value="7.0">7.0</SelectItem>
                      <SelectItem value="6.5">6.5</SelectItem>
                      <SelectItem value="6.0">6.0</SelectItem>
                      <SelectItem value="5.5">5.5</SelectItem>
                      <SelectItem value="5.0">5.0</SelectItem>
                      <SelectItem value="4.5">4.5</SelectItem>
                      <SelectItem value="4.0">4.0</SelectItem>
                      <SelectItem value="3.5">3.5</SelectItem>
                      <SelectItem value="3.0">3.0</SelectItem>
                      <SelectItem value="2.5">2.5</SelectItem>
                      <SelectItem value="2.0">2.0</SelectItem>
                      <SelectItem value="1.5">1.5</SelectItem>
                      <SelectItem value="1.0">1.0</SelectItem>
                      <SelectItem value="0.5">0.5</SelectItem>
                      <SelectItem value="0.0">0.0</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="review"
            render={() => (
              <FormItem>
                <FormLabel>Comentário</FormLabel>
                <FormControl>
                  <Textarea placeholder="Escreva um comentário" />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full justify-center"
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default AddAnime;
