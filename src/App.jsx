import logo from './assets/logo_white.png'
import Arrow from './assets/arrow.svg'
import HeroMenu1 from './assets/hero-menu-1.svg'

function App() {

  return (
    <>
      {/* start hero section */}

      <div className="h-screen bg-primaryColor bg-ornamentBox px-[51px] pt-5">
     
        {/* navbar */}
        <div className="navbar text-white hover:text-white/80">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-primaryColor">
                <li><a>Permasalahan</a></li>
                <li><a>Produk</a></li>
                <li><a>Mitra</a></li>
                <li><a>Legalitas</a></li>
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <img src={logo} className='h-12 w-auto' alt="logo" />
              <a src="#" className="normal-case text-xl font-bold italic">RAFBF</a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Permasalahan</a></li>
              <li><a>Produk</a></li>
              <li><a>Mitra</a></li>
              <li><a>Legalitas</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <a href='#' className="btn bg-mainGrad border-none rounded-full text-white px-6 py-4 capitalize">Hubungi Kami</a>
          </div>
        </div>

        <div className="h-[80vh] flex flex-col justify-between">
          <div className=""></div>

          {/* body hero */}
          <div className="flex flex-col items-center text-white">
            <h1 className='text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-[#00796D] from-[#38C682] leading-[70px]'>Breeding Puter</h1>
            <h1 className='text-6xl font-extrabold text-white my-2'>Pelung Nusantara</h1>
            <p className='w-[50%] text-center'>Kami berkomitmen untuk menjaga populasi burung Puter Pelung dan mempromosikan pelestarian alam serta pelestarian keanekaragaman hayati</p>
          </div>

          <div className="flex justify-center">
              <a href='#' className="btn bg-mainGrad border-none rounded-full text-white capitalize my-2">
                <span>Hubungi Kami</span>
                <img src={Arrow}/>
              </a>
          </div>

          {/* poin hero */}
          <div className="flex justify-center">
            <div className="bg-mainGrad h-[200px] w-fit px-32 rounded-[20px] flex justify-center gap-16 items-center">
              <div className="flex flex-col items-center">
                <img className='w-[80px] h-auto mb-2' src={HeroMenu1} alt="" />
                <span className='text-white text-base'>Expanding the Market</span>
              </div>
              <div className="flex flex-col items-center">
                <img className='w-[80px] h-auto mb-2' src={HeroMenu1} alt="" />
                <span className='text-white text-base'>Expanding the Market</span>
              </div>
              <div className="flex flex-col items-center">
                <img className='w-[80px] h-auto mb-2' src={HeroMenu1} alt="" />
                <span className='text-white text-base'>Expanding the Market</span>
              </div>
              <div className="flex flex-col items-center">
                <img className='w-[80px] h-auto mb-2' src={HeroMenu1} alt="" />
                <span className='text-white text-base'>Expanding the Market</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end hero section */}

      {/* start kenapa kami hadir */}
      <div className="h-screen px-[51px]">
        <h1 className='mt-[70px] text-6xl text-center font-extrabold leading-[70px]'>Kenapa Kami <span className='text-transparent bg-clip-text bg-gradient-to-r to-[#00796D] from-[#38C682]'>Hadir</span></h1>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" checked="checked" /> 
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content"> 
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content"> 
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content"> 
            <p>hello</p>
          </div>
        </div>
      </div>
      {/* end kenapa kami hadir */}

    </>
  )
}

export default App
