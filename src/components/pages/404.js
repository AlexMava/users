import {Link} from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <h1 style={{'textAlign': 'center', 'marginBottom' : '10px'}}>Page doesn't exist</h1>
            <Link to='/' style={{'display': 'block', 'textAlign': 'center', 'fontSize' : '24px'}}> Back to the Homepage</Link>
        </div>
    );
}

export default Page404;