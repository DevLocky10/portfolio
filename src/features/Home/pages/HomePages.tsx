import { CodeBox } from "../../../components";
import Logo from "./../../../assets/imgs/logo.png"

export function HomePage() {

    return (
        <>
            <section className="flex gap-2 justify-center">
                <CodeBox title="Profile">
                    Je suis développeur en formation, spécialisé dans le développement d’applications, avec un intérêt particulier pour la conception de logiciels, l’architecture des systèmes et les technologies web.

                    J’aime comprendre comment les choses fonctionnent, aller au-delà de la simple utilisation des outils et transformer des idées en solutions concrètes. Du développement d’interfaces à la conception de la logique métier, j’accorde une importance particulière à la qualité du code, à la structure des projets et à la recherche de solutions efficaces.

                    Au fil de mon apprentissage, je développe mes compétences en JavaScript, TypeScript, React, PHP et SQL, tout en explorant les concepts qui permettent de concevoir des applications fiables, maintenables et évolutives.

                    Pour moi, programmer ne consiste pas simplement à écrire du code, mais à analyser un problème, comprendre ses enjeux et concevoir une solution adaptée.

                    Mon objectif est de devenir un ingénieur logiciel capable de concevoir et de développer des systèmes complets, de relever des défis techniques et de donner vie à des projets qui ont une réelle utilité.

                    Chaque projet est une occasion d'apprendre, d'expérimenter et de repousser mes limites.
                </CodeBox>
                <img className="rounded-full border-neutral-50" src={Logo} alt="DevLocky Logo" />
            </section>
        </>
    )
}