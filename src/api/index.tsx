import axios from 'axios'
let config = {
    //baseURL:process.env.baseURL||process.env.apiUrl||"",
    //timeout:10*1000,
    //withCredentials:true,
}
const _axios = axios.create(config);
/**请求拦截 */
_axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
/**响应拦截 */
_axios.interceptors.response.use(function (response) {
    if (response.status == 200) {
        return response.data;
        // let code = response.data.returnCode;
			// if(code == undefined){
			// 	code = response.data.code;
			// }
			// if(code == 0 || code === '0000'){
			// 	return response.data.returnData || response.data.data;
			// }else {
			// 	if(response.data instanceof ArrayBuffer){
			// 		return response.data;
			// 	}
			// 	else if(response.data instanceof Blob){
			// 		return response.data;
			// 	}
			// 	else if(typeof response.data == 'string' || typeof response.data == 'object'){
			// 		return response.data;
			// 	}
			// 	else{
			// 		return Promise.reject(response.data.returnDesc)
			// 	}
			// }
    } else {
        return Promise.reject('error');
    }

}, function (error) {
    return Promise.reject(error);
})

export default _axios;