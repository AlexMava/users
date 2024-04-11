import { Link } from "react-router-dom";

const AppHeader = () => {
    return (
        <header className="App-header text-start">
            <div className='container'>
                <div className='row'>
                    <Link to="/" className="App-link">Home</Link>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;