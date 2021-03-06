import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer> 
            <div className="wrapper">
                <div className="f__item">
                    <div className="title">
                        ABOUT
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

                <div className="f__item">
                    <div className="title">
                        CATEGORIES
                    </div>
                    <ul>
                        <li> <Link to="/"> Shoes </Link> </li>
                        <li> <Link to="/"> Accessories </Link> </li>
                    </ul>
                </div>

                <div className="f__item">
                    <div className="title">
                        QUICK LINKS
                    </div>
                    <ul>
                        <li> <Link to="/"> Home </Link> </li>
                        <li> <Link to="/"> Discover </Link> </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;