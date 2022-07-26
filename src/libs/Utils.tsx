class Utils {
    constructor() { }
    /**防抖函数 */
    debounce(fn: Function, delay: number): Function {
        let timer: number | null = null;
        return function () {
            const content: any = this;
            const args: any = arguments;
            if (timer) clearTimeout(timer);
            timer = window.setTimeout(() => {
                fn.call(content, ...args)
            }, delay);
        }
    }

    /**节流函数 */
    throttle(fn: Function, delay: number) {
        let lastTime: number = 0;
        return function () {
            const content: any = this;
            const args: any = arguments;
            const nowTime: number = Date.now();
            if (nowTime - lastTime > delay) {
                fn.apply(content, ...args);
                lastTime = nowTime;
            }

        }

    }
}
export default new Utils();