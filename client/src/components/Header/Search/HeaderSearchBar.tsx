import { styles } from '@/constants/styles'
import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

const style = {
  wrapper: `w-full lg:w-auto h-[2rem] lg:h-[3rem] m-auto text-[0.6rem] lg:text-sm flex active:scale-[.99] ${styles.longTransition} group`,
  inputField: `w-full lg:w-[400px] py-3 pl-6 outline-none rounded-l lg:rounded-l-xl group-hover:shadow border`,
  searchContainer: `my-auto bg-orange py-3 px-2 lg:px-4 rounded-r lg:rounded-r-xl text-white group-hover:shadow`,
}

const HeaderSearchBar = () => {
  return (
    <div className={style.wrapper}>
      <input
        id='search'
        type='text'
        placeholder='Find anything here ...'
        className={style.inputField}
      />
      <div className={style.searchContainer}>
        <BiSearchAlt className='text-[24px] lg:text-2xl' />
      </div>
    </div>
  )
}

export default HeaderSearchBar
