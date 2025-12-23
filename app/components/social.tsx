import { MouseEventHandler, ReactNode } from "react";
import Image from "next/image";

interface SocialType {
    primary: string;
    secondary: string;
    tertiary: string;
}

interface SocialParams {
    children: ReactNode;
    onClick?: MouseEventHandler;
}

export default function Social({
    children,
    onClick
}: Readonly<SocialParams>) {
  const styles = "block cursor-pointer border border-gray-600 p-1 rounded-md font-medium transition-all";

  return (
    <a
        onClick={onClick}
        className={`${styles}`}
        href="#"
    >
        <Image
            className=""
            src="/logo_github.png"
            alt="Github logo"
            width={40}
            height={40}>
        </Image>
    </a>
  );
}