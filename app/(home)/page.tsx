import { ptBR } from "date-fns/locale";
import Header from "../_components/header";
import { format } from "date-fns";
import AnimeItem from "../_components/animeItem";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Bem-vindo</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' d 'de' MMMM 'de' yyyy", {
            locale: ptBR,
          })}
        </p>
      </div>
      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase font-bold mb-5">Últimos animes</h2>
        <AnimeItem />
      </div>
    </>
  );
}
