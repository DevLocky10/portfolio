import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function MainLayout() {

    return (
        <>
            <Header className="sticky top-0 left-0 z-50 bg-neutral-150 py-4 px-2 border-b border-neutral-50"/>
            <Outlet />
            <Footer className= "bg-neutral-150 py-4 px-2 border-t border-neutral-50"/>
        </>
    )
}