import {useState, useEffect} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import {Helmet} from "react-helmet";
import {Tabs} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';

import UserService from '../../services/UserService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const SingleUserPage = () => {
    const {id} = useParams();

    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get("tabs_key");

    const [user, setUser] = useState([]);
    const [posts, setPosts] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const userService = new UserService();

    useEffect(() => {
        userService.getUserById(id)
            .then(onUserLoaded)
            .catch(onError)

        userService.getAllPostsByUser(id)
            .then(onPostsLoaded)
            .catch(() => {console.log('Error: No posts')})

        userService.getAllAlbumsByUser(id)
            .then(onAlbumsLoaded)
            .catch(() => {console.log('Error: No albums')})

        // eslint-disable-next-line
    }, []);

    const onUserLoaded = (user) => {
        setUser(user);
        setLoading(false);
    }

    const onPostsLoaded = (posts) => {
        setPosts(posts);
    }

    const onAlbumsLoaded = (albums) => {
        setAlbums(albums);
    }
   
    const onError = () => {
        setError(true);
        setLoading(false);
    }
    
    const {name, username} = user;

    const postsItems = posts.map(item => {
    const {id, title, body} = item;
        return (
            <li key={id} className='card flex-row mb-4 shadow-lg'>
                <div className='card-body'>
                    <h5 className="card-title">{title}</h5>
                    <p className='card-text'>
                        {body}
                    </p>
                </div>
            </li>
        )
    });

    const albumsItems = albums.map(item => {
        const {id, title} = item;
            return (
                <li key={id} className='card flex-row mb-4 shadow-lg'>
                    <div className='card-body'>
                        <h5 className="card-title">{title}</h5>
                    </div>
                </li>
            )
        });

    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;

    return (
        <>
            {spinner}
            {errorMessage}

            {!(loading || error) && user ?
                (<>
                    <Helmet>
                        <title>This is page of user {name} </title>
                        <meta name="description" content={`${name} user detailed info`} />
                    </Helmet>
                    
                    <div>
                        <h1>{name}</h1>
                        <p>{username}</p>
                    </div>
                    <div>
                        <Tabs defaultActiveKey={activeTab ? activeTab : 'posts'}> 
                            <Tab eventKey="posts" title="Posts"> 
                                <ul className='mt-4'>{postsItems}</ul>
                            </Tab> 
                            <Tab eventKey="albums" title="Albums"> 
                                <ul className='mt-4'>{albumsItems}</ul>
                            </Tab> 
                        </Tabs>
                    </div>
                </>) : null
            }
        </>
    )
}

export default SingleUserPage;