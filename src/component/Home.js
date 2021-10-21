import Header from './Header';
import './main.css';
import Posts from './Posts';
import Sidebar from './Sidebar';


function Home() {
    return (
        <div className="h">
            <Header/>
            <div className="home">
            <Posts />
            <Sidebar />
            </div>
                        
        </div>
    )
}

export default Home
