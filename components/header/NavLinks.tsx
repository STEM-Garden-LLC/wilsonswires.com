import NavLink from "./NavLink";

export default function NavLinks({
    classes = [],
    onClick,
}: {
    classes?: string[];
    onClick?: () => void;
}) {
    return (
        <>
            <NavLink classes={classes} onClick={onClick} link="/">
                Home
            </NavLink>
            <NavLink classes={classes} onClick={onClick} link="/services" />
            <NavLink classes={classes} onClick={onClick} link="/contact" />
        </>
    );
}
