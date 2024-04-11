
const UsersList = ({data}) => {
    const elements = data.map(item => {
        const {id, name, address} = item;
        return (
            <li key={id} className='card flex-row mb-4 shadow-lg'>
                <div className='card-body'>
                    <h5 className="card-title">{name}</h5>
                    <p className='card-text'>
                        {address.city}
                    </p>
                    <a href={`/user/${id}?tabs_key=posts`} className="btn btn-primary mx-2">Posts</a>
                    <a href={`/user/${id}?tabs_key=albums`} className="btn btn-secondary mx-2">Albums</a>
                </div>
            </li>
        )
    });

    return (
        <div>
            <ul className='ps-0'>
                {elements}
            </ul> 
        </div>

    )
}

export default UsersList;