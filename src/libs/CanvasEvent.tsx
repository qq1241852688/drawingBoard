
import LineEvent from "./LineEvent";


class CanvasEvent {
    container:any
    canvas:any
    ctx:any
    lineEvent:object
    type:string
    constructor(container:any) {
        this.container=container;
        this.canvas = container.canvas;
        this.ctx = container.ctx;
        this.type="";
        this.lineEvent = new LineEvent(container);
    }

    /**画线类型改变 */
    changeLineTypeHandler(type:string){
        this.type=type;
    }
    /**绑定鼠标事件 */
    mouseEventListenr(): void {
        this.canvas.addEventListener("mousedown", this.mousedownHandler.bind(this), false);
    }
    
    /**鼠标点击事件 */
    mousedownHandler(event: any): void {
        console.log("mousedownHandler", event);
        let self: any = this;
        this.canvas.onmousemove = mousemoveHandler;
        this.canvas.onmouseup = mouseupHandler;
        let downX: number = event.offsetX;
        let downY: number = event.offsetY;
        let moveX: number, moveY: number;
        /**鼠标移动事件 */
        function mousemoveHandler(event: any): void {
            // console.log("onmousemove", event);
            moveX = event.offsetX;
            moveY = event.offsetY;
            if (self.type === "free") {
                self.lineEvent.goFreeLineHandler(downX, downY, moveX, moveY)
                downX = moveX;
                downY = moveY;
            }else if(self.type==="eraser"){
                self.lineEvent.goEraserHandler(downX, downY, moveX, moveY)
                downX = moveX;
                downY = moveY;
            }



        }
        /**点击松开事件 */
        function mouseupHandler(event: any): void {
            // console.log("mouseupHandler", event);
            const upX: number = event.offsetX;
            const upY: number = event.offsetY;

            if (self.type === "lineTo") {
                self.lineEvent.goLineToHandler(downX, downY, upX, upY);
            }else if(self.type==="curve"){
                self.lineEvent.goBezieCurveHandler(downX, downY, moveX / 2, moveY / 2, upX, upY);
            }else if(self.type==="eraser"){
                self.lineEvent.goEraserHandler(upX, upY)
                
            }
            self.canvas.onmousemove = null;
            self.canvas.onmouseup = null;
        }
    }
    /**销毁 */
    destory() {
        this.canvas.removeEventListener("mousedown", this.mousedownHandler);
    }
    /**canvas转base64 */
    toDataUrl(type: string = "png", quality: 1) {
        return this.canvas.toDataURL(`image/${type}`, quality);
    }
    /**清空画布 */
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

}
export default CanvasEvent;