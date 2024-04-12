
const UsersList = ({data, onSort}) => {
    if (data.length === 0) {
        return <h5 className="text-center mt-5">No users at the time</h5>
    }

    const onValueChange = (e) => {
        onSort(e.target.value);
    }

    const elements = data.map(item => {
        const {id, name, username} = item;
        return (
            <li key={id} className='card flex-row mb-4 shadow-lg'>
                <div className='card-body'>
                    <h5 className="card-title">{name}</h5>
                    <p className='card-text'>
                        {username}
                    </p>
                    <a href={`/user/${id}?tabs_key=posts`} className="btn btn-primary mx-2">Posts</a>
                    <a href={`/user/${id}?tabs_key=albums`} className="btn btn-secondary mx-2">Albums</a>
                </div>
            </li>
        )
    });

    return (
        <div>
            <p className="text-end">
                <select onChange={(e) =>onValueChange(e)}>
                    <option value="default" selected>By default</option>
                    <option value="asc">By username</option>
                    <option value="desc">Desc, by username</option>
                </select>
            </p>

            <ul className='ps-0'>
                {elements}
            </ul> 
        </div>
    )
}

export default UsersList;