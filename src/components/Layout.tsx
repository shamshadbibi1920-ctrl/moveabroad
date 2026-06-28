import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  Globe,
  Facebook,
  Mail,
  Moon,
  Sun,
} from "lucide-react";
import GlobalSearch from "./GlobalSearch";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        document.documentElement.classList.contains("dark") ||
        localStorage.getItem("theme") === "dark"
      );
    }
    return false;
  });

  const location = useLocation();

  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setNewsletterStatus("error");
      setNewsletterMessage("Please enter a valid email address");
      return;
    }
    setNewsletterStatus("success");
    setNewsletterMessage(
      "Thank you for subscribing! We'll send you the latest updates.",
    );
    setEmail("");

    // reset message after some time
    setTimeout(() => {
      setNewsletterStatus("idle");
      setNewsletterMessage("");
    }, 5000);
  };

  const toggleDarkMode = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    if (nextMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Study Abroad", href: "/study" },
    { name: "Work Abroad", href: "/work-abroad" },
    { name: "Migrate", href: "/migrate" },
    { name: "Healthcare", href: "/healthcare-abroad" },
    { name: "Scholarships", href: "/scholarships" },
    { name: "Guides", href: "/country-guides" },
    { name: "Compare", href: "/compare" },
    { name: "Blog", href: "/blog" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-blue-900 dark:selection:text-blue-100 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm sticky top-0 z-50 transition-all duration-300 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center py-2">
                <img
                  src="/full-logo-with-text.svg"
                  alt="MoveAbroad.pk"
                  className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
                    location.pathname === item.href ||
                    (item.href !== "/" &&
                      location.pathname.startsWith(item.href))
                      ? "text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400"
                      : "text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 border-b-2 border-transparent hover:border-blue-300 dark:hover:border-blue-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </nav>

            {/* Desktop Search */}
            <div className="hidden md:flex items-center">
              <GlobalSearch isMobile={false} />
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 dark:text-slate-300 hover:text-slate-500 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800`}
        >
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  location.pathname === item.href ||
                  (item.href !== "/" && location.pathname.startsWith(item.href))
                    ? "bg-blue-50 dark:bg-slate-800 border-blue-700 dark:border-blue-400 text-blue-700 dark:text-blue-400"
                    : "border-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-800 dark:hover:text-slate-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-4 border-t border-slate-200">
            <div className="flex items-center px-4">
              <GlobalSearch
                isMobile={true}
                onClose={() => setIsMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col flex-grow w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-12 pb-8 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <Globe className="h-6 w-6 text-blue-400" />
                <span className="font-bold text-xl text-white tracking-tight">
                  Move<span className="text-blue-400">Abroad</span>.pk
                </span>
              </Link>
              <p className="text-slate-400 text-sm mb-4">
                Your complete guide to moving abroad for Pakistani students and
                professionals
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61590813940028"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/923002134708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-green-500 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.488-1.761-1.663-2.06-.175-.298-.018-.46.13-.608.134-.134.298-.348.446-.521.151-.173.203-.298.303-.497.099-.199.05-.373-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-slate-300">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/disclaimer"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>

            {/* Top Destinations */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-slate-300">
                Top Destinations
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/study/germany"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Study in Germany
                  </Link>
                </li>
                <li>
                  <Link
                    to="/work/canada"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Work in Canada
                  </Link>
                </li>
                <li>
                  <Link
                    to="/healthcare/uk/doctor"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Healthcare in UK
                  </Link>
                </li>
                <li>
                  <Link
                    to="/study/australia/scholarships"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Scholarships in Australia
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-slate-300">
                Newsletter
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Get the latest scholarships and job updates straight to your
                inbox.
              </p>
              <form
                className="flex flex-col gap-2"
                onSubmit={handleNewsletterSubmit}
                noValidate
              >
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-slate-700 rounded-l-md bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-slate-900 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
                {newsletterStatus !== "idle" && (
                  <p
                    className={`text-xs mt-1 ${newsletterStatus === "success" ? "text-green-400" : "text-red-400"}`}
                  >
                    {newsletterMessage}
                  </p>
                )}
              </form>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} MoveAbroad.pk All rights
              reserved.
            </p>
            <p className="text-slate-500 text-xs">
              Made for Pakistani Students & Professionals
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
