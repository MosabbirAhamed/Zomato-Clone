import ExplorCard from "./ExplorCard"

function Explor({list , mainTitle}) {
  return (
    <div className="container mx-auto my-6">
        <div><h2 className="text-[#1c1c1c] text-3xl font-semibold pb-8">{mainTitle}</h2></div>
        <div className="flex flex-wrap justify-between">
            {list.map((item) => {
                return(
                    <ExplorCard restaurant={item}/>
                )
            })}
        </div>
        
    </div>
  )
}

export default Explor