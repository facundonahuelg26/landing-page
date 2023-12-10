'use client'
import { Icon } from '@/components'
import Form from '@/components/contact/form'
import { Whatsapp, iconClasses } from '@/components/icons'
import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const data = [
  {
    id: 1,
    title: 'Phone',
    content: '+1 (555) 555-5555',
    icon: 'A'
  },
  {
    id: 2,
    title: 'Email',
    content: 'pZ5Z0@example.com',
    icon: 'A'
  },
  {
    id: 3,
    title: 'Address',
    content: '123 Main St, Anytown USA',
    icon: 'A'
  }
]
const phone = {
  icon: <Whatsapp className={iconClasses} />
}
const Contact = () => {
  return (
    <section className='bg-[url(/assets/images/bg_shadow_1.png)] dark:bg-[url(/assets/images/bg_shadow_1_dark.png)] bg-cover lg:bg-contain bg-right bg-no-repeat lg:pt-60'>
      <div className='container flex flex-col lg:flex-row'>
        <div className='w-full'>
          <h2 className='text-3xl font-bold py-4 text-center lg:text-left w-full lg:w-3/4'>
            Get in touch
          </h2>
          <p className='text-center lg:text-left w-full lg:w-3/4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, modi
            minus. Culpa fugiat cumque doloremque enim quaerat ut nihil
            voluptatibus voluptas velit impedit? Facilis tempore magni
            architecto itaque officiis pariatur.
          </p>
          {/* {data.map(({ id, title, content, icon }) => (
            <div className='flex items-center py-4' key={id}>
              <div className='w-[20px] h-[20px] bg-primary radius-full'>
                {icon}
              </div>
              <div className='ml-4'>
                <h3 className='font-bold'>{title}</h3>
                <p className='text-sm dark:font-thin'>{content}</p>
              </div>
            </div>
          ))} */}
          <div className='flex items-center py-4 cursor-pointer'>
            <Icon item={phone} />

            <div className='ml-4'>
              <h3 className='font-bold'>Teléfono</h3>
              <CopyToClipboard text='+5493408672235'>
                <button
                  className='text-gray-dark dark:text-gray-light'
                  // className='text-sm dark:font-thin'
                >
                  +54 9 3408 67-2235
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </section>
  )
}

export default Contact
