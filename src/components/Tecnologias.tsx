import React from "react";
import { ReactIcon } from "../icons/ReactIcon";
import AngularIcon from "../icons/AngularIcon";
import AstroIcon from "../icons/AstroIcon";
import HtmlIcon from "../icons/HtmlIcon";
import TailwindIcon from "../icons/TailwindIcon";
import CssIcon from "../icons/CssIcon";
import DotNetIcon from "../icons/DotNetIcon";
import ExpressIcon from "../icons/ExpressIcon";
import JavascriptIcon from "../icons/JavascriptIcon";
import TypescriptIcon from "../icons/TypescriptIcon";

export default function Tecnologias() {
    const tecnologias = [
        { React: ReactIcon },
        { Angular: AngularIcon },
        { Astro: AstroIcon },
        { HTML: HtmlIcon },
        { CSS: CssIcon },
        { JavaScript: JavascriptIcon },
        { TypeScript: TypescriptIcon },
        { Tailwind: TailwindIcon },
        { Express: ExpressIcon },
        { DotnetIcon: DotNetIcon },
    ];

    // Duplicar los iconos para el efecto marquee infinito
    const allTechs = [...tecnologias, ...tecnologias, ...tecnologias];

    return (
        <>
            <div className="logos-titulo"><em>¡Utilizando las mejores tecnologías!</em></div>
            <div className="marquee">
                <div className="marquee-inner slow-marquee">
                    {allTechs.map((tech, index) => {
                        const IconComponent = Object.values(tech)[0];
                        return (
                            <div key={index}>
                                <IconComponent className="logo-cliente" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}