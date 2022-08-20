import React from 'react'

function DeliverySingle({item}) {
  return (
          <div className="">
            <div className="h-[190px] w-[260px]">
                <img className="rounded w-[100%] h-[100%] " src={item.cover} alt={item.title} />
            </div>
            <h2 className="text-xl py-3 font-semibold">{item.title}</h2>
          </div>
  )
}

export default DeliverySingle