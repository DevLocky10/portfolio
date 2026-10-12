import { Link } from "react-router-dom";
import { CodeBox } from "../../../components";
import Logo from "./../../../assets/imgs/logo.png"

export function HomePage() {

    return (
        <>
            <section className="flex gap-2 justify-center">
                <CodeBox className="flex flex-col" title="Profile">
                    <p>
                        Je suis développeur d’applications, animé par une curiosité qui me pousse à comprendre comment les systèmes fonctionnent, 
                        du code jusqu’aux mécanismes qui se cachent derrière.

                        J’aime explorer, expérimenter et comprendre le *pourquoi* avant de chercher le *comment*. 
                        Du développement logiciel à l’architecture des systèmes, 
                        je cherche à construire des bases solides pour concevoir des applications fiables, bien structurées et évolutives.

                        Mon parcours est avant tout une démarche d’apprentissage continu, 
                        guidée par une envie constante d’aller plus loin que ce que je connais déjà.
                    </p>
                    <div className="w-full flex gap-2 mt-4">
                        <Link className=" flex items-center justify-center bg-secondary-150 hover:bg-secondary h-12 py-2 px-4 text-gray-950 text-center w-full rounded-lg" to={"/"}>
                            <button className="cursor-pointer">Télécharger le CV</button>
                        </Link>
                        <Link className=" flex items-center justify-center bg-primary-150 hover:bg-primary h-12 py-2 px-4 text-gray-950 text-center w-full rounded-lg" to={"/projects"}>
                            <button className="cursor-pointer">Voir les projets</button>
                        </Link>
                    </div>
                </CodeBox>
                <img className="h-full aspect-square rounded-full border-neutral-50" src={Logo} alt="DevLocky Logo" />
            </section>
        </>
    )
}