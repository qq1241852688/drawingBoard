import './mainBottom.scss'
import LineWidth from './LineWidth';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
interface Prop{
    canvas:Canvas
}
interface Canvas{
    changeStyle:Function,
    toDataUrl:Function
}
function MainBottom(props: Prop) {
    const canvas = props.canvas;
    const colorChange = (e: any): void => {
        const color = e.target.value;
        canvas.changeStyle({
            color: color,
        })
    };
    const lineWidthChange = (v: number): void => {
        // console.log("lineWidthChange", v);
        canvas.changeStyle({
            lineWidth: v,
        })
    };
    useEffect(() => {
        if (props.canvas) {
            canvas.changeStyle({
                color: "#000000",
            })
        }
    }, [props.canvas])
    return (<div className="mainBottom">
        <div className='lineStyle'>
            <div className='color'>
                <span>颜色：</span>  <input type="color" name="color" id="color" onChange={colorChange} />
            </div>
            <div className='lineWidth'>
                <span>粗细：</span>   <LineWidth lineWidthChange={lineWidthChange}></LineWidth>
            </div>

        </div>
    </div>)
}
const mapStateToProps = (state: any) => {
    return {
        canvas: state.canvas.canvas,
    }
}

export default connect(mapStateToProps)(MainBottom);