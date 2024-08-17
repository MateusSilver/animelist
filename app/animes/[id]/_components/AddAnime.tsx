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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/app/_components/ui/command";
import { cn } from "@/app/_lib/utils";
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

const formSchema = z.object({
  review: z.string().min(2).max(150),
  nota: z.number().min(0).max(10),
  status: z.string().max(50),
});

interface AddAnimeProps {
  anime: Anime;
}

interface UserProps {
  user: User;
}

const AddAnime = ({ anime }: AddAnimeProps, { user }: UserProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      review: "",
      nota: 0,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
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
    } finally {
      setIsLoading(false);
    }
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

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
          <tr>
            <td className="py-4">Nota:</td>
            <td className="py-4"></td>
          </tr>
        </table>

        <FormField
          control={form.control}
          name="nota"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nota</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={"10.0"}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="10.0" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Notas</SelectLabel>
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
              <FormDescription>Dê uma nota para a Obra</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="review"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comentário</FormLabel>
              <FormControl>
                <Textarea placeholder="Escreva um comentário" />
              </FormControl>
              <FormDescription>Comentário sobre a obra</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full justify-center">Submit</Button>
      </form>
    </Form>
  );
};
export default AddAnime;
