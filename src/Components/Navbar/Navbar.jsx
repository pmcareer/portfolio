import {images, docs} from '../../constants';
import './Navbar.scss'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar w/ text</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create">Add</Link>
                    </li>
                </ul>
                <span className="navbar-text text-right">
                Wow wow wow
                </span>
            </div>
        </nav>
        
        // <nav className="navbar">
            
        //     <div className='text-center app__navbar-logo'>
        //         <img className='' src={images.logo} alt="" 
        //         // style={{width: "50px", marginRight:"10px"}}
        //         />
        //         <span className='bg-' style={{ fontSize: "35px" }}>Solution</span>
        //     </div>
        //     <div className="links">
        //         <Link to="/">Home</Link>
        //         <Link to="/create">Add</Link>
        //     </div>
        // </nav>
     );
}
 
export default Navbar;