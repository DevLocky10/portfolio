import { Link } from "react-router-dom";
import { CodeBox } from "../../../components";
import Logo from "./../../../assets/imgs/logo.png"

export function HomePage() {

    return (
        <>
            <section className="flex gap-2 justify-center mb-8">
                <CodeBox className="flex flex-col" title="Profile">
                    <div className="flex flex-col gap-4">
                        <p>
                            Je suis développeur d’applications, animé par une curiosité qui me pousse à comprendre comment les systèmes fonctionnent, 
                            du code jusqu’aux mécanismes qui se cachent derrière.

                            J’aime explorer, expérimenter et comprendre le *pourquoi* avant de chercher le *comment*. 
                            Du développement logiciel à l’architecture des systèmes, 
                            je cherche à construire des bases solides pour concevoir des applications fiables, bien structurées et évolutives.

                            Mon parcours est avant tout une démarche d’apprentissage continu, 
                            guidée par une envie constante d’aller plus loin que ce que je connais déjà.
                        </p>
                        <div className="w-full flex gap-2">
                            <Link className=" flex items-center justify-center bg-secondary-150 hover:bg-secondary h-12 py-2 px-4 text-gray-950 text-center w-full rounded-lg" to={"/"}>
                                <button className="cursor-pointer">Télécharger le CV</button>
                            </Link>
                            <Link className=" flex items-center justify-center bg-primary-150 hover:bg-primary h-12 py-2 px-4 text-gray-950 text-center w-full rounded-lg" to={"/projects"}>
                                <button className="cursor-pointer">Voir les projets</button>
                            </Link>
                        </div>
                    </div>  
                </CodeBox>
                <img className="h-full aspect-square rounded-full border-neutral-50" src={Logo} alt="DevLocky Logo" />
            </section>
            <section className="flex gap-2 justify-center">
                <CodeBox className="" title="Compétences">
                    <div className="flex flex-col items-center gap-2">
                        <div className="grid grid-cols-2 w-full text-neutral gap-2">
                            <div className="flex items-center justify-center w-full border border-yellow-600 bg-yellow-600 opacity-80 hover:opacity-100 rounded-lg h-10 py-4 px-2">
                                HTML5
                            </div>
                            <div className="flex items-center justify-center w-full border border-blue-600 bg-blue-600 opacity-80 hover:opacity-100 rounded-lg h-10 py-4 px-2">
                                CSS3
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full border border-red-600 bg-red-600 opacity-80 hover:opacity-100 rounded-lg h-10 py-4 px-2">
                            PHP
                        </div>
                        <div className="grid grid-cols-2 w-full text-neutral gap-2">
                            <div className="flex items-center justify-center w-full border border-green-600 bg-green-600 opacity-80 hover:opacity-100 rounded-lg h-10 py-4 px-2">
                                JAVASCRIPT
                            </div>
                            <div className="flex items-center justify-center w-full border border-violet-600 bg-violet-600 opacity-80 hover:opacity-100 rounded-lg h-10 py-4 px-2">
                                NODEJS
                            </div>
                        </div>
                    </div>
                </CodeBox>
            </section>
        </>
    )
}