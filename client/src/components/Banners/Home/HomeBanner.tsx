import { Button } from '@/components/shared/Buttons/Button'
import Image from 'next/image'
import React from 'react'

type Props = {}

const HomeBanner = (props: Props) => {
  return (
    <div className='w-full h-[624px] relative flex items-center justify-center'>
      <Image
        alt='banner'
        src='https://res.cloudinary.com/dli8bhz3z/image/upload/v1693024225/shared/blog_mct-powder_1764x630_c75gea.jpg'
        height={0}
        width={0}
        sizes='100%'
        className='w-full h-full object-cover absolute brightness-[.3]'
      />
      <div className='relative flex flex-col items-center'>
        <div className='text-orange text-[3.4rem] font-[500]'>Online Shop</div>
        <div className='text-white text-[4.5rem] font-[700] mb-[32px]'>
          VNT Trading
        </div>
        <div className='text-white text-[1.25rem] font-[300] text-center'>
          A Canadian based international Export/Import Company <br /> located in
          Greater Vancouver
        </div>
        <div
          className={`w-[520px] flex items-center justify-center gap-[34px] mt-[64px]`}>
          <Button
            size={'none'}
            className={`w-[200px] h-[51px] uppercase font-[800] hover:border-white hover:text-orange hover:bg-white`}>
            buy online
          </Button>
          <Button
            size={'none'}
            variant={'alternate'}
            className={`w-[200px] h-[51px] uppercase font-[800] hover:text-white hover:border-white`}>
            contact us
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
