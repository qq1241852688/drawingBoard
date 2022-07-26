import { Button } from 'antd';
import { connect } from 'react-redux';
import './mainHeader.scss'
interface Prop{
    canvas:Canvas
}
interface Canvas{
    clear:Function,
    toDataUrl:Function
}
function MainHeader(props: Prop) {
    const canvas = props.canvas;
    const clearHandler = ():void => {
        canvas.clear();
    };
    const saveHandler = ():void => {
        console.log("saveHandler");
        const url = canvas.toDataUrl();
        const dataImg = new Image();
        dataImg.src = url;
        const alink = document.createElement("a");
        alink.href = dataImg.src;
        alink.download = "testImg.png";
        alink.click();
    };
    return (<div className="mainHeader">
        <div className='title'>   <h3>DRAWINNGBOARD</h3></div>

        <div className='btns'>
        

            <Button type="primary" onClick={() => { clearHandler() }} className="clear">清空</Button>

            <Button type="primary" onClick={() => { saveHandler() }}>保存</Button>

        </div>
    </div>)
}
const mapStateToProps = (state: any) => {
    return {
        canvas: state.canvas.canvas,
    }
}

export default connect(mapStateToProps)(MainHeader);