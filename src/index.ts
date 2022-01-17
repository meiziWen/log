class Logger {

    /**
     *
     * enum css property
     */
    private customStyle = {
        color: '',
        bg: '',
        fontFamily: '',
        textShadow: '',
        padding: '5px 10px',
        fontSize: '18px',
    };

    private log(...data: any) {
        console.log(...data);
    }

    custom(options: any = {}, msg: string) {
        if (JSON.stringify(options) === '{}') return this.log(msg);
        let styles = [];
        // 因为部分属性会用缩写, 且console并不支持所有样式，所以此处枚举
        if (options.color) styles.push(`color: ${options.color}`);
        if (options.fontSize) styles.push(`font-size: ${options.fontSize}`);
        if (options.fontFamily) styles.push(`font-family: ${options.fontFamily}`);
        if (options.textShadow) styles.push(`text-shadow: ${options.textShadow}`);
        if (options.padding) styles.push(`padding: ${options.padding}`);
        if (options.bg) styles.push(`background-color: ${options.bg}`);
        const styleStr = styles.join(';');
        this.log(`%c${JSON.stringify(msg).substring(1, JSON.stringify(msg).length - 1)}`, styleStr);
    }

    /**
     *
     * custom
     */
    info(options: any = {}, ...msg: any) {
        this.custom(options, msg);
    }

    success(...msg: any) {
        this.custom({color: 'green'}, msg);
    }

    /**
     *
     * High contrast, white text and green background color, indicate successful msg.
     */
    SUCCESS(...msg: any) {
        this.customStyle.color = 'white';
        this.customStyle.bg = 'green';
        this.custom(this.customStyle, msg);
    }

    error(...msg: any) {
        this.custom({color: 'red'}, msg);
    }

    /**
     *
     * High contrast, white text and red background color, indicate fail msg.
     */
    ERROR(...msg: any) {
        this.customStyle.color = 'white';
        this.customStyle.bg = 'red';
        this.custom(this.customStyle, msg);
    }


    blue(...msg: any) {
        this.custom({color: 'blue'}, msg);
    }

    red(...msg: any) {
        this.custom({color: 'red'}, msg);
    }

    BLUE(...msg: any) {
        this.customStyle.color = 'white';
        this.customStyle.bg = 'blue';
        this.custom(this.customStyle, msg);
    }

    RED(...msg: any) {
        this.customStyle.color = 'white';
        this.customStyle.bg = 'red';
        this.custom(this.customStyle, msg);
    }

    BLACK(...msg: any) {
        this.customStyle.color = 'gold';
        this.customStyle.bg = 'black';
        this.custom(this.customStyle, msg);
    }
}

export default new Logger();
