import { AiOutlineCaretRight } from "react-icons/ai"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };


function CollectionList({ list, mainTitle , dec, link}) {
    return (
        <div className="bg-[#f4f4f4]">
            <div className="container mx-auto">
                <div className="py-4">
                    <div className=" flex md:block justify-between items-center">
                    <div className="text-xl font-semibold  md:pb-4">{mainTitle}</div>
                    <div className="flex items-center justify-between ">
                        <p className="text-lg hidden md:block text-slate-500">{dec}</p>
                        <div className="flex items-center cursor-pointer gap-1 text-[#ff7e8b]"><p>{link}</p> <span> <AiOutlineCaretRight className="btn" size={14} /> </span></div>
                    </div>
                    </div>

                    <Carousel responsive={responsive}>
                        {list.map((item) => {
                            return (
                                <div className="py-6">
                                    <div className="md:w-[210px] md:h-[290px] w-[150px] h-[200px] relative">
                                        <img className=" w-[100%] h-[100%] object-cover rounded-lg" src={item?.cover} alt={item?.title} />
                                        <div className="absolute rounded-lg w-[100%] h-[100%] top-0 left-0 bg-gradient-to-t from-[#000000cc] to-[#ffffff06]"></div>
                                        <div className="absolute bottom-3 left-3 text-white ">
                                            <h2 className=" text-lg font-semibold">{item?.title}</h2>
                                            <div className="flex items-center cursor-pointer gap-1"><p className="text-sm">{item?.places}</p> <span> <AiOutlineCaretRight className="btn" size={14} /> </span></div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </Carousel>

                </div>
            </div>
        </div>
    )
}

export default CollectionList