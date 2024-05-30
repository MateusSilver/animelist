import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Search from "./search";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 flex flex-row justify-between items-center">
        <h1>Anime List</h1>
        <div className="flex flex-row gap-2">
          <Search />
          <Button variant={"outline"} size={"icon"}>
            <MenuIcon size={18} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Header;
