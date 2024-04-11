import {useState, useEffect} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import {Tabs} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';

import UserService from '../../services/UserService';

const SingleUserPage = () => {
    const {id} = useParams();

    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get("tabs_key");

    const [user, setUser] = useState([]);
    const [posts, setPosts] = useState([]);
    const [albums, setAlbums] = useState([]);

    const userService = new UserService();

    useEffect(() => {
        userService.getUserById(id)
            .then(onUserLoaded);

        userService.getAllPostsByUser(id)
            .then(onPostsLoaded);

        userService.getAllAlbumsByUser(id)
            .then(onAlbumsLoaded);

        // eslint-disable-next-line
    }, []);

    const onUserLoaded = (user) => {
        setUser(user);
    }

    const onPostsLoaded = (posts) => {
        setPosts(posts);
    }

    const onAlbumsLoaded = (albums) => {
        setAlbums(albums);
    }
    // console.log(user);
    const {name, phone, email} = user;

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

    return (
        <>
            <div>
                <h1>{name}</h1>
                <p>{phone}</p>
                <p>{email}</p>
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

        </>
    )
}

export default SingleUserPage;