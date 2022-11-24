"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./routes/index"));
const compression_1 = __importDefault(require("compression"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, compression_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(0, index_1.default)(app);
// app.use(express.static(path.resolve('lisdin-ui', 'build')))
// app.get('*', (_, res) => {
//   res.sendFile(path.resolve('lisdin-ui', 'build', 'index.html'))
// })
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
