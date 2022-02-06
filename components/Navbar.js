import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className="sticky nav-header">
      <div>
        <Link href="https://www.territoryfoods.com/">
          <a>
            <Image
              src="/assets/images/territory-foods-logo.svg"
              alt="Territory Foods Menu Logo"
              width="112"
              height="29"
            />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
