import { Link } from "react-router-dom";

const AppFooter = () => {
    return (
        <footer className="App-footer text-start">
            <div className='container'>
                <div className='row'>
                <Link to='/' className="">Home</Link>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter;