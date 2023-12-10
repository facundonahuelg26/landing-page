'use client'
import { ReactNode, useEffect, useState } from 'react'
import '@/styles/globals.css'
import { ThemeConfigProvider } from '@/components/theme-config'

type Props = {
  children: ReactNode
}

export default function Providers({ children }: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
  }
  return <ThemeConfigProvider>{children}</ThemeConfigProvider>
}
