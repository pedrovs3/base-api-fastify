"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const routes_1 = require("./routes/routes");
class App {
    constructor() {
        this.fastify = (0, fastify_1.default)({
            logger: true,
        });
        this.middlewares();
        this.routes();
    }
    async middlewares() {
        await this.fastify.register(cors_1.default, {
            origin: true,
        });
    }
    routes() {
        this.fastify.register(routes_1.testRoutes);
    }
}
exports.default = new App().fastify;
