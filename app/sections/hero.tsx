import Image from "next/image";
import Button from "../components/button";
import Social from "../components/social";
import "../css/hero.css";

export default function Hero()
{
    return (
        <header className="hero">
            <div className="h-100 flex flex-row hero-cols">
                <div className="flex flex-col justify-center">
                    <div className="py-10">
                        <h1 className="title">Valentin DUNON</h1>
                        <h2 className="subtitle">Epitech Student</h2>
                    </div>
                    <h3>
                        A future expert involved inside new technologies industry.
                    </h3>
                </div>
                <div>
                    <div className="absolute -ml-45 w-160 h-100">
                        <Image
                            className=""
                            src="/image_hero.png"
                            alt="A man sitting near a desk"
                            width={935}
                            height={853}
                            sizes="(max-width: 768px) 40vw, 33vw"
                            priority
                        />
                    </div>
                </div>
            </div>
            <div className="flex gap-5">
                <Button variant="primary">Discover Me</Button>
                <Button variant="tertiary">Upload CV</Button>
            </div>
            <div className="flex gap-5">
                <Social>Github</Social>
                <Social>Github</Social>
                <Social>Github</Social>
            </div>
        </header>
    )
}