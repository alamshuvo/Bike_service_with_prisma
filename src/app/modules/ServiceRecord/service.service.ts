import { StatusCodes } from "http-status-codes";
import { ServiceRecord, Status } from "../../../generated/prisma";
import { prisma } from "../../../shared/prisma";
import AppError from "../../error/AppError";

const createServiceRecord = async (payload: ServiceRecord) => {
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
    where:{
      serviceId:id
    },
    data:{
      status:Status.done,
      completionDate
    }
  });
  return result;
};
export const ServiceRecordServices = {
  createServiceRecord,
  getAllServices,
  getSingleServices,
  updateSingleServicesRecord,
};
