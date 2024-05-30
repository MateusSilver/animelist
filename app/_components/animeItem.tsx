import { Anime } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";

interface AnimeItemProps {
  anime: Anime;
}

const AnimeItem = ({ anime }: AnimeItemProps) => {
  return (
    <Card className="min-w-[400px] max-w-[400px] rounded-none">
      <CardContent className=" p-0 flex flex-row">
        <div className="w-1/3 h-full">
          <Image
            src={anime.coverURL}
            alt={anime.name}
            height={0}
            width={0}
            sizes="100vw"
            className="w-full rounded-none overflow-hidden"
          />
        </div>
        <div className="w-2/3 p-4">
          <div className="flex flex-row gap-2 overflow-hidden uppercase">
            <Badge className="cursor-pointer" variant={"default"}>
              {anime.type}
            </Badge>
            <Badge className="cursor-pointer" variant={"secondary"}>
              {anime.studio}
            </Badge>
          </div>
          <div className="flex flex-col mt-2 gap-2">
            <h2 className="text-xl font-bold text-primary overflow-hidden text-ellipsis text-nowrap">
              {anime.name}
            </h2>
            <p className="text-xs font-thin">{`Autor: ${anime.autor}`}</p>
            <p className="text-xs font-thin">{`Temporada: ${anime.season}`}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimeItem;
