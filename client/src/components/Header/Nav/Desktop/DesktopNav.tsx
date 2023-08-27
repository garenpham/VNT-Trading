import { styles } from '@/constants/styles'
import Link from 'next/link'
import React from 'react'
import { FaBasketShopping } from 'react-icons/fa6'
import { GoHomeFill } from 'react-icons/go'
import { IoIosMail } from 'react-icons/io'
import { MdMiscellaneousServices } from 'react-icons/md'

type Props = {}

const DesktopNav = (props: Props) => {
  const style = {
    link: {
      container: `flex items-center hover:text-orange active:scale-95 ${styles.longTransition}`,
      icon: `mr-[8px]`,
    },
  }
  return (
    <div className='flex font-[700] text-[1.2rem] gap-[40px]'>
      <Link href='/' className={style.link.container}>
        <GoHomeFill className={style.link.icon} />
        Home
      </Link>

      <Link href='#' className={style.link.container}>
        <FaBasketShopping className={style.link.icon} />
        Products
      </Link>

      <Link href='#' className={style.link.container}>
        <MdMiscellaneousServices className={style.link.icon} />
        Services
      </Link>

      <Link href='#' className={style.link.container}>
        <IoIosMail className={style.link.icon} />
        Contact
      </Link>
    </div>
  )
}

export default DesktopNav
