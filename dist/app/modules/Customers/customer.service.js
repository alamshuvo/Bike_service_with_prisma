"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerServices = void 0;
const prisma_1 = require("../../../shared/prisma");
const AppError_1 = __importDefault(require("../../error/AppError"));
const http_status_codes_1 = require("http-status-codes");
const createCustomer = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.create({ data: payload });
    return result;
});
const getAllCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.findMany();
    return result;
});
const getSingleCustomers = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.findUnique({
        where: {
            customerId: id,
        },
    });
    if (!result) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Customer not found");
    }
    return result;
});
const updateSingleCustomer = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.findUnique({
        where: {
            customerId: id,
        },
    });
    if (!result) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Customer not found");
    }
    const updatedData = yield prisma_1.prisma.customer.update({
        where: { customerId: id },
        data: payload,
    });
    return updatedData;
});
const deleteSingleCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const resulta = yield prisma_1.prisma.customer.findUnique({
        where: {
            customerId: id
        }
    });
    if (!resulta) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Customer not found");
    }
    const result = yield prisma_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const customerDeletedData = yield tx.customer.delete({
            where: { customerId: id }
        });
        const bikeDeletedData = yield tx.bike.deleteMany({
            where: {
                customerId: id
            }
        });
        return customerDeletedData;
    }));
    return result;
});
exports.customerServices = {
    createCustomer,
    getAllCustomers,
    getSingleCustomers,
    updateSingleCustomer,
    deleteSingleCustomer
};
