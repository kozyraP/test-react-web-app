import { Link, link } from 'react-router-dom';
import NavBar from './NavBar';

const NotFoundPage = () => {
    return (
        <>
            <NavBar />
            <h1>404 - Not Found</h1>
            <Link to="/">Go Home</Link>
        </>
    );
}
export default NotFoundPage;