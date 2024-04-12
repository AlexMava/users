import {useState, useEffect} from 'react';
import {Helmet} from "react-helmet";

import UserService from '../../services/UserService';
import UsersList from '../userList/UsersList';
import SearchForm from '../serchForm/SearchForm';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const MainPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const userService = new UserService();

    const searchUserByName = (string) => {
        if (!string) {
            return;
        } else {
            return(users.filter(item=> item.username === string));
        }
    }

    const sortUsersBy = (s) => {
        if (!s) {
            return;
        }
        else if (s === 'asc') {
            users.sort((a, b) => a.username.localeCompare(b.username));
        } else if (s === 'desc') {
            users.sort((a, b) => b.username.localeCompare(a.username));
        } else if (s === 'default') {
            users.sort((a, b) => a.id - b.id);
        }

        setUsers([...users]);
        return;
    }

    useEffect(() => {
        userService.getAllUsers()
            .then(onUsersLoaded)
            .catch(onError)

        // eslint-disable-next-line
    }, []);

    const onUsersLoaded = (newUsers) => {
        setUsers(users => [...users, ...newUsers]);
        setLoading(false);
    }

    const onError = () => {
        setError(true);
        setLoading(false);
        // console.log('error');   
    }

    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;

    return (
        <>
            <Helmet>
                <title>Users information - Homepage</title>
                <meta name="description" content="Users information detailed description"/>
            </Helmet>

            {spinner}
            {errorMessage}

            {!(loading || error) && users ?
                (<>
                    <div className='content'>
                        <UsersList data={users} onSort={sortUsersBy}/>
                    </div>
                    
                    <div className='content__interactive'>
                        <SearchForm onSearch={searchUserByName}/>
                    </div>
                </>) : null
            }       
        </>
    )
}

export default MainPage;