

function Filters({filterList}) {

  return (
    <div className="flex items-center gap-4 py-3">
        {filterList &&
        filterList.map((filter) => {
            return (
                <div className="flex items-center gap-2 text-sm text-[#696969] px-1 py-1 rounded border border-[#c2c2c2b9] ">
                    {filter.icon}
                    <div className="filter-title">{filter.title}</div>
                </div>
            )})}
    </div>
  )
}

export default Filters