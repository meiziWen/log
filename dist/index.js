"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    log(output) {
        console.log(output);
    }
    info(output) {
        this.log(output);
    }
}
const log = new Logger();
exports.default = log;
