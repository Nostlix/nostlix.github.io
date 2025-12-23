import { ReactNode } from "react";

interface CardsAreaParams {
    children: ReactNode;
    title: string;
    subtitle: string;
}

export default function CardsArea({
    children,
    title,
    subtitle
}: CardsAreaParams)
{
    return (
        <section>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            {children}
        </section>
    )
}