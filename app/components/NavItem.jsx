import Link from "next/link";

const NavItem = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 sm:text-[1.15rem] text-[#c5c5c5] font-code rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavItem;
