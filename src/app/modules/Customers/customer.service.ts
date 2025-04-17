import { Customer } from "../../../generated/prisma";
import { prisma } from "../../../shared/prisma";
import AppError from "../../error/AppError";
import { StatusCodes } from "http-status-codes";
const createCustomer = async (payload: Customer) => {
  const result = await prisma.customer.create({ data: payload });
  return result;
};

const getAllCustomers = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

const getSingleCustomers = async (id: string) => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, "Customer not found")
  }
  return result;
};

const updateSingleCustomer = async (id: string, payload:Partial<Customer>) => {
 const result =  await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, "Customer not found")
  }
  const updatedData = await prisma.customer.update({
    where: { customerId: id },
    data: payload,
  });
  return updatedData
};

const deleteSingleCustomer = async (id:string)=>{
 const resulta =  await prisma.customer.findUnique({
    where:{
        customerId:id
    }
  })
  if (!resulta) {
    throw new AppError(StatusCodes.NOT_FOUND, "Customer not found")
  }
  const result = await prisma.$transaction(async(tx)=>{
    const customerDeletedData = await tx.customer.delete({
      where:{customerId:id}
    })
    const bikeDeletedData = await tx.bike.deleteMany({
      where: {
        customerId: id
      }
    })
    return customerDeletedData
   })
  
   return result;
}
export const customerServices = {
  createCustomer,
  getAllCustomers,
  getSingleCustomers,
  updateSingleCustomer,
  deleteSingleCustomer
};
