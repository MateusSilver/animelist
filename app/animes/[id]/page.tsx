import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
} from "@/app/_components/ui/dialog";
import { db } from "@/app/_lib/prisma";

import { BookOpen } from "lucide-react";
import Image from "next/image";
import AddAnime from "./_components/AddAnime";

interface AnimeDetailsPageProps {
  params: {
    id?: string;
  };
}

const AnimeDetailsPage = async ({ params }: AnimeDetailsPageProps) => {
  const anime = await db.anime.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!anime) {
    // redirect to home page
    return null;
  }
  return (
    <div
      style={{
        backgroundImage: `url(${anime.coverURL})`,
      }}
      className="w-full
            
            
            relative
            overflow-hidden
            block
            z-10
						
            bg-[url('')]
            bg-cover
            bg-no-repeat
            bg-center

            before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-b
            before:from-transparent
            before:from-5%
            before:via-[rgba(21,22,25,75%)]
            before:via-25%
            
            before:to-background
            before:to-40%
            before:opacity-100
            
            before:z-[-5]"
    >
      <main className="grid grid-rows-7 grid-cols-8 gap-4">
        <div className="row-start-2 row-end-4 col-start-2 col-end-3">
          <Image
            src={anime.coverURL}
            alt={anime.name}
            width={0}
            height={0}
            sizes="100"
            className="w-full"
          />
        </div>
        <div className="row-start-4 row-end-5 col-start-2 col-end-3">
          <p>Season {anime.season}</p>
          <h4 className="text-2xl">10.0</h4>
        </div>
        <div className="row-start-2 row-end-3 col-start-3 col-end-8">
          <h1 className=" text-6xl font-extrabold text-primary mb-2">
            {anime.name}
          </h1>
          <h2 className="text-sm">by {anime.autor}</h2>
        </div>
        <div className="row-start-3 row-end-4 col-start-3 col-end-8">
          <div className="flex flex-wrap flex-row gap-2">
            <Badge>{anime.type}</Badge>
            <Badge>{anime.studio}</Badge>
          </div>
        </div>
        <div className="row-start-4 row-end-5 col-start-3 col-end-4">
          <Dialog>
            <DialogTrigger asChild className="w-full">
              <Button className="text-xl items-center justify-center px-5 bg-secondary hover:bg-primary hover:mt-[-2px] w-full">
                Add
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="text-white text-xl font-bold">
                Adicionar anime
              </DialogHeader>
              <DialogDescription>
                <AddAnime anime={anime} />
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
        <div className="row-start-4 row-end-5 col-start-4 col-end-auto">
          <Button className="flex items-center justify-center flex-row gap-2 bg-primary uppercase hover:mt-[-2px]">
            Where to watch?
            <BookOpen />
          </Button>
        </div>
        <div className="row-start-5 row-end-8 col-start-2 col-end-8">
          <p className="text-md indent-8 text-ellipsis">{anime.sinopsis}</p>
        </div>
      </main>

      <aside className="grid grid-rows-1 grid-cols-8">
        <div className="col-start-2 col-end-7">
          <h2 className="text-2xl mb-4">Reviews</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
            cumque, deleniti cupiditate iure omnis mollitia deserunt nesciunt,
            quos assumenda at consectetur ut obcaecati a possimus quas provident
            expedita incidunt. Ipsam?
          </p>
        </div>
      </aside>
    </div>
  );
};

export default AnimeDetailsPage;
