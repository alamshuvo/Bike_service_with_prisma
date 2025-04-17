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
exports.serviceRecordController = void 0;
const catchAsync_1 = __importDefault(require("../../../helpers/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../helpers/sendResponse"));
const http_status_codes_1 = require("http-status-codes");
const service_service_1 = require("./service.service");
const createServiceRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield service_service_1.ServiceRecordServices.createServiceRecord(data);
    (0, sendResponse_1.default)(res, http_status_codes_1.StatusCodes.CREATED, {
        success: true,
        message: "Service record created successfully",
        data: result,
    });
}));
const getAllServiceRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.ServiceRecordServices.getAllServices();
    (0, sendResponse_1.default)(res, http_status_codes_1.StatusCodes.OK, {
        success: true,
        message: "Service records fetched successfully",
        data: result,
    });
}));
const getSingleServicesRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield service_service_1.ServiceRecordServices.getSingleServices(id);
    (0, sendResponse_1.default)(res, http_status_codes_1.StatusCodes.OK, {
        success: true,
        message: "service record fetched successfully",
        data: result,
    });
}));
const updateSingleServicesRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    const result = yield service_service_1.ServiceRecordServices.updateSingleServicesRecord(id, data || {});
    (0, sendResponse_1.default)(res, http_status_codes_1.StatusCodes.OK, {
        success: true,
        message: "service record fetched successfully",
        data: result,
    });
}));
const getPendingOrOverDueServiceRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.ServiceRecordServices.getPendingOrOverDueServiceRecord();
    (0, sendResponse_1.default)(res, http_status_codes_1.StatusCodes.OK, {
        success: true,
        message: "Overdue or pending services fetched successfully",
        data: result,
    });
}));
exports.serviceRecordController = {
    createServiceRecord,
    getAllServiceRecord,
    getSingleServicesRecord,
    updateSingleServicesRecord,
    getPendingOrOverDueServiceRecord
};
