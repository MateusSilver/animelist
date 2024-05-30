import { Anime } from "@prisma/client";
import { Card, CardContent } from "./ui/card";

interface AnimeItemProps {
  anime: Anime;
}

const AnimeItem = ({ anime }: AnimeItemProps) => {
  return (
    <Card>
      <CardContent className="p-0">
        <h2>{anime.name}</h2>
      </CardContent>
    </Card>
  );
};

export default AnimeItem;
