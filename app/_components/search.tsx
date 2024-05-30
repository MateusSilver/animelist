"use client";
import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="flex items-center gap-2">
      <Button variant="default">
        <SearchIcon size={18} />
      </Button>
      <Input placeholder="Buscar animes..." className="h-10" />
    </div>
  );
};

export default Search;
