import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <div className={cn("flex", "gap-8", "items-center", "text-3xl")}>
            <a
                className={cn(
                    "hidden",
                    "invisible",
                    "lg:inline-block",
                    "lg:visible",
                    "text-logo-yellow-light",
                    "whitespace-nowrap"
                )}
                href="tel:111-111-1111"
            >
                (111)-111-1111
            </a>
            <Link aria-label="Home" href="/">
                <Image
                    src="/logo/logo_medium_transparent_bg.png"
                    alt="Logo"
                    width={300}
                    height={300}
                    className={cn("md:min-w-[200px]", "lg:min-w-[300px]")}
                />
            </Link>
        </div>
    );
}
