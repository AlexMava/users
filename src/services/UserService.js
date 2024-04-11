class UserService {
    _apiBace = 'https://jsonplaceholder.typicode.com/';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllUsers = async () => {
        const res = await this.getResource(`${this._apiBace}/users`);
        return res;
    }
    getUserById = async (userId) => {
        const res = await this.getResource(`${this._apiBace}/users/${userId}`);
        return res;
    }

    getAllPostsByUser = async (userId) => {
        const res = await this.getResource(`${this._apiBace}/users/${userId}/posts`);
        return res;
    }

    getAllAlbumsByUser = async (userId) => {
        const res = await this.getResource(`${this._apiBace}/users/${userId}/albums`);
        // console.log(res);
        return res;
    }
}

export default UserService;