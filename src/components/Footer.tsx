import { Link } from "react-router-dom";

export function Footer({ className } : {className: string}) {

    return (
        <footer className={`${className} flex justify-center`}>
            <p className="text-center">DevLocky10 | <Link to={"mailto:devlocky@gmail.com"}>DevLocky10@gmail.com</Link></p>
        </footer>
    )
}