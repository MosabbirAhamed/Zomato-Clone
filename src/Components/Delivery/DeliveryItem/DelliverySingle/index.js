import React from 'react'

function DeliverySingle({item}) {
  return (
          <div className="">
            <div className=" md:h-[170px] md:w-[210px] h-[100px] w-[140px] overflow-hidden">
                <img className="rounded w-[100%] h-[100%] object-cover" src={item.cover} alt={item.title} />
            </div>
            <h2 className="text-xl py-3 font-semibold">{item.title}</h2>
          </div>
  )
}

export default DeliverySingle