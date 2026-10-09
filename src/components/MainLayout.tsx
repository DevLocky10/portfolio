import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function mainLayout() {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}