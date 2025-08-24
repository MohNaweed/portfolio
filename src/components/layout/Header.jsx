
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/resumeData';
import { cn } from '@/lib/utils';

const Header = ({ navItems, activeSection, theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLink = ({ href, children, isActive }) => (
    <a
      href={href}
      onClick={() => setMobileMenuOpen(false)}
      className={cn(
        "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300",
        isActive
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b print-hidden">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          {personalInfo.shortName}
        </a>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavLink key={item.id} href={`#${item.id}`} isActive={activeSection === item.id}>
              {item.title}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t"
          >
            <nav className="flex flex-col items-center space-y-2 p-4">
              {navItems.map((item) => (
                <NavLink key={item.id} href={`#${item.id}`} isActive={activeSection === item.id}>
                  {item.title}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
