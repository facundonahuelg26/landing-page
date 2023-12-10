import { Icon } from '@/components'
import { iconClasses, moonClasses, sunClasses } from '@/components/icons'
import Moon from '@/components/icons/moon'
import Sun from '@/components/icons/sun'
import { useThemeConfig } from '@/components/theme-config'
import React from 'react'

const item = {
  icon: (
    <>
      <Sun className={sunClasses} />
      <Moon className={moonClasses} />
    </>
  ),
  button: true
}
const DarkMode = () => {
  const { toggleTheme } = useThemeConfig()

  return <Icon item={item} handleClick={toggleTheme} />
}

export default DarkMode
