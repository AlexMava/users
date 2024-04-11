import './shareWidget.scss';
import iconFacebook from './iconFacebook.svg';
import iconLinkedin from './iconLinkedin.svg';

import { Link } from 'react-router-dom';

const ShareWidget = () => {
    const thePermalink = window.location.href;
    return (
        <div className="share-widget">
            <div className='mb-3'>
                <p>Share it</p>
            </div>
            <div className='mb-3'>
                <Link to={`https://www.facebook.com/sharer/sharer.php?&u=${thePermalink}`} className='social-links'>
                    <img src={iconFacebook} className='icon-socials'/>
                </Link>
            </div>

            <div className=''>
                <Link to={`https://www.linkedin.com/cws/share?url=${thePermalink}`} className='social-links'>
                    <img src={iconLinkedin} className='icon-socials'/>
                </Link>
            </div>
        </div>
    )
}

export default ShareWidget;