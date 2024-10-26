import { cn } from "@/lib/utils";

import Link from "next/link";

export const NavLink: React.FC<{
    link: "/contact" | "/services" | "/";
    children?: React.ReactNode;
}> = ({ link, children }) => {
    return (
        <li>
            <Link
                className={cn("capitalize", "text-2xl", "hover:underline")}
                prefetch
                href={link}
            >
                {children ?? link.slice(1)}
            </Link>
        </li>
    );
};
