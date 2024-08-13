"use client";

import { Button } from "@/app/_components/ui/button";
import { Form, FormControl, FormField, FormLabel } from "@/app/_components/ui/form";
import { useToast } from "@/app/_components/ui/use-toast";
import { Anime, User } from "@prisma/client";
import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SaveReview from "../_actions/saveReview";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/_components/ui/popover";
import { ChevronsUpDown } from "lucide-react";
import { Command, CommandGroup, CommandItem, CommandList } from "@/app/_components/ui/command";
import { cn } from "@/app/_lib/utils";

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

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

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
          <tr>
            <td>Avaliação:</td>
            <td>
              <FormField
                control={form.control}
                name="review"
                render={({ field }) => (
                  <FormLabel>Adicionar comentário</FormLabel>
                  <FormControl>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">{value ? value : "Adicionar Framework"}<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"></Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <Command>
                          <CommandList>
                            <CommandGroup>
                              <CommandItem
                                key={0.0}
                                value={"0.0"}
                                onSelect={(currentValue) => { setValue(currentValue === value ? "" : currentValue)
                                  setOpen(false)
                                }
                              >
                              <Check className={cn("mr-2 h-4 w-4", value === value ? "opacity-100" : "opacity-0")} />

                              </CommandItem>
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                )}
              >
                <textarea
                  className="bg-secondary w-full"
                  name=""
                  id=""
                ></textarea>
              </FormField>
            </td>
          </tr>
        </table>

        <Button className="w-full justify-center">Submit</Button>
      </form>
    </Form>
  );
};
export default AddAnime;
