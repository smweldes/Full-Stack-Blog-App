import './main.css'
import Sidebar from './Sidebar'

function Setting() {
    return (
        <div className="setting">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form className="settingForm">
                    <label>Profile Picture</label>
                    <div className="settingPP">
                       <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG84bDpZ-8_WEfnCx6DqtpzTQ7wLVr2Me9yQ&usqp=CAU"
                        alt=""
                       />
                       <label htmlFor="fileInput">
                       <i className="settingPPIcon fas fa-user-circle"></i>
                       </label>
                       <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Safak"/>
                    <label>Email</label>
                    <input type="text" placeholder="Safak@gmail.com"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingSubmit">Update</button>

                </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Setting
