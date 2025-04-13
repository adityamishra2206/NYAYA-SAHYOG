
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Menu, X, Sun, Moon , Scale } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Fundamental Rights", path: "/fundamental-rights" },
    { label: "Legal Aid", path: "/legal-aid" },
    { label: "RTI", path: "/rti" },
    { label: "Court System", path: "/courts" },
    { label: "Lawyer", path: "/lawyers" },
    { label: "Women & Child Rights", path: "/women-child-rights" },
    { label: "Cyber Law", path: "/cyber-law" },
    { label: "Resources", path: "/resources" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-background'
        }`}
      >
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 font-bold text-white rounded-full bg-gradient-to-br from-nyaya-orange to-nyaya-green"><Scale/></div>
              <span className="text-lg font-bold md:text-xl">NYAYA SAHYOG</span>
            </Link>

            
            <nav className="items-center hidden gap-6 md:flex">
              {navItems.slice(0, 6).map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">More</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {navItems.slice(6).map((item) => (
                    <DropdownMenuItem key={item.path} onClick={() => navigate(item.path)}>
                      {item.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
              
              <Button variant="outline" size="sm" className="hidden md:flex" onClick={() => navigate('/login')}>
                Sign In
              </Button>
              
              <Button 
                className="hidden md:flex" 
                size="sm"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </Button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t md:hidden bg-background">
            <nav className="container px-4 py-4 mx-auto">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path}
                      className="block py-2 text-sm font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2 border-t">
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1" 
                      onClick={() => { navigate('/login'); setIsMenuOpen(false); }}
                    >
                      Sign In
                    </Button>
                    <Button 
                      className="flex-1" 
                      onClick={() => { navigate('/signup'); setIsMenuOpen(false); }}
                    >
                      Sign Up
                    </Button>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="mt-12 border-t bg-background">
        <div className="container px-4 py-8 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-bold">Nyaya Sahyog</h3>
              <p className="text-sm text-muted-foreground">
                Empowering citizens with knowledge of their legal rights and access to justice.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path}
                      className="transition-colors text-muted-foreground hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="transition-colors text-muted-foreground hover:text-foreground">
                    Legal Documents
                  </a>
                </li>
                <li >
                  <a href="#" className="transition-colors text-muted-foreground hover:text-foreground">
                    Find a Lawyer
                  </a>
                </li>
                <li>
                  <Link to='/Lawyer' className="transition-colors text-muted-foreground hover:text-foreground">
                        Hire a Lawyer
                  </Link>

                </li>
                <li>
                  <a href="#" className="transition-colors text-muted-foreground hover:text-foreground">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Contact</h3>
              <p className="text-sm text-muted-foreground">
                Email: info@nyayasahyog.org<br />
                Phone: +91 XXXXX XXXXX<br />
                Address: New Delhi, India
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-6 mt-8 text-sm text-center border-t text-muted-foreground">
            <p>© {new Date().getFullYear()} Nyaya Sahyog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;