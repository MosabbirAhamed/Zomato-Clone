import { AiOutlineCaretRight } from "react-icons/ai"
import Slider from "react-slick";
import NextArrow from "../NextArrow/index.js";
import PrevArrow from "../PrevArrow/index.js";

var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};


function CollectionList({ list, mainTitle , dec, link}) {
    return (
        <div className="bg-[#f4f4f4]">
            <div className="container mx-auto">
                <div className="py-4">
                    <div className="text-3xl font-semibold pb-4">{mainTitle}</div>
                    <div className="flex items-center justify-between ">
                        <p className="text-lg text-slate-500">{dec}</p>
                        <div className="flex items-center cursor-pointer gap-1 text-[#ff7e8b]"><p>{link}</p> <span> <AiOutlineCaretRight className="btn" size={14} /> </span></div>
                    </div>

                    <Slider {...settings}>
                        {list.map((item) => {
                            return (
                                <div className="py-6">
                                    <div className="w-[260px] h-[320px] relative">
                                        <img className=" w-[100%] h-[100%] object-cover rounded-lg" src={item?.cover} alt={item?.title} />
                                        <div className="absolute  w-[100%] h-[100%] top-0 left-0 bg-gradient-to-t from-[#000000cc] to-[#ffffff06]"></div>
                                        <div className="absolute bottom-3 left-3 text-white ">
                                            <h2 className=" text-lg font-semibold">{item?.title}</h2>
                                            <div className="flex items-center cursor-pointer gap-1"><p className="text-sm">{item?.places}</p> <span> <AiOutlineCaretRight className="btn" size={14} /> </span></div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </Slider>

                </div>
            </div>
        </div>
    )
}

export default CollectionList