import * as action  from "./action";
import * as Interface from './interfaceUrl'

/**登录 */
export const login=(params:any)=>{
    return action.postJsonData(Interface.login,params);
};
