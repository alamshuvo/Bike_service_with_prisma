import { Customer } from "../../../generated/prisma";
import { prisma } from "../../../shared/prisma";

const createCustomer = async(payload:Customer)=>{
  const result = await prisma.customer.create({ data: payload })
  return result
}

const getAllCustomers = async()=>{
    const result = await prisma.customer.findMany();
    return result
}
export const customerServices = {
    createCustomer,
    getAllCustomers
}