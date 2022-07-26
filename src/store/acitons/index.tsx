const CHANGE_CANVAS = "change_canvas";

const changeCanvas = (data: object): object => {
    return {
        type: CHANGE_CANVAS,
        data
    }   
    // return (dispatch: any) => {
    //     setTimeout(() => {
 
    //         dispatch((() => {
    //             return {
    //                 type: CHANGE_CANVAS,
    //                 data
    //             }
    //         })())
    //     }, 2000)
    // }

}
const changeCanvasAsync = (data:object) => {
    return (dispatch: any) => {
        setTimeout(() => {
            dispatch(changeCanvas(data))
        }, 2000)
    }
}

export {
    CHANGE_CANVAS,
    changeCanvas,
    changeCanvasAsync,
}