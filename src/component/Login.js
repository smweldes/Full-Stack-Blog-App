import './main.css'

function Login() {
    return (
        <div className="login">
            
            <div className="login-container">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
             <labe>Email</labe>
             <input type="text" placeholder="Enter your email..."/>
             <labe>Password</labe>
             <input type="text" placeholder="Enter your password..."/>
             <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">Register</button>
            </div>
        </div>
    )
}

export default Login
