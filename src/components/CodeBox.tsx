import type { ReactNode } from "react";

interface CodeBoxProps {
    children: ReactNode,
    className?: string,
    title?: string
}

export function CodeBox({children, className= "", title= "Code"}: CodeBoxProps) {

    return (
        <article className={`${className} text-neutral bg-gray-950 rounded-xl border border-neutral-50 w-full max-w-4xl`}>
            <header className="flex justify-between px-4 py-2 border-b border-neutral-50">
                <div>{title}</div>
                <div className="flex gap-2 items-center">
                    <span className="inline-block h-4 aspect-square rounded-full border border-neutral-50 bg-red-600"></span>
                    <span className="inline-block h-4 aspect-square rounded-full border border-neutral-50 bg-yellow-600"></span>
                    <span className="inline-block h-4 aspect-square rounded-full border border-neutral-50 bg-green-600"></span>
                </div>
            </header>
            <main className="px-4 py-2">
                {children}
            </main>
        </article>
    );
}