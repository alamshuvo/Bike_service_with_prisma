import { Bike, Customer } from "../../../generated/prisma";
import { prisma } from "../../../shared/prisma";

const createBike = async (payload: Bike) => {
  const result = await prisma.bike.create({ data: payload });
  return result;
};

const getAllBikes = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

const getSingleBike = async (id: string) => {
  const result = await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId: id,
    },
  });
  return result;
};


export const bikeServices = {
  createBike,
  getAllBikes,
  getSingleBike
};
