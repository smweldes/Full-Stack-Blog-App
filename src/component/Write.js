import './main.css'

function Write() {
    return (
        <div className="write">
            <img
               className="writeImg"
               src="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
               alt=""
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                         <i className="writeIcon fas fa-plus-square"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea
                      placeholder="Tell your story"
                      type="text"
                      className="writeInput writeText"               
                    ></textarea>

                <button className="writeSubmit">Publish</button>

                </div>
            </form>
            
        </div>
    )
}

export default Write
