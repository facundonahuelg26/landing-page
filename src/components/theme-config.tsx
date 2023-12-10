import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState
} from 'react'

type ThemeConfigContextType = {
  theme: string
  toggleTheme: () => void
}

const ThemeConfigContext = createContext<ThemeConfigContextType | undefined>(
  undefined
)

const ThemeConfigProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [theme, setTheme] = useState<string>(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const contextValue: ThemeConfigContextType = {
    theme,
    toggleTheme
  }

  return (
    <ThemeConfigContext.Provider value={contextValue}>
      {children}
    </ThemeConfigContext.Provider>
  )
}

const useThemeConfig = (): ThemeConfigContextType => {
  const context = useContext(ThemeConfigContext)
  if (!context) {
    throw new Error(
      'useThemeConfig debe ser utilizado dentro de un ThemeConfigProvider'
    )
  }
  return context
}

export { ThemeConfigProvider, useThemeConfig }
