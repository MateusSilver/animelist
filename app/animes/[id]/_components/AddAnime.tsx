"use client";

import { Button } from "@/app/_components/ui/button";
import { Form } from "@/app/_components/ui/form";
import { useToast } from "@/app/_components/ui/use-toast";
import { Anime, User } from "@prisma/client";
import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SaveReview from "../_actions/saveReview";

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

  return (
    <Form>
      <form>
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
              <textarea
                className="bg-secondary w-full"
                name=""
                id=""
              ></textarea>
            </td>
          </tr>
        </table>

        <Button className="w-full justify-center">Submit</Button>
      </form>
    </Form>
  );
};
export default AddAnime;
