declare class Logger {
    /**
     *
     * enum css property
     */
    private customStyle;
    private log;
    custom(options: any, msg: string): void;
    /**
     *
     * custom
     */
    info(options?: any, ...msg: any): void;
    success(...msg: any): void;
    /**
     *
     * High contrast, white text and green background color, indicate successful msg.
     */
    SUCCESS(...msg: any): void;
    error(...msg: any): void;
    /**
     *
     * High contrast, white text and red background color, indicate fail msg.
     */
    ERROR(...msg: any): void;
    blue(...msg: any): void;
    red(...msg: any): void;
    BLUE(...msg: any): void;
    RED(...msg: any): void;
    BLACK(...msg: any): void;
}
declare const _default: Logger;
export default _default;
