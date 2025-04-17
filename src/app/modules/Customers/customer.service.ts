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

const updateSingleCustomer = async (id: string, payload: any) => {
  const isCustomerExist = await prisma.customer.findUniqueOrThrow({
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
export const customerServices = {
  createCustomer,
  getAllCustomers,
  getSingleCustomers,
  updateSingleCustomer,
};
