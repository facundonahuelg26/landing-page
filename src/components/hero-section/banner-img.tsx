import Image from 'next/image'

const BannerImageLight = () => {
  return (
    <div className='block dark:hidden'>
      <div className='md:hidden'>
        <Image
          src='bg-mobile-light.svg'
          alt=''
          width={200}
          height={208}
          quality={100}
          sizes='100vw'
          priority
        />
      </div>
      <div className='hidden sm:block sm:absolute sm:top-0 sm:right-0 lg:hidden'>
        <Image
          src='bg-tablet-light.svg'
          alt=''
          width={439}
          height={456}
          quality={100}
          sizes='100vw'
          priority
        />
      </div>
      <div className='hidden lg:block'>
        <Image
          src='bg-desktop-light.svg'
          alt=''
          width={720}
          height={750}
          quality={100}
          sizes='100vw'
          priority
        />
      </div>
    </div>
  )
}
const BannerImage = () => {
  return (
    <div className='hidden dark:block'>
      <div className='md:hidden'>
        <Image
          src='bg-mobile.svg'
          alt=''
          width={200}
          height={208}
          quality={100}
          sizes='100vw'
          priority
        />
      </div>
      <div className='hidden sm:block sm:absolute sm:top-0 sm:right-0 lg:hidden'>
        <Image
          src='bg-tablet.svg'
          alt=''
          width={439}
          height={456}
          quality={100}
          sizes='100vw'
          priority
        />
      </div>
      <div className='hidden lg:block'>
        <Image
          src='bg-desktop.svg'
          alt=''
          width={720}
          height={750}
          quality={100}
          sizes='100vw'
          priority
        />
      </div>
    </div>
  )
}
const BannerImg = () => {
  return (
    <>
      <BannerImageLight />
      <BannerImage />
    </>
  )
}
export default BannerImg
