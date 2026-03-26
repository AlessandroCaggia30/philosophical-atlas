'use client';

import './globals.css';
import { useState, useEffect, createContext, useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ThemeContextType {
  dark: boolean;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({ dark: false, toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

const NAV_ITEMS = [
  { href: '/', label: 'Home', icon: '◎' },
  { href: '/network', label: 'Network', icon: '◉' },
  { href: '/timeline', label: 'Timeline', icon: '━' },
  { href: '/map', label: 'Map', icon: '◈' },
  { href: '/search', label: 'Search', icon: '⌕' },
  { href: '/agents', label: 'Agents', icon: '⚙' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem('pa-theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDark(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('pa-theme', dark ? 'dark' : 'light');
  }, [dark]);

  const toggle = () => setDark(d => !d);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Philosophical Atlas</title>
        <meta name="description" content="An interactive, scholarly map of the full global history of philosophy" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      </head>
      <body>
        <ThemeContext.Provider value={{ dark, toggle }}>
          <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar */}
            <nav
              style={{
                width: sidebarOpen ? 220 : 56,
                minHeight: '100vh',
                background: 'var(--color-bg-secondary)',
                borderRight: '1px solid var(--color-border)',
                transition: 'width 0.3s',
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                zIndex: 40,
                overflow: 'hidden',
              }}
            >
              {/* Logo */}
              <div style={{
                padding: sidebarOpen ? '20px 16px' : '20px 12px',
                borderBottom: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                cursor: 'pointer',
              }}
              onClick={() => setSidebarOpen(s => !s)}
              >
                <span style={{ fontSize: 24, color: 'var(--color-gold)' }}>◎</span>
                {sidebarOpen && (
                  <div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 700, lineHeight: 1.2 }}>
                      Philosophical
                    </div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 700, lineHeight: 1.2, color: 'var(--color-gold)' }}>
                      Atlas
                    </div>
                  </div>
                )}
              </div>

              {/* Nav items */}
              <div style={{ flex: 1, padding: '12px 8px' }}>
                {NAV_ITEMS.map(item => {
                  const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: sidebarOpen ? '10px 12px' : '10px 14px',
                        borderRadius: 6,
                        textDecoration: 'none',
                        color: active ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                        background: active ? 'var(--color-bg-tertiary)' : 'transparent',
                        fontSize: 14,
                        fontWeight: active ? 600 : 400,
                        marginBottom: 4,
                        transition: 'all 0.2s',
                      }}
                    >
                      <span style={{ fontSize: 16, width: 20, textAlign: 'center' }}>{item.icon}</span>
                      {sidebarOpen && <span>{item.label}</span>}
                    </Link>
                  );
                })}
              </div>

              {/* Theme toggle */}
              <div style={{ padding: '12px 8px', borderTop: '1px solid var(--color-border)' }}>
                <button
                  onClick={toggle}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: sidebarOpen ? '10px 12px' : '10px 14px',
                    borderRadius: 6,
                    border: 'none',
                    background: 'transparent',
                    color: 'var(--color-text-secondary)',
                    cursor: 'pointer',
                    fontSize: 14,
                    width: '100%',
                  }}
                >
                  <span style={{ fontSize: 16, width: 20, textAlign: 'center' }}>{dark ? '☀' : '☾'}</span>
                  {sidebarOpen && <span>{dark ? 'Light mode' : 'Dark mode'}</span>}
                </button>
              </div>
            </nav>

            {/* Main content */}
            <main style={{
              flex: 1,
              marginLeft: sidebarOpen ? 220 : 56,
              transition: 'margin-left 0.3s',
              minHeight: '100vh',
            }}>
              {children}
            </main>
          </div>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
