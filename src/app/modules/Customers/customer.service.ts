import { Customer } from "../../../generated/prisma";
import { prisma } from "../../../shared/prisma";

const createCustomer = async(payload:Customer)=>{
  const result = await prisma.customer.create({ data: payload })
  return result
}

export const customerServices = {
    createCustomer
}