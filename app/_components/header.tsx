"use client";
import { BookA, List, MenuIcon, User } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Search from "./search";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";

const Header = () => {
  const router = useRouter();
  const handleLogoClick = () => {
    router.push(`/`);
  };
  return (
    <Card>
      <CardContent className="p-5 flex flex-row justify-between items-center">
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={handleLogoClick}
        >
          <span className="text-primary">Anime</span> List
        </h1>
        <Search />
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant={"outline"}
              size={"icon"}
              className="items-center justify-center"
            >
              <MenuIcon size={18} />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-4">
            <SheetHeader className="my-4">
              <SheetTitle className="text-primary text-xl font-bold uppercase">
                Menu
              </SheetTitle>
            </SheetHeader>
            <Separator className="my-4" />
            <SheetDescription className="py-4">
              <nav>
                <ul className="flex flex-col gap-4">
                  <Button
                    variant={"outline"}
                    className="border-2 border-secondary gap-2 hover:bg-primary hover:border-primary"
                  >
                    <List />
                    Todos os Animes
                  </Button>
                  <Button
                    variant={"outline"}
                    className="border-2 border-secondary gap-2 hover:bg-primary hover:border-primary"
                  >
                    <User />
                    Meu perfil
                  </Button>
                  <Button
                    variant={"outline"}
                    className="border-2 border-secondary gap-2 hover:bg-primary hover:border-primary"
                  >
                    <BookA />
                    Minha Lista
                  </Button>
                </ul>
              </nav>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
