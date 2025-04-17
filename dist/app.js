"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./app/routes"));
const notFoundRoute_1 = __importDefault(require("./app/middleware/notFoundRoute"));
const globalErrorHadler_1 = __importDefault(require("./app/middleware/globalErrorHadler"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
//parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send({
        Message: "Bike Server  Server..."
    });
});
app.use('/api', routes_1.default);
app.use(globalErrorHadler_1.default);
app.use(notFoundRoute_1.default);
exports.default = app;
