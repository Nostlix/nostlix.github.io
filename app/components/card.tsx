import Image from "next/image"
import React from "react";

interface CardParams {
    title: string;
    description: string;
    img: string;
    imgAlt: string;
    imgWidth: number;
    imgHeight: number;
}

export default function Card({
    title,
    description,
    img,
    imgAlt,
    imgWidth,
    imgHeight
}: CardParams)
{
    return (
        <div>
            <div>
                <Image
                    src={img}
                    alt={imgAlt}
                    width={imgWidth}
                    height={imgHeight}
                />
                <h4>{title}</h4>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    )
}
