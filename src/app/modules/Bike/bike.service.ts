import { StatusCodes } from "http-status-codes";

import { prisma } from "../../../shared/prisma";
import AppError from "../../error/AppError";
import { Bike } from "@prisma/client";

const createBike = async (payload: Bike) => {
  const result = await prisma.bike.create({ data: payload });
  return result;
};

const getAllBikes = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

const getSingleBike = async (id: string) => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
  });
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND,"bike not found")
  }
  return result;
};


export const bikeServices = {
  createBike,
  getAllBikes,
  getSingleBike
};
