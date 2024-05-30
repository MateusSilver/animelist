import { ptBR } from "date-fns/locale";
import Header from "../_components/header";
import { format } from "date-fns";
import ReviewItem from "../_components/reviewItem";
import { db } from "../_lib/prisma";
import AnimeItem from "../_components/animeItem";

export default async function Home() {
  const animes = await db.anime.findMany({});
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
        <h2 className="text-xs uppercase font-bold mb-5">Últimas reviews</h2>
        <ReviewItem />
      </div>
      <div className="px-5 my-6">
        <h2 className="text-xs uppercase font-bold mb-5">
          Animes Recomendados
        </h2>
        <div className="py-3 flex flex-col gap-2">
          {animes.map((anime) => (
            <AnimeItem key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </>
  );
}
