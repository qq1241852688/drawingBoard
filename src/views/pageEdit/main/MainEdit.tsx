import './mainEdit.scss'
import CanvasJS from '@/libs/CanvasJS'
import { connect,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux'
import { changeCanvas, changeCanvasAsync } from '@/store/acitons';
import OperationMenu from './operationMenu/OpearationMenu';

interface Prop{
    changeCanvas:Function
}
function MainEdit(props: Prop) {
    let canvasContainer: any;
    useEffect(() => {
        console.log("第一次渲染");
        init();
    }, [])
    const init = () => {
        if (canvasContainer) return;
        canvasContainer = new CanvasJS("myCanvas");
        //存储canvas对象
        props.changeCanvas(canvasContainer);
        // props.changeCanvasAsync(canvasContainer);
        console.log("canvasContainer", canvasContainer);
        
    }
    return (<div className="mainEdit">
        <div className='menu'>
            <OperationMenu></OperationMenu>
        </div>
        <div className='edit'>
            <canvas id='myCanvas' width="500px" height="500px"></canvas>
        </div>
    </div>)

}
const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators(
        {
            changeCanvas: changeCanvas,
            changeCanvasAsync: changeCanvasAsync,
        }, dispatch
    )
}
export default connect(null, mapDispatchToProps)(MainEdit);