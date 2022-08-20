import { AiOutlineCaretDown } from 'react-icons/ai'
import { GiPathDistance } from 'react-icons/gi'
import { GoSettings } from 'react-icons/go'
import CollectionList from '../CollectionList/'
import Explor from '../Explor'
import Filters from '../Filters'
import {night} from "../data/night"

const Collection = [

  {
    id: 1,
    title: "Microbreweries",
    cover: "https://b.zmtcdn.com/data/collections/df4ccbf9f6b6db21b07d12a18577b5af_1582106658.jpg",
    places: "29 Places",
  },
  {
    id: 2,
    title: "Best Bars & Pubs",
    cover: "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    places: "14 Places",
  },
  {
    id: 3,
    title: "Artisan Cocktails",
    cover: "https://b.zmtcdn.com/data/collections/42e666d436d9a3b90431e6cc4a6b242d_1582106525.jpg",
    places: "23 Places",
  },
  {
    id: 4,
    title: "Happy Hours",
    cover: "https://b.zmtcdn.com/data/collections/67c4acc3f607dbcff71a8e1e77a70c8a_1535469199.jpg",
    places: "30 Places",
  },
  {
    id: 5,
    title: "Beer in a Bar",
    cover: "https://b.zmtcdn.com/data/collections/9a3e5fb300b74eb5a3b22f8a328fcb99_1530849038.jpg",
    places: "116 Places",
  },
  {
    id: 6,
    title: "Bar-gain",
    cover: "https://b.zmtcdn.com/data/collections/4e1df9d915b25858fbc9acd2154d1dff_1631511179.jpg",
    places: "24 Places",
  },
]

const deliveryFilters = [
  {
    id: 1,
    icon: <GoSettings className="btn" size={16} />,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Pubs & Bars",
  },
  {
    id: 4,
    title: "Pro Offers",
    icon: <AiOutlineCaretDown className="btn" size={16} />,

  },
  {
    id: 5,
    title: "Distance",
    icon: <GiPathDistance className="btn" size={16} />,

  },

]
const restaurants = night;


function NightLife() {
  return (
<div>
      <CollectionList
        list={Collection}
        mainTitle="Collections"
        dec="Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends"
        link="All Collections in Naogaon "
      />
      <div className="container mx-auto"><Filters filterList={deliveryFilters} /></div>
      <Explor list={restaurants} mainTitle="Dine-Out Restaurants in Naogaon" />
    </div>
  )
}

export default NightLife