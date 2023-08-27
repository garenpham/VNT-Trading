import React from 'react'

type Props = {
  id: number
}

const Content = ({ id }: Props) => {
  const style = {
    emphasis: `font-bold`,
  }
  return (
    <p className='text-[#767676]'>
      <span className={style.emphasis}>VNT Trading</span> is a Canadian-based
      international Import/Export Company located in Greater Vancouver.{' '}
      <span className={style.emphasis}>VNT</span> is a general trading company
      specialized in food ingredients/products trade and distribution with 15+
      years of experience in this field. <br />
      <br />
      <span className={style.emphasis}>VNT</span> is active in the development
      and implementation of international deals, export, import, sourcing,
      consultancy, feasibility study, market study, facilitating commercial
      exchange, and the management of efficient distribution networks within
      existing and new markets.
    </p>
  )
}

export default Content
