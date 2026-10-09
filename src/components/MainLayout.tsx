import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function MainLayout() {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}