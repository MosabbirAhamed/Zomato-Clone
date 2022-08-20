

function Filters({filterList}) {

  return (
    <div className=" flex items-center flex-wrap gap-2 py-4 md:gap-4 md:py-6">
        {filterList &&
        filterList.map((filter) => {
            return (
                <div className="flex items-center gap-1 text-[12px] md:text-sm text-[#696969] px-1 py-1 rounded border border-[#c2c2c2b9] ">
                    {filter.icon}
                    <div className="filter-title">{filter.title}</div>
                </div>
            )})}
    </div>
  )
}

export default Filters