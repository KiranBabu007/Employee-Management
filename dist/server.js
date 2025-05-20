"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const emp_router_1 = __importDefault(require("./emp_router"));
const app = (0, express_1.default)();
app.use("/employees", emp_router_1.default);
app.get('/', (req, res) => {
    res.send('Started now');
});
app.get('/employees', (req, res) => {
    res.status(200).send('Employee');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//# sourceMappingURL=server.js.map