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
exports.dropCollections = exports.dropDB = exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
let mongo = null;
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    mongo = yield mongodb_memory_server_1.MongoMemoryServer.create();
    const uri = mongo.getUri();
    yield mongoose_1.default.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then((_res) => {
        console.log("Connected to TestDB");
    })
        .catch((err) => {
        console.log("Failed to connect to TestDB - ", err);
    });
});
exports.connectDB = connectDB;
const dropDB = () => __awaiter(void 0, void 0, void 0, function* () {
    if (mongo) {
        yield mongoose_1.default.connection.dropDatabase();
        yield mongoose_1.default.connection.close();
        yield mongo.stop();
    }
});
exports.dropDB = dropDB;
const dropCollections = () => __awaiter(void 0, void 0, void 0, function* () {
    if (mongo) {
        const collections = yield mongoose_1.default.connection.db.collections();
        for (const collection of collections) {
            yield mongoose_1.default.connection.dropCollection(collection.collectionName);
        }
    }
});
exports.dropCollections = dropCollections;
//# sourceMappingURL=setupdb.js.map