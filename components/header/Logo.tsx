import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link aria-label="Home" href="/">
            <Image
                src="/logo/logo_medium_transparent_bg.png"
                alt="Logo"
                width={200}
                height={200}
            />
        </Link>
    );
}
