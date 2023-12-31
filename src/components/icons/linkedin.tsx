import { FC } from 'react'

interface Props {
  className: string
}
const Linkedin: FC<Props> = (props) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      version='1.2'
      baseProfile='tiny'
      viewBox='0 0 24 24'
      height='24px'
      width='24px'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fill='currentColor'
        d='M8 19h-3v-10h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165v6.262h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03v5.647z'
      ></path>
      <ellipse cx='6.5' cy='6.5' rx='1.55' ry='1.5'></ellipse>
    </svg>
  )
}

export default Linkedin
