'use client'
import { Star } from '@/components'
import Menu from '@/components/icons/menu'
import MenuNav from '@/components/navigation/menu-nav'
// import Moon from '@/components/icons/moon'
// import Sun from '@/components/icons/sun'
import DarkMode from '@/components/ui/dark-mode'
// import MenuButton from '@/components/navigation/dark-mode'
// import { useThemeConfig } from '@/components/theme-config'
import Link from 'next/link'
import React, { useState } from 'react'

const links = [
  {
    id: 1,
    title: 'Inicio',
    link: '/'
  },
  {
    id: 2,
    title: 'Proyectos',
    link: '/projects'
  },
  {
    id: 3,
    title: 'Tecnologías',
    link: '/technologies'
  },
  {
    id: 4,
    title: 'Servicios',
    link: '/services'
  },
  {
    id: 5,
    title: 'Referencias',
    link: '/references'
  }
]

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className='text-white sticky-header'>
      {menuOpen && (
        <div
          className='lg:hidden fixed top-0 left-0 w-full h-full bg-black opacity-50'
          onClick={toggleMenu}
        ></div>
      )}
      <div
        className={`p-4 flex justify-between lg:container ${
          !menuOpen && 'backdrop-filter backdrop-blur-lg'
        }`}
      >
        <div className='flex  z-[52]'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue to-blue-light text-lg font-bold '>
            FACU_DEV
          </span>
          <div className='mt-1 ml-2'>
            <Star />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row'>
          <nav>
            <div
              className={`z-50  
          fixed top-0 left-0 lg:sticky
          w-full sm:w-1/2 lg:w-full h-full bg-white dark:bg-black lg:bg-transparent dark:lg:bg-transparent transform ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          } ${
                !menuOpen && 'lg:translate-x-0'
              } transition-transform ease-in-out lg:flex lg:justify-between lg:items-center lg:container`}
            >
              {/* <button
                onClick={toggleMenu}
                className='text-gray-dark dark:text-white lg:hidden'
              >
                Cerrar
              </button> */}
              <ul className='flex flex-col h-full pt-16 lg:pt-0 lg:h-auto lg:flex-row lg:items-center lg:gap-4'>
                {links.map((item) => (
                  <li
                    key={item.id}
                    className='border-b-2 border-gray dark:border-black-light lg:border-0'
                  >
                    <Link
                      href={item.link}
                      className='pl-4 inline-block w-full h-14 flex items-center hover:bg-gray dark:hover:bg-black-light lg:pl-0 lg:w-auto lg:h-auto lg:flex  lg:hover:bg-transparent'
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li className='flex justify-center mt-auto mb-4 lg:m-0 lg:justify-start'>
                  <Link href='/contact' className='mt-4 lg:mt-0 secondary-btn'>
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className='flex items-center gap-4 z-[52]'>
            <DarkMode />
            <MenuNav toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation
