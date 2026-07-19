import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import './styles/globals.css'

const description =
    'Dylan Toporek is a full stack engineer in New York City building precise, captivating, and accessible digital experiences.'

export const metadata: Metadata = {
    title: 'Dylan Toporek',
    description,
    openGraph: {
        title: 'Dylan Toporek — Full Stack Engineer',
        description,
        type: 'website',
        siteName: 'Dylan Toporek',
    },
    twitter: {
        card: 'summary',
        title: 'Dylan Toporek — Full Stack Engineer',
        description,
    },
}

interface Props {
    readonly children: ReactNode
}

// Runs before first paint so the stored/system theme applies with no flash
const themeInitScript = `(function () {
    try {
        var theme = localStorage.getItem('theme')
        if (theme !== 'light' && theme !== 'dark') {
            theme = window.matchMedia('(prefers-color-scheme: light)').matches
                ? 'light'
                : 'dark'
        }
        document.documentElement.dataset.theme = theme
    } catch (e) {
        document.documentElement.dataset.theme = 'dark'
    }
})()`

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
                <main>{children}</main>
            </body>
        </html>
    )
}
