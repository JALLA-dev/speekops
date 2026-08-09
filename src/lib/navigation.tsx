'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type PageName = 'home' | 'dashboard' | 'releasedesk' | 'speakops';

interface NavigationContextType {
  currentPage: PageName;
  navigate: (page: PageName) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageName>('home');

  const navigate = (page: PageName) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', `#${page}`);
  };

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as PageName;
    if (hash && ['home', 'dashboard', 'releasedesk', 'speakops'].includes(hash)) {
      setCurrentPage(hash);
    }

    const handlePopState = () => {
      const h = (window.location.hash.replace('#', '') || 'home') as PageName;
      setCurrentPage(h);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(NavigationContext);
  if (!context) throw new Error('useRouter must be used within NavigationProvider');
  return { push: (path: string) => context.navigate(path.replace('#', '') as PageName) };
}

export function usePathname() {
  const context = useContext(NavigationContext);
  if (!context) throw new Error('usePathname must be used within NavigationProvider');
  return `/${context.currentPage === 'home' ? '' : context.currentPage}`;
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) throw new Error('useNavigation must be used within NavigationProvider');
  return context;
}

// Link component that mimics next/link
export function Link({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const { navigate } = useNavigation();
  const pageName = href.replace('#', '').replace('/', '') as PageName || 'home';

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.();
    navigate(pageName);
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
