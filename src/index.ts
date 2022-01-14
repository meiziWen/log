class Logger {
    private log(...data: any) {
        console.log(...data);
    }
    info(options?: any, ...msg: any) {
        const styles = [
            `color: ${options.color || ''}`,
            `font-size: ${options.fontSize || ''}`,
            `font-family: ${options.fontFamily || ''}`,
            `text-shadow: ${options.textShadow || ''}`,
            `padding: ${options.padding || ''}`,
        ].join(';');
        this.log(JSON.stringify(msg), styles);
    }
    success(...msg: any) {
        this.log({ color: 'red' }, `%c${JSON.stringify(msg)}`);
    }
}
export default new Logger();