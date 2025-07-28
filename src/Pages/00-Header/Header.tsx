import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("");

  const menuItems = [
    { name: "Home", id: "/home#home" },
    { name: "About Us", id: "/home#about" },
    { name: "Contact Us", id: "/home#contact" },
  ];

  const scrollToSection = () => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  useEffect(() => {
    scrollToSection();
  }, [location.hash]);

  const handleNavigation = (path: string) => {
    const [route] = path.split("#");
    if (location.pathname !== route) {
      navigate(route);
    } else {
      navigate(path);
    }
    setActive(path);
  };

  return (
    <header className="bg-[#07332f] py-4 px-6 shadow-md fixed w-full z-50">
      <nav className="flex justify-center space-x-10 text-white">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            onClick={() => handleNavigation(item.id)}
            className={`hover:text-[#F7A582] ${
              active === item.id ? "text-[#F7A582]" : "text-white"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
