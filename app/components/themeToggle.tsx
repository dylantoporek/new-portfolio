'use client'
import { useSyncExternalStore } from 'react'
import { motion } from 'framer-motion'

type Theme = 'dark' | 'light'

// The theme lives on <html data-theme> (set pre-paint by the init script in
// layout.tsx); this tiny store lets React subscribe to it without effects
let listeners: Array<() => void> = []

const subscribe = (listener: () => void) => {
    listeners.push(listener)
    return () => {
        listeners = listeners.filter((l) => l !== listener)
    }
}

const getTheme = (): Theme =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'

const setTheme = (theme: Theme) => {
    document.documentElement.dataset.theme = theme
    try {
        localStorage.setItem('theme', theme)
    } catch {
        // Persistence is best-effort; the in-page theme still applies
    }
    listeners.forEach((listener) => listener())
}

const SunIcon = () => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
    >
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
        <line x1="4.9" y1="4.9" x2="7" y2="7" />
        <line x1="17" y1="17" x2="19.1" y2="19.1" />
        <line x1="4.9" y1="19.1" x2="7" y2="17" />
        <line x1="17" y1="7" x2="19.1" y2="4.9" />
    </svg>
)

const MoonIcon = () => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
)

export const ThemeToggle = () => {
    const theme = useSyncExternalStore(subscribe, getTheme, () => 'dark')

    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'

    const toggle = () => {
        setTheme(nextTheme)
    }

    return (
        <motion.button
            type="button"
            onClick={toggle}
            whileHover={{ scale: 1.1, y: -2 }}
            aria-label={`Switch to ${nextTheme} theme`}
            style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text)',
                padding: '8px',
                display: 'flex',
            }}
        >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </motion.button>
    )
}
