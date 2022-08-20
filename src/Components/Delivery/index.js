import Filters from "../Filters/"
import { GoSettings } from "react-icons/go"
import DeliveryItem from "./DeliveryItem/"
import TopBrand from "../TopBrand/"
import Explor from "../Explor/"
import {home} from "../data/home"

const deliveryFilters = [
  {
    id: 1,
    icon: <GoSettings className="btn" size={20} />,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
  },
  {
    id: 6,
    title: "Great Offers",
  },
]

const restaurants = home ;
function Delivery() {

 
  return (
    <div >
      <div>
        <div className="container mx-auto">
          <Filters filterList={deliveryFilters} />
        </div>
        <div>
          <DeliveryItem />
          <TopBrand />
          <Explor list={restaurants} mainTitle="Delivery Restaurants in Naogaon" />
        </div>
      </div>
    </div>
  )
}

export default Delivery