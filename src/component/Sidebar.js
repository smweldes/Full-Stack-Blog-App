import './main.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
            <div className="sidebarItem">
                 <span className="sidebarTitle">ABOUT ME</span>
                 <img 
                    className="sidebarImage"
                    src="https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg"
                    alt=""
               />
               <p>
               The phenomena of the physical world collectively, including plants, animals, the landscape, and 
               other features and products of the earth, as opposed to humans or human creations.
                "the breathtaking beauty of nature".
               </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATAGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle"></span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter"></i>
                <i className="sidebarIcon fab fa-pinterest-p"></i>
                <i className="sidebarIcon fab fa-instagram"></i>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Sidebar
