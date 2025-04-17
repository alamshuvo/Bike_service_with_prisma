import { ServiceRecord } from "../../../generated/prisma";
import { prisma } from "../../../shared/prisma";

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
  export const ServiceRecordServices ={
    createServiceRecord,
    getAllServices,
    getSingleServices
  }