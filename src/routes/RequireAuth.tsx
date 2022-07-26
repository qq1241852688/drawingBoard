/**简单的路由拦截 */
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }:any) {
    const authed = localStorage.getItem('loginData')
    return authed  ? ( // 判断 localstorage 中登录状态是否为 true
        children
    ) : (
        <Navigate to="/login" replace /> // 跳转到登录
    );
}
