import { Icon } from '@/components'
import { Github, Linkedin, Mail, iconClasses } from '@/components/icons'

const socialMedia = [
  {
    id: 1,
    icon: <Linkedin className={iconClasses} />,
    link: 'https://www.linkedin.com/in/facundo-gutierrez-b5969b240'
  },
  {
    id: 2,
    icon: <Github className={iconClasses} />,
    link: 'https://github.com/facundonahuelg26?tab=repositories'
  },
  {
    id: 3,
    icon: <Mail className={iconClasses} />,
    link: 'mailto:facundonahuelg26@gmail.com?subject=Quiero contactarte'
  }
]
const SocialMedia = () => {
  return (
    <ul className='flex gap-4 mt-8'>
      {socialMedia.map((item) => (
        <Icon item={item} key={item.id} />
      ))}
    </ul>
  )
}

export default SocialMedia
