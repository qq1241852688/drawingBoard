import { Link, useNavigate } from "react-router-dom"
import LoginForm from "./LoginForm";
import './login.scss'

function Login() {
    let navigate = useNavigate();
    let userRemember: any;
    const initlocalStorage = () => {
        userRemember = window.localStorage.getItem("user");
        if (userRemember) {
            userRemember = JSON.parse(userRemember);
        }
    }
    initlocalStorage();
    const toPageEdit = (user: object): void => {
        navigate('/pageEdit', {
            replace: false,
            state: {
                user: user,
            }
        })
    }
    const loginHandler = (v: object) => {
        if (v.remember) {
            //存入localStorage
            window.localStorage.setItem("user", JSON.stringify({ username: v.username, password: v.password }));
        } else {
            //删除localStorage
            window.localStorage.removeItem("user");
        }
        toPageEdit(v);
    }


    return (<div className="login">
        <h1>Login</h1>
        <LoginForm loginHandler={(loginHandler)} userRemember={userRemember}></LoginForm>
    </div>)
}
export default Login