import { Customer } from "../../../generated/prisma";
import { prisma } from "../../../shared/prisma";

const createCustomer = async (payload: Customer) => {
  const result = await prisma.customer.create({ data: payload });
  return result;
};

const getAllCustomers = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

const getSingleCustomers = async (id: string) => {
  const result = await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });
  return result;
};

const updateSingleCustomer = async (id: string, payload:Partial<Customer>) => {
 await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });
  const updatedData = await prisma.customer.update({
    where: { customerId: id },
    data: payload,
  });
  return updatedData
};

const deleteSingleCustomer = async (id:string)=>{
  await prisma.customer.findUniqueOrThrow({
    where:{
        customerId:id
    }
  })
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
