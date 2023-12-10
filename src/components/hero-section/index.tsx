import { SocialMedia } from '@/components'
import BannerImg from '@/components/hero-section/banner-img'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className=''>
      <div className='container py-7'>
        <div className='relative flex flex-col items-center sm:flex-row'>
          <div className='pt-14 pb-8 text-center sm:w-3/4 lg:w-3/5 lg:py-20 sm:text-left rtl:lg:text-right'>
            <h1 className='text-3xl leading-normal sm:text-5xl lg:text-[70px] lg:leading-none uppercase font-bold'>
              <span>Si lo puedes imaginar,</span>
              <span className='text-tertiary'> lo puedes programar.</span>
              {/* text-transparent bg-clip-text bg-gradient-to-r from-primary-dark via-primary to-primary-light */}
              {/* <span>Sos bienvenido.</span> */}
            </h1>
            <p className='my-8 text-lg lg:w-3/4'>
              Convierte tus ideas en experiencias digitales cautivadoras.
              Desarrollo front-end personalizado y de calidad.
            </p>

            <Link href='#' className='btn mx-auto mt-2 block w-fit sm:mx-0'>
              Apps destacadas
            </Link>
            <div className='flex justify-center sm:justify-start'>
              <SocialMedia />
            </div>
          </div>
          <BannerImg />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
