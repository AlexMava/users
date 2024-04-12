import {Link} from 'react-router-dom';
import Helmet from 'react-helmet';

const Page404 = () => {
    return (
        <>
            <Helmet>
                <title>404 Page </title>
                <meta name="description" content="No info" />
            </Helmet>

            <div>
                <h1 style={{'textAlign': 'center', 'marginBottom' : '10px'}}>Page doesn't exist</h1>
                <Link to='/' style={{'display': 'block', 'textAlign': 'center', 'fontSize' : '24px'}}> Back to the Homepage</Link>
            </div>
        </>
    );
}

export default Page404;