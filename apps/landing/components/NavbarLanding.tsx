import { Button } from "./ui/button";
import { GoDownload } from "react-icons/go";

const NavbarLanding = () => {
  const navItems = [
    {
      name: "About App",
      link: "/about-app#",
    },
    {
      name: "Support",
      link: "/support#",
    },
    {
      name: "Tutorial",
      link: "/tutorial#",
    },
    {
      name: "Reviews",
      link: "/reviews#",
    },
  ];
  return (
    <nav className="flex mt-8 justify-between items-center backdrop-blur-lg p-4 bg-white/10 rounded-full">
      <img src="landing/landing-logo.webp" alt="logo" className="h-8" />
      <ul className="flex gap-8">
        {navItems.map((item, index) => (
          <li key={`navitem-${index}`}>
            <Button
              variant={"outline"}
              className="rounded-full px-6 border-white/5"
            >
              {item.name}
            </Button>
          </li>
        ))}
      </ul>
      <Button className="rounded-full">
        Download <GoDownload className="ml-2.5 size-4" />
      </Button>
    </nav>
  );
};

export default NavbarLanding;
