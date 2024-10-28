import { NavLink } from "./NavLink";

export function NavLinks({ classes = [] }: { classes?: string[] }) {
    return (
        <>
            <NavLink classes={classes} link="/">
                Home
            </NavLink>
            <NavLink classes={classes} link="/services" />
            <NavLink classes={classes} link="/contact" />
        </>
    );
}
