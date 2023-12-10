import { SocialMedia } from '@/components'
import Link from 'next/link'

const links = [
  {
    id: 1,
    title: 'Home',
    link: '/'
  },
  {
    id: 2,
    title: 'Proyectos',
    link: '/'
  },
  {
    id: 3,
    title: 'Servicios',
    link: '/'
  },
  {
    id: 4,
    title: 'Referencias',
    link: '/'
  }
]

const Footer = () => {
  return (
    <footer className='bg-[url(/assets/images/bg_shadow_2.png)] dark:bg-[url(/assets/images/bg_shadow_2_dark.png)] bg-cover lg:bg-contain bg-bottom bg-no-repeat pt-32 pb-20'>
      <section className='flex flex-col items-center container'>
        <div className='flex flex-col items-center'>
          <h2 className='pt-4'>FG Solutions</h2>
          <h3 className='pb-4'>Desarrollo de software</h3>
          <ul className='flex flex-wrap gap-4 py-4'>
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.link}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <p className='lg:w-2/6 pt-2 pb-4 text-center'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi hic
            cupiditate voluptates, similique porro a provident nemo officia
            dolore iste eius eos delectus aperiam quas nostrum ipsam adipisci
            deleniti laborum!
          </p>
          <SocialMedia />
        </div>
        <p className='mt-4'>Copyright &copy; 2023</p>
      </section>
    </footer>
  )
}

export default Footer
