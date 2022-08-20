import "./tabOption.css"

function TabOptions({ activeTab, setActiveTab }) {

  const tabs = [
    {
      id: 1,
      name: "Delivery",
      activeImg: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      backdrop: "#FCEEC0",
      inactiveImg: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
    },
    {
      id: 2,
      name: "Dining Out",
      activeImg: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      backdrop: "#E5F3F3",
      inactiveImg: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
    },
    {
      id: 3,
      name: "Nightlife",
      activeImg: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      backdrop: "#EDf4FF",
      inactiveImg: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
    }
  ]

  return (
    <div className="tab-options">
      <div className="container mx-auto flex">
        {tabs.map((tab) => {
          return (
            <div
              onClick={ ()=> setActiveTab(tab.name)}
              className={`tab-item btn ${activeTab === tab.name && "active-tab"}`}
            >
              <div className="tab-image-container btn" style={{ backgroundColor: `${activeTab === tab.name ? tab.backdrop : ""}` }} >
                <img className="tab-img" src={activeTab === tab.name ? tab.activeImg : tab.inactiveImg} alt={tab.name} />
              </div>
              <div className="tab-name">{tab.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TabOptions