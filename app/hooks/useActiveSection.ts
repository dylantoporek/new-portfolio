import { useEffect, useState } from 'react'

export const SECTIONS = ['about', 'experience', 'projects'] as const

// A section counts as active once its top has scrolled past a line 25% down
// the viewport. Unlike visibility-ratio approaches, this works for sections
// taller than the viewport and always agrees with where nav clicks land.
export const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState<string>(SECTIONS[0])

    useEffect(() => {
        const update = () => {
            const refLine = window.innerHeight * 0.25
            let current: string = SECTIONS[0]
            for (const id of SECTIONS) {
                const el = document.getElementById(id)
                if (el && el.getBoundingClientRect().top <= refLine) {
                    current = id
                }
            }
            setActiveSection(current)
        }

        update()
        window.addEventListener('scroll', update, { passive: true })
        window.addEventListener('resize', update)
        return () => {
            window.removeEventListener('scroll', update)
            window.removeEventListener('resize', update)
        }
    }, [])

    return activeSection
}
