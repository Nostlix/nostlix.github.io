import Image from "next/image";
import Button from "../components/button";
import SectionTitle from "../components/section_title";
import Social from "../components/social";

export default function Interested()
{
    return (
        <section className="pt-10">
            <SectionTitle title="Interested ?"/>
            <div className="grid grid-cols-2">
                <div className="flex flex-col justify-evenly gap-5 items-center">
                    <div className="w-max">
                        <SectionTitle title="Contact Me :" centered={false}/>
                        <div className="flex gap-5">
                            <Social social="Github" link="https://github.com/Nostlix/"/>
                            <Social social="LinkedIn" link="https://www.linkedin.com/in/valentin-dunon/"/>
                            <Social social="Email" link="mailto:vdunon91@gmail.com"/>
                        </div>
                    </div>
                    <div className="w-max">
                        <SectionTitle title="My Resume :" centered={false}/>
                        <div className="w-max">
                            <Button variant="secondary">Upload CV</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                    className="right-5 top-5"
                    src="/images/footer_image.svg"
                    alt="A man working"
                    width={759}
                    height={512}
                    />
                </div>
            </div>
        </section>
    )
}