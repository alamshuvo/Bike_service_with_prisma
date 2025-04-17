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
exports.ServiceRecordServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const prisma_1 = require("../../../shared/prisma");
const AppError_1 = __importDefault(require("../../error/AppError"));
const client_1 = require("@prisma/client");
const createServiceRecord = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    const result = yield prisma_1.prisma.serviceRecord.create({ data: payload });
    return result;
});
const getAllServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.serviceRecord.findMany();
    return result;
});
const getSingleServices = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id,
        },
    });
    return result;
});
const updateSingleServicesRecord = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const isExist = yield prisma_1.prisma.serviceRecord.findUnique({
        where: {
            serviceId: id,
        },
        select: { serviceId: true },
    });
    if (!isExist) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "service not found");
    }
    const completionDate = (_a = payload.completionDate) !== null && _a !== void 0 ? _a : new Date();
    const result = yield prisma_1.prisma.serviceRecord.update({
        where: {
            serviceId: id,
        },
        data: {
            status: client_1.Status.done,
            completionDate,
        },
    });
    return result;
});
const getPendingOrOverDueServiceRecord = () => __awaiter(void 0, void 0, void 0, function* () {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 7);
    const result = yield prisma_1.prisma.serviceRecord.findMany({
        where: {
            OR: [
                {
                    status: {
                        in: [client_1.Status.pending, client_1.Status.in_progress],
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
});
exports.ServiceRecordServices = {
    createServiceRecord,
    getAllServices,
    getSingleServices,
    updateSingleServicesRecord,
    getPendingOrOverDueServiceRecord,
};
