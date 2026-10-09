import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export function Header({ className }: {className: string}) {

    <header className={`${className} flex justify-between items-center`}>
        <div className="flex items-center gap-1.5">
            <img className="h-12 aspect-square rounded-full" src="./../assets/imgs/logo.png" alt="DevLocky10 Logo" />
            <h1 className="text-base font-bold italic">DevLocky10</h1>
        </div>
        <nav className="flex items-center gap-y-4">
            <NavLink to={"/"} >Profile</NavLink>
            <NavLink to={"/projects"} >Projets</NavLink>
            <NavLink to={"/labs"} >Labs</NavLink>
            <NavLink to={"/blog"} >Blog</NavLink>
        </nav>
    </header>
}