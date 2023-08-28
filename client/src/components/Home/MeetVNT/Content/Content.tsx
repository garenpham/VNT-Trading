import React from 'react'

type Props = {
  id: number
}

const Content = ({ id }: Props) => {
  const style = {
    emphasis: `font-bold`,
  }

  if (id === 0) {
  }
  return (
    <>
      {id === 0 && (
        <p className='text-[#767676]'>
          <span className={style.emphasis}>VNT Trading</span> is a
          Canadian-based international Import/Export Company located in Greater
          Vancouver. <span className={style.emphasis}>VNT</span> is a general
          trading company specialized in food ingredients/products trade and
          distribution with 15+ years of experience in this field. <br />
          <br />
          <span className={style.emphasis}>VNT</span> is active in the
          development and implementation of international deals, export, import,
          sourcing, consultancy, feasibility study, market study, facilitating
          commercial exchange, and the management of efficient distribution
          networks within existing and new markets.
        </p>
      )}

      {id === 1 && (
        <p className='text-[#767676]'>
          <span className={style.emphasis}>VNT</span> customers benefit from our
          vast knowledge of export/import procedures, shorter transit times, and
          reliable delivery. <span className={style.emphasis}>VNT</span> works
          very closely with the public and private sectors and whole sellers to
          foster trade relationships between various sources and our clients
          throughout the world.
        </p>
      )}

      {id === 2 && (
        <p className='text-[#767676]'>
          The key to our success is sensitivity to local cultures, knowing the
          market, understanding of norms and business practices, and having a
          powerful business network in different industries.
        </p>
      )}
    </>
  )
}

export default Content
