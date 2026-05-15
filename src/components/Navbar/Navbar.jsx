
import navImg from "../../assets/logo.png"
import dollar from "../../assets/dollar-1.png"
const Navbar = () => {
    return (
       
             <div className="navbar max-w-[1200px] mx-auto ">
        <div className="flex-1">
          <a className=" text-xl">
            <img src={navImg} alt="" />
          </a>
        </div>
        <div className='flex flex-1 justify-center gap-8'>
            <p>Home</p>
            <p>Fixture</p>
            <p>Teams</p>
            <p>Schedules</p>
          </div>
        <div className="flex ">
          <span className='mr-1'>0</span>
          <span className='mr-1'>Coin</span>
          <img className='w-4x h-5 ' src={dollar} alt="" />
        </div>
      </div>
       
    );
};

export default Navbar;