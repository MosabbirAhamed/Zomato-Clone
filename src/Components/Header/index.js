import { MdLocationPin } from "react-icons/md";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";

function Header() {
  return (
    <header className="container mx-auto my-2">
      <div className="flex items-center justify-between">
        <img className="w-[14%] " src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Logo" />

        <div className="flex w-[82%] justify-between items-center">
          
          <div className=" bg-white flex items-center gap-5 border px-2 py-3 rounded-[8px] border-[#e8e8e8] shadow-lg">
              <div className="flex items-center gap-2">
                <MdLocationPin className="btn text-red-400" size={22} />
                <h2 className="text-base text-slate-600 ">Naogaon</h2>
              <BsFillCaretDownFill className="btn text-slate-600" size={16} />
              </div> |

            <div className="flex items-center gap-2 pr-8">
              <FiSearch className="btn text-slate-600" size={20} />
              <h2 className="text-base text-slate-600 ">Search for restaurant, cuisine or a dish</h2>
            </div>

          </div>

          <div className="flex items-center gap-2">
            <img className="w-[45px] h-[45px] rounded-full" src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="Mug" />
            <h3 className="font-semibold text-slate-600">Mosabbir</h3>
            <AiOutlineDown className="btn text-slate-600" size={15} />
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header