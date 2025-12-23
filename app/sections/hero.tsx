import Image from "next/image";
import Button from "../components/button";
import Social from "../components/social";
import "../css/hero.css";

export default function Hero()
{
    return (
        <header className="hero">
            <div className="h-1/1 flex flex-row hero-cols">
                <div className="flex flex-col justify-center">
                    <div className="">
                        <h1 className="title">Valentin DUNON</h1>
                        <h2 className="subtitle">Epitech Student</h2>
                    </div>
                    <h3 className="py-10">
                        A future expert involved inside new technologies industry.
                    </h3>
                    <div className="flex gap-5 py-4">
                        <Button variant="primary">Discover Me</Button>
                        <Button variant="tertiary">Upload CV</Button>
                    </div>
                    <div className="flex gap-5">
                        <Social>Github</Social>
                        <Social>Github</Social>
                        <Social>Github</Social>
                    </div>
                </div>
                <div className="flex content-center">
                    <Image
                        className="-ml-5 max-h-6/10 self-center"
                        src="/image_hero.png"
                        alt="A man sitting near a desk"
                        width={935}
                        height={853}
                        sizes="100%"
                        priority
                    />
                </div>
            </div>
        </header>
    )
}