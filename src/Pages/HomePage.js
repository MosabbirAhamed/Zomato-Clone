import Header from '../Components/Header/'
import TabOptions from '../Components/TabOptions/'
import Footer from '../Components/Footer/'
import { useState } from 'react';
import Delivery from '../Components/Delivery/';
import DiningOut from '../Components/DiningOut/';
import NightLife from '../Components/NightLife/';

function HomePage() {

    const [activeTab , setActiveTab] = useState("Delivery");

  return (
    <div>
        <Header />
        <TabOptions  activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activeTab)}
        <Footer />
        </div>
  )
}

const getCorrectScreen =(tab) => {
    switch (tab) {
        case "Delivery":
            return <Delivery />;
        case "Dining Out":
            return <DiningOut />;
        case "Nightlife":
            return <NightLife />;
        default:
            return <Delivery />;
    }
}









export default HomePage