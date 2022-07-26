import CanvasEvent from "./CanvasEvent";

class MyCanvas {
    canvas:any
    ctx:any
    styles:object
    canvasEvent:any
    constructor(id: string) {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d");
        this.styles = {};
        this.canvasEvent = new CanvasEvent(this);
        this.initEvent();
    }
    initEvent() {
        this.changeLineType("free");
        this.changeStyle({
            color: "#000000",
            lineWidth: 1,
        })
        this.canvasEvent.mouseEventListenr();
    }
    /**修改style */
    changeStyle(style: object) {
        this.styles = Object.assign(this.styles, style);
        console.log("changeStyle", this.styles);
    }
    /**修改画线类型 */
    changeLineType(type: string) {
        this.canvasEvent.changeLineTypeHandler(type);
    }
    /**canvas转base64 */
    toDataUrl(type: string = "png", quality: 1) {
        return this.canvasEvent.toDataUrl(`image/${type}`, quality);
    }
    /**清空画布 */
    clear() {
        this.canvasEvent.clear();
    }

}
export default MyCanvas;