import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import NavItem from './navigation/NavItem';
import Loading from './Loading';
import ToTopButton from './navigation/ToTop';
import useFetchStaticContent from '../utils/fetchStaticContent';

function Footer() {
    const logoQuery = useFetchStaticContent('logo', 'png');

    if (logoQuery.isLoading) {
        return <Loading />;
    }

    if (logoQuery.isError && logoQuery.error instanceof Error) {
        return <div>Error: {logoQuery.error.message}</div>;
    }

    const logo = logoQuery.data?.content;
    return (
        <footer>
            <div className="footer-navigation">
                <ul className="nav-list">
                    <NavItem to="/about">About</NavItem>
                    <NavItem to="/shop">Products</NavItem>
                    <NavItem to="/cart">Cart</NavItem>
                    <NavItem to="/login">Login</NavItem>
                </ul>
            </div>
            <div className="footer-information">
                <Link to="/">
                    <img src={logo} alt="Logo" id="logo" />
                </Link>
                <ul className="address-list">
                    <li className="address-item">Primal Formulas Ltd.</li>
                    <li className="address-item">Clonross, Drumree</li>
                    <li className="address-item">Co. Meath,</li>
                    <li className="address-item">A85 PK30</li>
                    <li className="address-item">Tel: 01 - 8259289</li>
                    <li className="address-item">
                        Email: info@primalformulas.ie
                    </li>
                </ul>
            </div>
            <div className="social-links">
                <Link to="#" target="_blank" className="facebook socials">
                    <FontAwesomeIcon icon={faFacebook} size="2xl" />
                </Link>
                <Link to="#" target="_blank" className="twitter socials">
                    <FontAwesomeIcon icon={faTwitter} size="2xl" />
                </Link>
                <Link to="#" target="_blank" className="instagram socials">
                    <FontAwesomeIcon icon={faInstagram} size="2xl" />
                </Link>
                <Link to="#" target="_blank" className="youtube socials">
                    <FontAwesomeIcon icon={faYoutube} size="2xl" />
                </Link>
            </div>
            <ToTopButton />
        </footer>
    );
}

export default Footer;
