import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import ReviewItem from "../_components/reviewItem";
import { db } from "../_lib/prisma";
import AnimeItem from "../_components/animeItem";

export default async function Home() {
  const animes = await db.anime.findMany({});
  return (
    <>
      <div className="flex align-center justify-center h-auto w-full">
        <div className="max-w-[850px]">
          <div className="px-5 pt-5">
            <h2 className="text-xl font-bold">Bem-vindo</h2>
            <p className="capitalize text-sm">
              {format(new Date(), "EEEE',' d 'de' MMMM 'de' yyyy", {
                locale: ptBR,
              })}
            </p>
          </div>
          <div className="px-5 mt-6">
            <h2 className="text-xs uppercase font-bold mb-5">
              Últimas reviews
            </h2>
            <ReviewItem />
          </div>
          <div className="px-5 py-6">
            <h2 className="text-xs uppercase font-bold mb-5">Recomendados</h2>
            <div className="py-3 flex flex-row flex-wrap gap-2">
              {animes.map((anime) => (
                <AnimeItem key={anime.id} anime={anime} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
