import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header> 
            <div className="wrapper">
                <nav className="nav__links">
                    <ul>
                        <li> <Link to="/react-ecomm/"> Home </Link> </li>
                        <li> <Link to="/react-ecomm/discover"> Discover </Link> </li>
                    </ul>
                </nav>
                <div className="app__name">
                    React <span className="ecomm"> Ecomm </span>
                </div>
                
                <aside className="account__cta">
                    <Link to="/"> <button className="login__cta"> Login </button> </Link>
                    <Link to="/"> <button className="signup__cta"> Sign up </button> </Link>
                </aside>
            </div>
        </header>
    )
}
export default Header;