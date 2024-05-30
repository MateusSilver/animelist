import { db } from "@/app/_lib/prisma";

interface AnimeDetailsPageProps {
  params: {
    id?: string;
  };
}

const AnimeDetailsPage = async ({ params }: AnimeDetailsPageProps) => {
  const anime = await db.anime.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!anime) {
    // redirect to home page
    return null;
  }
  return <h1>{anime.name}</h1>;
};

export default AnimeDetailsPage;
