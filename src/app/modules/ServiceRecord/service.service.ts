import { StatusCodes } from "http-status-codes";

import { prisma } from "../../../shared/prisma";
import AppError from "../../error/AppError";
import { ServiceRecord, Status } from "@prisma/client";

const createServiceRecord = async (payload: ServiceRecord) => {
  console.log(payload);
  const result = await prisma.serviceRecord.create({ data: payload });
  return result;
};
const getAllServices = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};

const getSingleServices = async (id: string) => {
  const result = await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId: id,
    },
  });
  return result;
};

const updateSingleServicesRecord = async (
  id: string,
  payload: Partial<ServiceRecord>
) => {
  const isExist = await prisma.serviceRecord.findUnique({
    where: {
      serviceId: id,
    },
    select: { serviceId: true },
  });
  if (!isExist) {
    throw new AppError(StatusCodes.NOT_FOUND, "service not found");
  }
  const completionDate = payload.completionDate ?? new Date();
  const result = await prisma.serviceRecord.update({
    where: {
      serviceId: id,
    },
    data: {
      status: Status.done,
      completionDate,
    },
  });
  return result;
};

const getPendingOrOverDueServiceRecord = async () => {
  const pastDate = new Date();
  pastDate.setDate(pastDate.getDate() - 7);

  const result = await prisma.serviceRecord.findMany({
    where: {
      OR: [
        {
          status: {
            in: [Status.pending, Status.in_progress],
          },
        },
        {
          serviceDate: {
            lt: pastDate,
          },
        },
      ],
    },
  });

  return result;
};

export const ServiceRecordServices = {
  createServiceRecord,
  getAllServices,
  getSingleServices,
  updateSingleServicesRecord,
  getPendingOrOverDueServiceRecord,
};
