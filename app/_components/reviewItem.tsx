import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const ReviewItem = () => {
  return (
    <Card className="w-[450px] max-h-[200px]">
      <CardContent className="p-5 flex flex-row justify-between items-center w-full">
        <Avatar className="">
          <AvatarImage src="#" />
          <AvatarFallback>Anime</AvatarFallback>
        </Avatar>
        <div className=" flex flex-row justify-between">
          <div className="flex flex-col gap-2">
            <Badge className="bg-opacity text-primary cursor-pointer w-fit">
              TV
            </Badge>
            <div className="w-[300px] px-2">
              <h2 className="text-xl text-ellipsis truncate overflow-hidden">
                Chainsaw Man
              </h2>
              <h3 className="text-xs text-ellipsis truncate overflow-hidden">
                de Tatsuki Fujimoto
              </h3>
              <p className="truncate text-ellipsis overflow-hidden">
                em nostrum repellat voluptatem enim ipsam explicabo ratione
                omnis dolore.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-2 border-l border-secondary px-3">
            <p className="text-md text-primary">Nota</p>
            <p className="text-2xl">1</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewItem;
