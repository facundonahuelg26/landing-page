import { Icon } from '@/components'
import { Menu, iconClasses } from '@/components/icons'
import { FC } from 'react'

const item = {
  icon: <Menu className={iconClasses} />,
  button: true
}
interface Props {
  toggleMenu: () => void
}
const MenuNav: FC<Props> = ({ toggleMenu }) => {
  return (
    <div className='lg:hidden'>
      <Icon item={item} handleClick={toggleMenu} />
    </div>
  )
}

export default MenuNav
