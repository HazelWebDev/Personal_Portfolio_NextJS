import Link from "next/link"

const NavLink = ({ href, title }) => {
    return(
        <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-dark font-semibold sm:text-xl md:p-0 hover:text-primary border-b border-primary">
            {title}
        </Link>
    )
}

export default NavLink;