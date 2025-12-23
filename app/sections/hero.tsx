import Image from "next/image";

export default function Hero()
{
    return (
        <section>
            <div>
                <h1 className="title">Valentin DUNON</h1>
                <h2 className="subtitle">Epitech Student</h2>
                <h3>
                    A future expert involved inside new technologies industry.
                </h3>
            </div>
            <div>
                <Image
                    className=""
                    src="/image_hero.png"
                    alt="A man sitting near a desk"
                    width={935}
                    height={853}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                />
            </div>
        </section>
    )
}