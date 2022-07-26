import { Col, InputNumber, Row, Slider } from 'antd';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './lineWidth.scss'
interface Prop{
    canvas:object,
    lineWidthChange:Function,

}

function LineWidth(props: Prop) {
    const [inputValue, setInputValue] = useState(2);
    const onChange = (newValue: number) => {
        setInputValue(newValue);
        props.lineWidthChange(newValue);
    };
    useEffect(()=>{
        if(props.canvas){
          props.lineWidthChange(inputValue);
        }
    },[props.canvas])
    return (
        <Row className="slider">
            <Col span={12} >
                <Slider
                    min={1}
                    max={20}
                    onChange={onChange}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={1}
                    max={20}
                    style={{
                        margin: '0 16px',
                    }}
                    value={inputValue}
                    onChange={onChange}
                />
            </Col>
        </Row>
    );
};

const mapStateToProps = (state: any) => {
    return {
        canvas: state.canvas.canvas,
    }
}

export default connect(mapStateToProps)(LineWidth);