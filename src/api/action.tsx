import _axios from "./index";

export function getJsonData(url:any,params:any){
    return _axios.get(url,{params:params})
}
export function postJsonData(url:any, params:any) {
    return _axios.post(url, params)
}

export function postFormData(url:any, params:any, onsuccess:any, onerror:any) {
    let fd = new FormData();
    for (let info in params) {
        fd.append(info, params[info]);
    }
    return _axios.post(url, fd, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    })
}

export function getBufferMethon(url:any, params:any, onsuccess:any, onerror:any) {
    _axios.get(url, {
        params: params,
        responseType: 'arraybuffer'
    }).then(res => {
        onsuccess(res)
    }).catch(err => {
        onerror(err)
    })
}
export function getTextFile(url:any, params:any, onsuccess:any, onerror:any) {
    _axios.get(url, params)
        .then(res => {
            onsuccess(res)
        }).catch(err => {
            onerror(err)
        })
}
