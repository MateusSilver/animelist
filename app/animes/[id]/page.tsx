import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { BookOpen } from "lucide-react";
import Image from "next/image";

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
    <div>
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
          <h1 className="text-6xl font-extrabold text-primary mb-2">
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
          <Button className="text-xl px-5 bg-secondary hover:bg-primary hover:mt-[-2px] w-full">
            Add
          </Button>
        </div>
        <div className="row-start-4 row-end-5 col-start-4 col-end-auto">
          <Button className="flex flex-row gap-2 bg-primary uppercase hover:mt-[-2px]">
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
