interface Style{
    color:string,
    lineWidth:number
}
class LineEvent {
    canvas:any
    ctx:any
    styles:Style
    constructor(container:any) {
        this.canvas = container.canvas;
        this.ctx = container.ctx;
        this.styles=container.styles;
    }

    /**橡皮擦 */
    goEraserHandler(x: number, y: number){
        let size=this.styles.lineWidth*2;
        this.ctx.clearRect(x-size/2,y-size/2,size,size)
    }

    /**自由线条 */
    goFreeLineHandler(x0: number, y0: number, x1: number, y1: number) {
        this.ctx.beginPath();
        this.ctx.strokeStyle =this.styles.color;
        this.ctx.lineWidth = this.styles.lineWidth;
        this.ctx.moveTo(x0, y0);
        this.ctx.lineTo(x1, y1);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.arc(x1, y1, this.styles.lineWidth/2, 0, Math.PI * 2)
        this.ctx.fillStyle = this.styles.color;
        this.ctx.fill();
      
    }

    /**画直线 */
    goLineToHandler(x0: number, y0: number, x1: number, y1: number) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.styles.color;
        this.ctx.lineWidth = this.styles.lineWidth;
        this.ctx.moveTo(x0, y0);
        this.ctx.lineTo(x1, y1);
        this.ctx.stroke();
        this.ctx.closePath();

    }
    /**画曲线 */
    goBezieCurveHandler(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.styles.color;
        this.ctx.lineWidth = this.styles.lineWidth;
        this.ctx.moveTo(x0, y0);
        this.ctx.bezierCurveTo(x0, y0, x1, y1, x2, y2);
        this.ctx.stroke();
        this.ctx.closePath();

    }
}

export default LineEvent;