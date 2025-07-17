import Link from "next/link";
import { Button } from "./ui/button";
import { GoDownload } from "react-icons/go";
import DownloadAppButton from "./DownloadAppButton";

const NavbarLanding = () => {
  const navItems = [
    {
      name: "About App",
      link: "/about",
    },
    {
      name: "Support",
      link: "https://support.applete.app",
    },
    {
      name: "Tutorial",
      link: "/tutorials",
    },
    {
      name: "Reviews",
      link: "/reviews",
    },
  ];
  return (
    <nav className="flex mt-8 justify-between items-center backdrop-blur-lg p-4 bg-white/10 rounded-full">
      <Link href={"/"}>
        <img src="landing/landing-logo.webp" alt="logo" className="h-8" />
      </Link>
      <ul className="flex gap-8">
        {navItems.map((item, index) => (
          <li key={`navitem-${index}`}>
            <Link href={item.link}>
              <Button
                variant={"outline"}
                className="rounded-full px-6 border-white/5"
                >
                {item.name}
              </Button>
              </Link>
          </li>
        ))}
      </ul>
      <DownloadAppButton>
        Download <GoDownload className="ml-2.5 size-4" />
      </DownloadAppButton>
    </nav>
  );
};

export default NavbarLanding;
