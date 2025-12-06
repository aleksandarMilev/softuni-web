"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diagnostics = void 0;
const diagnostics = (carBody, tires, engine) => {
    console.log(carBody.runDiagnostics());
    console.log(tires.runDiagnostics());
    console.log(engine.runDiagnostics());
};
exports.diagnostics = diagnostics;
