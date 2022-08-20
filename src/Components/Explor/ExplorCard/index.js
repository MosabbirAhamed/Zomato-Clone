import {AiFillStar} from "react-icons/ai";

function ExplorCard({restaurant}) {

    const name = restaurant?.info?.name ?? "";
    const cover = restaurant?.info?.image?.url;
    const deliveryTime = restaurant?.order?.deliveryTime;
    const rating = restaurant?.info?.rating?.rating_text;
    const price = restaurant?.info?.cfo?.text;
    const offers = restaurant?.bulkOffers ?? [];
    const cuisines = restaurant?.info?.cuisine?.map((item) => item.name).slice(0, 3);
    const bottomContainers = restaurant?.bottomContainers;
    const goldOff = restaurant?.gold?.text;
    const proOff = offers.length > 1 ? offers[0].text : null;
    const discount = offers.length > 1 ? offers[1].text : offers.length === 1 ? offers[0].text : null;

    console.log(cuisines)
  return (
    <div className="my-[15px] max-w-[350px] w-fit cursor-pointer p-[10px] rounded-xl hover:shadow-xl">
        <div className="h-[248px] w-[328px] relative ">
            <img className="h-[100%] w-[100%] object-cover rounded-xl " src={cover} alt={name} />
            <p className="absolute right-3 bottom-3 opacity-80 bg-slate-100 px-[3px] py-[1px] text-sm font-semibold rounded-sm">{deliveryTime}</p>
            {proOff && <p className="bg-[#d92662] absolute left-0 bottom-10 px-2 rounded-r-md font-semibold text-sm text-white">{proOff}</p>}
            {goldOff && <p className="bg-[#256fef]  absolute left-0 bottom-6 px-2 rounded-r-md font-semibold text-sm text-white">{goldOff}</p>}
            {discount && <p className="bg-[#256fef]  absolute left-0 bottom-4 px-2 rounded-r-md font-semibold text-sm text-white">{discount}</p>}
        </div>
        <div className="flex justify-between items-center pt-2">
            <h2 className="truncate w-[70%] text-lg font-bold text-slate-800">{name}</h2>
            {rating &&
            <div className=" flex items-center text-white px-2 py-[2px] rounded gap-1 bg-[#24963f] ">{rating} <AiFillStar/></div> 
            }
        </div>
        <div className="flex justify-between items-center my-2 pb-3 border-b-[1px] border-[#c4c4c4]">
            {cuisines.length &&
            <div className="w-[60%] truncate text-slate-400 ">
                {cuisines.map((item ,i) =>{
                    return (
                        <span className="text-sm text-slate-400"> {item} { i !== cuisines.length -1 && ","}</span>
                    )
                })}
            </div>
            }
                <p className="w-[40%] text-sm font-semibold text-right text-slate-500">{price}</p>

        </div>
        {bottomContainers.length > 0 && (
            <div className="flex items-center gap-2">
                <img className="h-[18px]" src={bottomContainers[0]?.image?.url} alt="B" />
                <h2 className="text-sm font-semibold w-[65%] text-slate-500">
                    {bottomContainers[0]?.text}
                </h2>
            </div>
        )}
    </div>
  )
}

export default ExplorCard