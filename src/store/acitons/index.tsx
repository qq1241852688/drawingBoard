const CHANGE_CANVAS = "change_canvas";

const changeCanvas = (data: object): object => {
    return {
        type: CHANGE_CANVAS,
        data
    }
}

export {
    CHANGE_CANVAS,
    changeCanvas,

}