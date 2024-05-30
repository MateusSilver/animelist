import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const AnimeItem = () => {
  return (
    <Card>
      <CardContent className="p-5 flex flex-row gap-4 items-center">
        <Avatar>
          <AvatarImage src="https://utfs.io/f/5c0bdf2f-8960-472c-af24-abf4c1a1dc1d-czb9o6.jpg" />
          <AvatarFallback>Anime</AvatarFallback>
        </Avatar>
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-col gap-2 w-auto">
            <Badge className="bg-opacity text-primary cursor-pointer w-fit">
              TV
            </Badge>
            <div>
              <h2 className="text-xl">Chainsaw Man</h2>
              <h3 className="text-xs">de Tatsuki Fujimoto</h3>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-2 border-l border-secondary px-3">
            <p className="text-md text-primary">Temporada</p>
            <p className="text-2xl">1</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimeItem;
