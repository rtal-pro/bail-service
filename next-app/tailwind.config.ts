import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './layouts/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    extend: {
      colors: {
        /* Primary Colors */
        layer1: 'var(--layer-1)',
        layer2: 'var(--layer-2)',
        layer3: 'var(--layer-3)',

        /* Background Colors */
        bgPrimary: 'var(--bg-primary)',
        bgPrimaryLight: 'var(--bg-primary-light)',
        bgSecondary: 'var(--bg-secondary)',
        bgSecondaryLight: 'var(--bg-secondary-light)',

        /* Button Colors */
        btnPrimary: 'var(--btn-primary)',
        btnPrimaryHover: 'var(--btn-primary-hover)',
        btnSecondary: 'var(--btn-secondary)',
        btnSecondaryHover: 'var(--btn-secondary-hover)',

        /* Text Colors */
        textMain: 'var(--text-main)',
        textMainLight: 'var(--text-main-light)',
        textAccent: 'var(--text-accent)',
        textAccentLight: 'var(--text-accent-light)',

        /* Border Colors */
        borderPrimary: 'var(--border-primary)',
        borderSecondary: 'var(--border-secondary)',

        /* Sidebar Icon Colors */
        sidebarIcon1: 'var(--sidebar-icon-1)',
        sidebarIcon2: 'var(--sidebar-icon-2)',
        sidebarIcon3: 'var(--sidebar-icon-3)',
        sidebarIcon4: 'var(--sidebar-icon-4)',
        sidebarIcon5: 'var(--sidebar-icon-5)',
        sidebarIcon6: 'var(--sidebar-icon-6)',
        sidebarIcon7: 'var(--sidebar-icon-7)',
        sidebarIcon8: 'var(--sidebar-icon-8)',
        sidebarIcon9: 'var(--sidebar-icon-9)',
        sidebarIcon10: 'var(--sidebar-icon-10)',
        sidebarIcon11: 'var(--sidebar-icon-11)',
        sidebarIcon12: 'var(--sidebar-icon-12)',
        sidebarIcon13: 'var(--sidebar-icon-13)',
        sidebarIcon14: 'var(--sidebar-icon-14)',
        sidebarIcon15: 'var(--sidebar-icon-15)',
        sidebarIcon16: 'var(--sidebar-icon-16)',

        /* Sidebar Active and Hover */
        sidebarActive: 'var(--sidebar-active)',
        sidebarHover: 'var(--sidebar-hover)',

        /* Status Colors */
        statusSuccess: 'var(--status-success)',
        statusWarning: 'var(--status-warning)',
        statusError: 'var(--status-error)',
        statusInfo: 'var(--status-info)',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config