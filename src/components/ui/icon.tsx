import { FC } from 'react'

interface Props {
  item: {
    id?: number
    icon: JSX.Element
    link?: string
    button?: boolean
  }
  handleClick?: () => void
}

const Icon: FC<Props> = ({ item, handleClick }) => {
  if (item.button) {
    return (
      <div className='interactive-icons'>
        <button type='button' onClick={handleClick}>
          {item.icon}
        </button>
      </div>
    )
  }
  if (item.link) {
    return (
      <li className='interactive-icons'>
        <a href={item.link} target='_blank' rel='noopener noreferrer'>
          {item.icon}
        </a>
      </li>
    )
  }
  return <div className='icons'>{item.icon}</div>
}

export default Icon
