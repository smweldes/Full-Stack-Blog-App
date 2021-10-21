import './main.css'

function Header() {
    return (
        <div className="h">
            <div className="h-title">
                <span className="h-title-sm">React and Node</span>
                <span className="h-title-lg">BLOG</span>
            </div>
            <img className="h-image"
                 src="https://mymodernmet.com/wp/wp-content/uploads/2021/04/Nature-Sounds-For-Well-Being-03.jpg"
                 alt=""
            ></img>
        </div>
    )
}

export default Header
