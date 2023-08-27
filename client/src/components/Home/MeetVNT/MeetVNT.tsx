'use client'

import { lobster } from '@/constants/fonts'
import { styles } from '@/constants/styles'
import Image from 'next/image'
import React from 'react'
import { FaLeaf } from 'react-icons/fa'
import Content from './Content/Content'

type Props = {}

const MeetVNT = (props: Props) => {
  const [currentIdx, setCurrentIdx] = React.useState(0)
  const style = {
    notSelected: `font-bold text-orange border border-orange rounded px-[1rem] py-[.2rem] cursor-pointer hover:bg-orange hover:text-white active:scale-95 ${styles.longTransition}`,
    selected: `font-bold text-white bg-orange border border-transparent rounded px-[1rem] py-[.2rem] cursor-pointer active:scale-95 ${styles.longTransition}`,
  }
  return (
    <section className='px-[--root-margin] flex items-center py-[80px] gap-[4rem]'>
      <Image
        alt='coconut'
        src='https://res.cloudinary.com/dli8bhz3z/image/upload/v1693092765/shared/hero-5_vnsygf.jpg'
        width={555}
        height={500}
        className='min-h-[500px] object-cover'
      />

      <div className={`flex flex-col h-[500px] justify-between`}>
        <div>
          <div
            className={`${lobster.className} text-[34px] text-orange font-[700] italic -mb-[.8rem]`}>
            Meet
          </div>
          <div className='font-bold text-[34px]'>VNT Trading Collection!</div>

          <div className='flex text-orange items-center gap-[.6rem]'>
            <FaLeaf />
            <div className={`h-[2px] w-[180px] bg-orange rounded-full`} />
          </div>

          <div className='mt-[2rem] flex items-center gap-[1rem]'>
            <div
              className={`${
                currentIdx === 0 ? style.selected : style.notSelected
              }`}
              onClick={(e) => setCurrentIdx(0)}>
              About VNT Trading
            </div>
            <div
              onClick={(e) => setCurrentIdx(1)}
              className={`${
                currentIdx === 1 ? style.selected : style.notSelected
              }`}>
              Our Promise to You
            </div>
          </div>
          <div
            onClick={(e) => setCurrentIdx(2)}
            className={`w-fit mt-[.6rem] ${
              currentIdx === 2 ? style.selected : style.notSelected
            } mb-[1.4rem]`}>
            A Solid Commitment to Quality
          </div>

          <Content id={currentIdx} />
        </div>

        <div>Button</div>
      </div>
    </section>
  )
}

export default MeetVNT
