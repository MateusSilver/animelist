"use client";

import { Button } from "@/app/_components/ui/button";
import { Form } from "@/app/_components/ui/form";
import { Anime } from "@prisma/client";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

interface AddAnimeProps {
  anime: Anime;
}

const AddAnime = ({ anime }: AddAnimeProps) => {
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
