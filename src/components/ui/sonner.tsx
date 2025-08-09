import { Toaster as Sonner, type ToasterProps } from 'sonner';
import type { CSSProperties } from 'react';

const resolveTheme = (): ToasterProps['theme'] => {
  if (typeof window === 'undefined') return 'system';
  try {
    const isDark = document.documentElement.classList.contains('dark');
    return isDark ? 'dark' : 'light';
  } catch {
    return 'system';
  }
};

const Toaster = ({ ...props }: ToasterProps) => {
  const theme = resolveTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
