import {useState, useEffect} from 'react';

import UserService from '../../services/UserService';

import UsersList from '../userList/UsersList';
import SearchForm from '../serchForm/SearchForm';

const MainPage = () => {
    const [users, setUsers] = useState([]);

    const userService = new UserService();

    const searchUserByName = (string) => {
        if (!string) {
            return;
        }
        else {
            return(users.filter(item=> item.name === string));
        }
    }

    // useEffect(() => {
    //     searchUserByName('Patricia Lebsack');
    //     // eslint-disable-next-line
    // }, [users]);

    useEffect(() => {
        userService.getAllUsers()
            .then(onUsersLoaded);

        // eslint-disable-next-line
    }, []);

    const onUsersLoaded = (newUsers) => {
        setUsers(users => [...users, ...newUsers]);
    }

    return (
        <>
            <div className='content'>
                <UsersList data={users}/>
            </div>

            <div className='content__interactive'>
                <SearchForm onSearch={searchUserByName}/>
            </div>
        
        </>
    )
}

export default MainPage;