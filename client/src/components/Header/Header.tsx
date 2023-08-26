'use client'

import { useWindowSize } from '@/utils/useWindowSize'
import Image from 'next/image'
import React from 'react'
import DesktopNav from './Nav/Desktop/DesktopNav'
import HeaderSearchBar from './Search/HeaderSearchBar'

type Props = {}

const Header = (props: Props) => {
  const { width } = useWindowSize()
  const isMobile = (width as number) < 1024

  return (
    <header className='w-full h-[105px] bg-white flex items-center justify-between px-[--root-margin]'>
      <div className='flex items-center gap-[44px]'>
        <Image
          alt='logo'
          src='https://res.cloudinary.com/dli8bhz3z/image/upload/v1693020768/shared/bwovsveiv0fsmb2mv2da.svg'
          height={0}
          width={80}
          sizes='100%'
          className='h-full'
        />
        <HeaderSearchBar />
      </div>
      {!isMobile && <DesktopNav />}
    </header>
  )
}

export default Header
