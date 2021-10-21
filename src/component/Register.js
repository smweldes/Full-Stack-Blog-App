import './main.css'

function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
             <labe>Username</labe>
             <input type="text" placeholder="Enter your username..."/>
             <labe>Email</labe>
             <input type="text" placeholder="Enter your email..."/>
             <labe>Password</labe>
             <input type="text" placeholder="Enter your password..."/>
             <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">Login</button>
        </div>
    )
}

export default Register
