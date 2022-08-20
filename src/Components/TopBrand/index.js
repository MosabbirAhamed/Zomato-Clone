import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const brandList = [
    {
        id: 1,
        time: "",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png?output-format=webp",
    },
    {
        id: 2,
        time: "29 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604387296.png?output-format=webp",
    },
    {
        id: 3,
        time: "32 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/370c304771298718e899edd29be3d4b4_1605095053.png?output-format=webp",
    },
    {
        id: 4,
        time: " 30 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/86d79de8394874f77218aacc17db3245_1521806382.png?output-format=webp",
    },
    {
        id: 5,
        time: "28 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png?output-format=webp",
    },
    {
        id: 6,
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/f6f779024f5f34469381413bbbddbcbc_1617920260.png?output-format=webp",
    },
    {
        id: 7,
        time: "30 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433322.png?output-format=webp",
    },
    {
        id: 8,
        time: "40 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/e12f7587d0a5f589af54c88352ff8bf3_1628325081.png?output-format=webp",
    },
    {
        id: 9,
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9fd44dce68f59d5a4f63e7c426c4c282_1605106153.png?output-format=webp",
    },
]



const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
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


function TopBrand() {
    return (
        <div className="container mx-auto my-3">
            <h2 className="text-[#1c1c1c] text-2xl font-semibold pb-8">Top brands for you</h2>
            <Carousel responsive={responsive}>
                {brandList.map((item) => {
                    return (
                        <div className="">
                            <div className="h-[150px] w-[150px]">
                                <img className="shadow-xl rounded w-[100%] h-[100%] object-cover" src={item.cover} alt="Brand" />
                            </div>
                            <h2 className="text-base py-3 text-center font-semibold">{item.time}</h2>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default TopBrand