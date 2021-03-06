import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header> 
            <nav className="nav__links">
                <ul>
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to="/discover"> Discover </Link> </li>
                </ul>
            </nav>
            <div className="app__name">
                React <span className="ecomm"> Ecomm </span>
            </div>
            
            <aside className="account__cta">
                <Link to="/"> <button className="login__cta"> Login </button> </Link>
                <Link to="/"> <button className="signup__cta"> Sign up </button> </Link>
            </aside>

        </header>
    )
}
export default Header;