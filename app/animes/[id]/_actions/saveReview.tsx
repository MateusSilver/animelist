"use server";

import { db } from "@/app/_lib/prisma";

interface ReviewParams {
  animeID: string;
  userID: string;
  review: string;
  status: string;
  markbook: boolean;
  nota: number;
}

const SaveReview = async (params: ReviewParams) => {
  await db.review.create({
    data: {
      animeID: params.animeID,
      userID: params.userID,
      nota: params.nota,
      coment: params.review,
      status: params.status,
      markbook: params.markbook,
    },
  });
};

export default SaveReview;
