import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const AnimeItem = () => {
  return (
    <Card>
      <CardContent className="p-5 flex flex-row gap-2 items-center">
        <Avatar>
          <AvatarImage src="https://utfs.io/f/5c0bdf2f-8960-472c-af24-abf4c1a1dc1d-czb9o6.jpg" />
        </Avatar>
        <div>
          <Badge className="bg-opacity text-primary cursor-pointer">TV</Badge>
          <h2>Chainsaw Man</h2>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimeItem;
