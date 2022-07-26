import './operationMenu.scss'
import { Button } from 'antd';
import { connect, useSelector } from 'react-redux'
import { useState } from 'react';
interface Prop{
    canvas:Canvas
}
interface Canvas{
    changeLineType:Function
}
function OperationMenu(props: Prop) {

    const canvas = props.canvas;
    const [selectType, setselectType] = useState("free");
    const changeLineType = (type: string) => {
        canvas.changeLineType(type);
        setselectType(v => type);
    };
    return (<div className="operationMenu">
        <ul className='operationMenu-ul'>
            <li className='operationMenu-ul-li'>
                <div className={selectType === "free" ? "content selected" : "content"}>
                    <p onClick={() => { changeLineType("free") }}>自由线条</p>
                </div>
            </li>
            <li className='operationMenu-ul-li'>
                <div className={selectType === "lineTo" ? "content selected" : "content"}>
                    <p onClick={() => { changeLineType("lineTo") }}>直线</p>

                </div>
            </li>  
            <li className='operationMenu-ul-li'>
                <div className={selectType === "curve" ? "content selected" : "content"}>
                    <p onClick={() => { changeLineType("curve") }}>曲线</p>

                </div>
            </li>
            <li className='operationMenu-ul-li'>
                <div className={selectType === "eraser" ? "content selected" : "content"}>
                    <p onClick={() => { changeLineType("eraser") }}>橡皮擦</p>

                </div>
            </li>

        </ul>

    </div>)

}
const mapStateToProps = (state: any) => {
    return {
        canvas: state.canvas.canvas,
    }
}

export default connect(mapStateToProps)(OperationMenu);