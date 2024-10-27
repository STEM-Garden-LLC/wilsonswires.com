"use client";

import Link from "next/link";
import { UrlObject } from "url";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import styles from "@/components/header/NavLink.module.css";

type NavLinkHref<Route> =
    | UrlObject
    | __next_route_internal_types__.RouteImpl<Route>;
export function NavLink<Route>({
    link,
    children,
}: {
    link: NavLinkHref<Route>;
    children?: React.ReactNode;
}) {
    // This needs to be a client component to use the usePathname hook
    const pathname = usePathname();

    function getFallback(link: NavLinkHref<Route>): string {
        if (typeof link === "string") {
            return link.slice(1);
        }

        if (link.href) {
            return link.href.slice(1);
        }

        throw new Error("No Path Name Detected");
    }
    return (
        <li>
            <Link
                className={cn(
                    "capitalize",
                    "text-2xl",
                    "relative",
                    "w-fit",
                    styles.hoverUnderline
                )}
                prefetch
                href={link}
                data-active={link === pathname}
            >
                {children ?? getFallback(link)}
            </Link>
        </li>
    );
}
