import { Link } from "react-router-dom";

export function Header() {

    <header>
        <div>
            <img src="./../assets/imgs/logo.png" alt="DevLocky10 Logo" />
            <h1>DevLocky10</h1>
        </div>
        <nav>
            <Link to={"/"} >Profile</Link>
            <Link to={"/projects"} >Projets</Link>
            <Link to={"/labs"} >Labs</Link>
            <Link to={"/blog"} >Blog</Link>
        </nav>
    </header>
}