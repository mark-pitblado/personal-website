'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-gray-900 dark:text-gray-100 h-6 w-6"
      >
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              stroke-dasharray="2"
              stroke-dashoffset="2"
              stroke-linecap="round"
              stroke-width="2"
            >
              <path d="M0 0">
                <animate
                  fill="freeze"
                  attributeName="d"
                  begin="0.6s"
                  dur="0.2s"
                  values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                />
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.6s"
                  dur="0.2s"
                  values="2;0"
                />
              </path>
              <path d="M0 0">
                <animate
                  fill="freeze"
                  attributeName="d"
                  begin="0.9s"
                  dur="0.2s"
                  values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                />
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.9s"
                  dur="1.2s"
                  values="2;0"
                />
              </path>
              <animateTransform
                attributeName="transform"
                dur="30s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
              />
            </g>
            <mask id="lineMdMoonFilledAltToSunnyFilledLoopTransition0">
              <circle cx="12" cy="12" r="12" fill="#fff" />
              <circle cx="18" cy="6" r="12" fill="#fff">
                <animate fill="freeze" attributeName="cx" dur="0.4s" values="18;22" />
                <animate fill="freeze" attributeName="cy" dur="0.4s" values="6;2" />
                <animate fill="freeze" attributeName="r" dur="0.4s" values="12;3" />
              </circle>
              <circle cx="18" cy="6" r="10">
                <animate fill="freeze" attributeName="cx" dur="0.4s" values="18;22" />
                <animate fill="freeze" attributeName="cy" dur="0.4s" values="6;2" />
                <animate fill="freeze" attributeName="r" dur="0.4s" values="10;1" />
              </circle>
            </mask>
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="currentColor"
              mask="url(#lineMdMoonFilledAltToSunnyFilledLoopTransition0)"
            >
              <animate fill="freeze" attributeName="r" dur="0.4s" values="10;6" />
            </circle>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="currentColor" fill-opacity="0">
              <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.7s"
                  dur="0.4s"
                  values="0;1"
                />
              </path>
              <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="1.1s"
                  dur="0.4s"
                  values="0;1"
                />
              </path>
            </g>
            <path
              fill="none"
              stroke="currentColor"
              stroke-dasharray="56"
              stroke-dashoffset="56"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
            >
              <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0" />
            </path>
          </svg>
        )}
      </svg>
    </button>
  )
}

export default ThemeSwitch
