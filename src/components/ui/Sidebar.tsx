
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./button";
import Icon from "./icon";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  href: string;
  icon: string;
};

const navItems: NavItem[] = [
  { title: "Главная", href: "/", icon: "Home" },
  { title: "Мой профиль", href: "/profile", icon: "User" },
  { title: "Мониторинг", href: "/monitoring", icon: "BarChart" },
  { title: "Управление", href: "/devices", icon: "Settings" },
  { title: "Отчеты", href: "/reports", icon: "FileText" },
  { title: "Настройки", href: "/settings", icon: "Sliders" },
];

export function Sidebar() {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="bg-white text-[#388E3C]"
        >
          <Icon name={isMobileOpen ? "X" : "Menu"} size={24} />
        </Button>
      </div>

      {/* Sidebar */}
      <div 
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out md:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 flex items-center border-b border-[#F0F4F8]">
          <Icon name="Leaf" size={24} className="text-[#388E3C] mr-2" />
          <h1 className="text-lg font-bold text-[#212121]">Эко Офис</h1>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === item.href
                  ? "bg-[#4CAF50] text-white"
                  : "text-[#757575] hover:bg-[#F0F4F8] hover:text-[#212121]"
              )}
            >
              <Icon name={item.icon} size={18} className="mr-2" />
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-[#F0F4F8]">
          <Link to="/logout">
            <Button 
              variant="ghost" 
              className="w-full flex items-center justify-start text-[#757575] hover:text-[#F44336]"
            >
              <Icon name="LogOut" size={18} className="mr-2" />
              Выход
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
