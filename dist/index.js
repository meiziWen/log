"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger() {
        /**
         *
         * enum css property
         */
        this.customStyle = {
            color: '',
            bg: '',
            fontFamily: '',
            textShadow: '',
            padding: '5px 10px',
            fontSize: '18px',
        };
    }
    Logger.prototype.log = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        console.log.apply(console, data);
    };
    Logger.prototype.custom = function (options, msg) {
        if (options === void 0) { options = {}; }
        if (JSON.stringify(options) === '{}')
            return this.log(msg);
        var styles = [];
        // 因为部分属性会用缩写, 且console并不支持所有样式，所以此处枚举
        if (options.color)
            styles.push("color: ".concat(options.color));
        if (options.fontSize)
            styles.push("font-size: ".concat(options.fontSize));
        if (options.fontFamily)
            styles.push("font-family: ".concat(options.fontFamily));
        if (options.textShadow)
            styles.push("text-shadow: ".concat(options.textShadow));
        if (options.padding)
            styles.push("padding: ".concat(options.padding));
        if (options.bg)
            styles.push("background-color: ".concat(options.bg));
        var styleStr = styles.join(';');
        this.log("%c".concat(JSON.stringify(msg).substring(1, JSON.stringify(msg).length - 1)), styleStr);
    };
    /**
     *
     * custom
     */
    Logger.prototype.info = function (options) {
        if (options === void 0) { options = {}; }
        var msg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            msg[_i - 1] = arguments[_i];
        }
        this.custom(options, msg);
    };
    Logger.prototype.success = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.custom({ color: 'green' }, msg);
    };
    /**
     *
     * High contrast, white text and green background color, indicate successful msg.
     */
    Logger.prototype.SUCCESS = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.customStyle.color = 'white';
        this.customStyle.bg = 'green';
        this.custom(this.customStyle, msg);
    };
    Logger.prototype.error = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.custom({ color: 'red' }, msg);
    };
    /**
     *
     * High contrast, white text and red background color, indicate fail msg.
     */
    Logger.prototype.ERROR = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.customStyle.color = 'white';
        this.customStyle.bg = 'red';
        this.custom(this.customStyle, msg);
    };
    Logger.prototype.blue = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.custom({ color: 'blue' }, msg);
    };
    Logger.prototype.red = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.custom({ color: 'red' }, msg);
    };
    Logger.prototype.BLUE = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.customStyle.color = 'white';
        this.customStyle.bg = 'blue';
        this.custom(this.customStyle, msg);
    };
    Logger.prototype.RED = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.customStyle.color = 'white';
        this.customStyle.bg = 'red';
        this.custom(this.customStyle, msg);
    };
    Logger.prototype.BLACK = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.customStyle.color = 'gold';
        this.customStyle.bg = 'black';
        this.custom(this.customStyle, msg);
    };
    return Logger;
}());
exports.default = new Logger();
