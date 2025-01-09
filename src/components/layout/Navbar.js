import {Link} from 'react-router-dom'
import Logo from "../../assets/logo.png"
import styles from "./Navbar.module.css"

function Home(){
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}>
                <img src={Logo} alt='Get a pet' />
                <h2>Get a Pet</h2>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
    )

}
export default Home