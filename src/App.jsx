
import logo from './assets/logo_white.png'
import Arrow from './assets/arrow.svg'
import HeroMenu1 from './assets/hero-menu-1.svg'
import HeroMenu2 from './assets/hero-menu-2.svg'
import HeroMenu3 from './assets/hero-menu-3.svg'
import HeroMenu4 from './assets/hero-menu-4.svg'
// import dummy from './assets/suara-berisik.jpg'
import Genz from './assets/genz.png'
import Die from './assets/die.png'
import Lepas from './assets/lepas.png'
import Virus from './assets/virus.png'
import Legal from './assets/legal.png'
import Alur1 from './assets/alur-1.png'
import Alur2 from './assets/alur-2.png'
import Alur3 from './assets/alur-3.png'
import Alur4 from './assets/alur-4.png'
import PBurungAnggunan from './assets/burung-anggunan.png'
import PKandangBurung from './assets/kandang-burung.png'
import PPupukOrganik from './assets/pupuk-organik.png'
import PPakanBurung from './assets/pakan-burung.png'
import PVitaminBurung from './assets/vitamin-burung.png'
import PKonsultasi from './assets/layanan-konsultasi-burung.png'
import ornamentLine from './assets/Ornament-line.svg'
import Kemendikbud from './assets/kemendikbud.png'
import Pmw from './assets/logo_pmw.png'
import MerdekaBelajar from './assets/merdeka-belajar.png'
import KampusMerdeka from './assets/kampus-merdeka.png'
import UM from './assets/um.png'
import Persebaran from './assets/persebaran.png'
import { useState } from 'react'

function App() {
  const [isMitra, setMitra] = useState(1);

  const handlePersebaran = () => {
    setMitra(1)
  };
  const handleMitra = () => {
    setMitra(2)
  };
  const handlePerluasan = () => {
    setMitra(3)
  };


  return (
    <>
      {/* start hero section */}
      <div className="h-screen bg-primaryColor bg-ornamentBox bg-no-repeat bg-cover px-3 md:px-[51px] duration-300">
        {/* navbar */}
        <div className="navbar text-white hover:text-white/80">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-primaryColor">
                <li><a href='#permasalahan'>Permasalahan</a></li>
                <li><a href='#produk'>Produk</a></li>
                <li><a href='#mitra'>Mitra</a></li>
                <li><a href='#legalitas'>Legalitas</a></li>
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <img src={logo} className='h-12 w-auto' alt="logo" />
              <a src="#" className="normal-case text-xl font-bold italic">RAFBF</a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a href='#permasalahan'>Permasalahan</a></li>
              <li><a href='#produk'>Produk</a></li>
              <li><a href='#mitra'>Mitra</a></li>
              <li><a href='#legalitas'>Legalitas</a></li>
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
            <h1 className='text-4xl sm:text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-[#00796D] from-[#38C682] leading-[50px] sm:leading-[70px]'>Breeding Puter</h1>
            <h1 className='text-4xl sm:text-6xl text-center font-extrabold text-white mb-2'>Pelung Nusantara</h1>
            <p className='w-full sm:w-[50%] text-center'>Kami berkomitmen untuk menjaga populasi burung Puter Pelung dan mempromosikan pelestarian alam serta pelestarian keanekaragaman hayati</p>
          </div>

          <div className="flex justify-center">
              <a href='#' className="btn bg-mainGrad border-none rounded-full text-white capitalize my-2">
                <span>Hubungi Kami</span>
                <img src={Arrow}/>
              </a>
          </div>

          {/* poin hero */}
          <div className="flex justify-center">
            <div className="product bg-mainGrad h-[200px] w-fit px-20 rounded-[20px] flex justify-center gap-20 items-center overflow-x-auto snap-x scroll-pl-6 snap-mandatory">
              <div className="flex flex-col items-center flex-shrink-0 snap-start">
                <img className='w-[80px] h-auto mb-2' src={HeroMenu1} alt="" />
                <span className='text-white text-base text-center'>Menyebar Kelestarian Anggunan</span>
              </div>
              <div className="flex flex-col items-center flex-shrink-0 snap-start">
                <img className='w-[80px] h-auto mb-2' src={HeroMenu2} alt="" />
                <span className='text-white text-base text-center'>Produk Murah Berkualitas</span>
              </div>
              <div className="flex flex-col items-center flex-shrink-0 snap-start">
                <img className='w-[80px] h-auto mb-2' src={HeroMenu3} alt="" />
                <span className='text-white text-base text-center'>Beragam Pilihan Produk</span>
              </div>
              <div className="flex flex-col items-center flex-shrink-0 snap-start">
                <img className='w-[80px] h-auto mb-2' src={HeroMenu4} alt="" />
                <span className='text-white text-base text-center'>Layanan Konsultasi Terpadu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end hero section */}

      {/* start kenapa kami hadir */}
      <div id='permasalahan' className="h-auto px-3 md:px-[51px]">
        <h1 className='mt-[70px] mb-[45px] text-6xl text-center font-extrabold leading-[70px]'>Kenapa Kami <span className='text-transparent bg-clip-text bg-gradient-to-r to-[#00796D] from-[#38C682]'>Hadir</span></h1>

        <div className="collapse collapse-arrow bg-base-200 mb-4 py-2">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            <div className="flex font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#00796D] from-[#38C682]">
              <div className="w-1/6 sm:w-[5%] flex justify-center">
                01
              </div>
              <div className="w-5/6 sm:w-[95%]">
                Suara Berisik
              </div>
            </div>
          </div>
          <div className="collapse-content">
            <div className="flex">
              <div className="w-[5%]"></div>
              <div className="w-[95%]">
                <p className='mb-7'>Keberadaan burung dalam kehidupan kita bisa memberikan kegembiraan, ketenangan, dan keseimbangan. Namun, seringkali pemilik burung malah merasa terganggu dengan suara berisik dari burung peliharaannya</p>
                <div className="rounded-2xl w-full h-[350px] bg-Sec1SuaraBerisik bg-top bg-cover">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-4 py-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <div className="flex font-bold">
              <div className="w-1/6 sm:w-[5%] flex justify-center">
                02
              </div>
              <div className="w-5/6 sm:w-[95%]">
                Kurangnya Minat Generasi Muda
              </div>
            </div>
          </div>
          <div className="collapse-content">
            <div className="flex">
              <div className="w-[5%]"></div>
              <div className="w-[95%]">
                <p className='mb-7'>Kurangnya minat generasi muda dalam minat memelihara burung Anggunan adalah masalah yang sering muncul dalam berbagai konteks. Untuk mengatasi masalah ini, perlu adanya pendekatan yang sesuai.</p>
                <img src={Genz} className="rounded-2xl w-full h-[350px] object-cover object-center"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-4 py-2">
          <input type="radio" name="my-accordion-2"/>
          <div className="collapse-title text-xl font-medium">
            <div className="flex font-bold">
              <div className="w-1/6 sm:w-[5%] flex justify-center">
                03
              </div>
              <div className="w-5/6 sm:w-[95%]">
                Kematian
              </div>
            </div>
          </div>
          <div className="collapse-content">
            <div className="flex">
              <div className="w-[5%]"></div>
              <div className="w-[95%]">
                <p className='mb-7'>Merawat burung peliharaan dengan baik adalah tanggung jawab yang serius, dan kurangnya pengetahuan atau perhatian yang tepat dapat mengakibatkan kesulitan dalam merawat burung hingga akhirnya mati.</p>
                <img src={Die} className="rounded-2xl w-full h-[350px] object-cover object-center"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-4 py-2">
          <input type="radio" name="my-accordion-2"/>
          <div className="collapse-title text-xl font-medium">
            <div className="flex font-bold ">
              <div className="w-1/6 sm:w-[5%] flex justify-center">
                04
              </div>
              <div className="w-5/6 sm:w-[95%]">
                Lepas dari Sangkar
              </div>
            </div>
          </div>
          <div className="collapse-content">
            <div className="flex">
              <div className="w-[5%]"></div>
              <div className="w-[95%]">
                <p className='mb-7'>Ketika burung peliharaan Anda tidak sengaja terlepas dari sangkar, ini dapat menjadi situasi yang menegangkan. Hal ini perlu kehati-hatian dari pemilik burung.</p>
                <img src={Lepas} className="rounded-2xl w-full h-[350px] object-cover object-center"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 py-2">
          <input type="radio" name="my-accordion-2"/>
          <div className="collapse-title text-xl font-medium">
            <div className="flex font-bold">
              <div className="w-1/6 sm:w-[5%] flex justify-center">
                05
              </div>
              <div className="w-5/6 sm:w-[95%]">
                Terjangkit Virus
              </div>
            </div>
          </div>
          <div className="collapse-content">
            <div className="flex">
              <div className="w-[5%]"></div>
              <div className="w-[95%]">
                <p className='mb-7'>Setiap jenis penyakit pada burung dapat memiliki tanda-tanda dan perawatan yang berbeda. Oleh karena itu, penting untuk berkonsultasi dengan pihak berpengalaman dalam merawat burung untuk mendapatkan diagnosis dan perawatan yang tepat.</p>
                <img src={Virus} className="rounded-2xl w-full h-[350px] object-cover object-center"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end kenapa kami hadir */}

      {/* start alur budaya */}
      <div className="relative bg-secondGrad px-3 md:px-[51px] mt-[70px] pt-[70px] pb-[90px]">
        {/* ornament */}
        <div className="absolute w-[100px] h-[100px] bg-emerald-600/30 rounded-full left-2 top-2 -z-10"></div>
        <img src={ornamentLine} className="absolute right-2 bottom-2" alt="" />

        <h1 className='mb-[16px] text-6xl text-center font-extrabold leading-[70px]'>Alur <span className='text-transparent bg-clip-text bg-gradient-to-r to-[#00796D] from-[#38C682]'>Budidaya</span></h1>
        <p className='mb-[45px] text-center w-full sm:w-[60%] mx-auto'>Produk-produk ini dibuat dengan perhatian terhadap detail untuk memastikan keamanan dan kesejahteraan burung anda</p>

        <div className="w-[80%] mx-auto">
          <div className="relative w-full h-full flex justify-around items-center">
            <div className="absolute w-full h-full flex justify-center items-center">
              <div className="border-dashed border border-gray-500 h-0 w-[80%]"></div>
            </div>

            <div className="flex z-10 flex-col justify-center items-center">
              <div className='h-[100px] w-[100px] bg-whiteGrad rounded-full flex justify-center items-center tooltip tooltip-bottom tooltip-close md:tooltip-open' data-tip="Persiapan Kandang">
                <div className='h-[80px] w-[80px] border-4 border-emerald-700 rounded-full'>
                  <img className='w-full h-full rounded-full' src={Alur1} alt="" />
                </div>
              </div>
            </div>
            <div className="flex z-10 flex-col justify-center items-center">
              <div className='h-[100px] w-[100px] bg-whiteGrad rounded-full flex justify-center items-center tooltip tooltip-bottom tooltip-close md:tooltip-open' data-tip="Persiapan Indukan">
                <div className='h-[80px] w-[80px] border-4 border-emerald-700 rounded-full'>
                  <img className='w-full h-full rounded-full' src={Alur2} alt="" />
                </div>
              </div>
            </div>
            <div className="flex z-10 flex-col justify-center items-center">
              <div className='h-[100px] w-[100px] bg-whiteGrad rounded-full flex justify-center items-center tooltip tooltip-bottom tooltip-close md:tooltip-open' data-tip="Anakan">
                <div className='h-[80px] w-[80px] border-4 border-emerald-700 rounded-full'>
                  <img className='w-full h-full rounded-full' src={Alur3} alt="" />
                </div>
              </div>
            </div>
            <div className="flex z-10 flex-col justify-center items-center">
              <div className='h-[100px] w-[100px] bg-whiteGrad rounded-full flex justify-center items-center tooltip tooltip-bottom tooltip-close md:tooltip-open' data-tip="Persiapan Kandang">
                <div className='h-[80px] w-[80px] border-4 border-emerald-700 rounded-full'>
                  <img className='w-full h-full rounded-full' src={Alur4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end alur budaya */}

      {/* start product */}
      <div id='produk' className="bg-primaryColor bg-ornamentBox2 bg-bottom bg-no-repeat bg-cover pt-[70px] pb-[51px]">
        <h1 className='text-white text-6xl text-center font-extrabold leading-[70px] mb-5'>Produk Penawaran <span className='text-transparent bg-clip-text bg-gradient-to-r to-[#00796D] from-[#38C682]'>Khusus</span></h1>
        <p className='w-full sm:w-[70%] mx-auto text-white text-center'>Kami berkomitmen untuk menjaga populasi burung Puter Pelung dan mempromosikan pelestarian alam serta pelestarian keanekaragaman hayati</p>

        <div className="product w-[99%] mx-auto flex overflow-x-auto snap-x scroll-pl-6 snap-mandatory gap-3 mt-11">
          <div className="snap-start flex-shrink-0 card w-96 bg-[#181D2A] border-[1px] border-[#3D414C] shadow-sm text-white ml-1 md:ml-6">
            <figure className="p-[10px]">
              <img src={PBurungAnggunan} alt="Burung Anggunan" className="rounded-xl w-[414px] h-[400px] object-cover" />
            </figure>
            <div className="card-body items-center sm:items-start p-[10px]">
              <h2 className="card-title">Burung Anggunan</h2>
            </div>
          </div>
          <div className="snap-start flex-shrink-0 card w-96 bg-[#181D2A] border-[1px] border-[#3D414C] shadow-sm text-white">
            <figure className="p-[10px]">
              <img src={PKandangBurung} alt="Kandang Burung" className="rounded-xl w-[414px] h-[400px] object-cover" />
            </figure>
            <div className="card-body items-center sm:items-start text-center p-[10px]">
              <h2 className="card-title">Kandang Burung</h2>
            </div>
          </div>
          <div className="snap-start flex-shrink-0 card w-96 bg-[#181D2A] border-[1px] border-[#3D414C] shadow-sm text-white">
            <figure className="p-[10px]">
              <img src={PPupukOrganik} alt="Pupuk Organik" className="rounded-xl w-[414px] h-[400px] object-cover" />
            </figure>
            <div className="card-body items-center sm:items-start text-center p-[10px]">
              <h2 className="card-title">Pupuk Organik</h2>
            </div>
          </div>
          <div className="snap-start flex-shrink-0 card w-96 bg-[#181D2A] border-[1px] border-[#3D414C] shadow-sm text-white">
            <figure className="p-[10px]">
              <img src={PPakanBurung} alt="Pakan Burung" className="rounded-xl w-[414px] h-[400px] object-cover" />
            </figure>
            <div className="card-body items-center sm:items-start text-center p-[10px]">
              <h2 className="card-title">Pakan Burung</h2>
            </div>
          </div>
          <div className="snap-start flex-shrink-0 card w-96 bg-[#181D2A] border-[1px] border-[#3D414C] shadow-sm text-white">
            <figure className="p-[10px]">
              <img src={PVitaminBurung} alt="Vitamin Burung" className="rounded-xl w-[414px] h-[400px] object-cover" />
            </figure>
            <div className="card-body items-center sm:items-start text-center p-[10px]">
              <h2 className="card-title">Vitamin Burung</h2>
            </div>
          </div>
          <div className="snap-start flex-shrink-0 card w-96 bg-[#181D2A] border-[1px] border-[#3D414C] shadow-sm text-white">
            <figure className="p-[10px]">
              <img src={PKonsultasi} alt="Pelayanan Konsultasi Burung" className="rounded-xl w-[414px] h-[400px] object-cover" />
            </figure>
            <div className="card-body items-center sm:items-start text-center p-[10px]">
              <h2 className="card-title">Pelayanan Konsultasi Burung</h2>
            </div>
          </div>
        </div>
      </div>
      {/* end product */}

      {/* start company */}
      <div className="bg-primaryColor px-[51px] py-11 flex flex-wrap justify-around border-t-[1px] border-gray-500 gap-6 sm:gap-0">
        <img src={Kemendikbud} className='h-10 w-auto' alt="pmw" />
        <img src={MerdekaBelajar} className='h-10 w-auto' alt="" />
        <img src={KampusMerdeka} className='h-10 w-auto'  alt="" />
        <img src={Pmw} className='h-10 w-auto'  alt="" />
        <img src={UM} className='h-10 w-auto'  alt="" />
        <img src={logo} className='h-10 w-auto'  alt="" />
      </div>
      {/* end company */}

      {/* start legalitas */}
      <div id='legalitas' className="relative bg-secondGrad px-3 md:px-[51px] py-[70px]">
        <div className="absolute w-[100px] h-[100px] bg-emerald-600/30 rounded-full left-2 top-2 -z-10"></div>
        <img src={ornamentLine} className="absolute right-2 bottom-2" alt="" />

        <div className="flex flex-col-reverse sm:flex-row  gap-11 items-center">
          <div className="">
            <img src={Legal} className='rounded-2xl' alt="" />
          </div>
          <div className="">
            <h1 className='text-6xl mb-8 text-center sm:text-start font-extrabold leading-[70px]'>Legalitas <span className='text-transparent bg-clip-text bg-gradient-to-r to-[#00796D] from-[#38C682]'>Usaha</span></h1>
            <p className='text-center sm:text-start'>Memastikan bahwa kepemilikan aset perusahaan, termasuk merek dagang, paten, dan hak cipta, sesuai dengan hukum adalah bagian dari legalitas usaha</p>
          </div>
        </div>
      </div>
      {/* end legalitas */}

      {/* start mitra */}
      <div id='mitra' className="px-3 md:px-[51px] py-[70px]">
        <h1 className='text-4xl sm:text-6xl mb-4 text-center md:text-left font-extrabold leading-[50px] sm:leading-[70px] w-full md:w-[50%]'>Berkolaborasi Bersama <span className='text-transparent bg-clip-text bg-gradient-to-r to-[#00796D] from-[#38C682]'>Mitra Kami</span></h1>
        <p className='text-center md:text-left'>Lihat bagaimana kami bekerja bersama mitra</p>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex w-fit flex-col mt-11">
            <div className={`btn block ${isMitra == 1 ? 'bg-mainGrad text-white' : 'btn-ghost '} border-none rounded-full py-4 capitalize mb-5 text-left`} onClick={handlePersebaran}>Persebaran Mitra Usaha</div>
            <div className={`btn block ${isMitra == 2 ? 'bg-mainGrad text-white' : 'btn-ghost '} border-none rounded-full py-4 capitalize mb-5 text-left`} onClick={handleMitra}>Mitra Usaha</div>
            <div className={`btn block ${isMitra == 3 ? 'bg-mainGrad text-white' : 'btn-ghost '} border-none rounded-full py-4 capitalize mb-5 text-left`} onClick={handlePerluasan}>Perluasan Mitra Usaha</div>
          </div>
          <div className="basis-1/2">
            <div className={`flex-col items-center ${ isMitra == 1 ? 'flex' : 'hidden' }`}>
              <img src={Persebaran} alt="" />
              <h4 className='text-4xl font-extrabold leading-[70px] text-transparent bg-clip-text bg-gradient-to-r to-[#00796D] from-[#38C682]'>Pulau Jawa</h4>
            </div>
            <div className={`flex-col items-start ${ isMitra == 2 ? 'flex' : 'hidden' }`}>
              <h4 className='text-4xl font-extrabold leading-[50px] sm:leading-[70px] text-transparent bg-clip-text bg-gradient-to-r to-[#00796D] from-[#38C682]'>Mitra Usaha</h4>
              <ul className='pl-6'>
                <li className='mb-2'>▶️ Suplier Pakan Burung</li>
                <li className='mb-2'>▶️ Win-Win Bird Farm</li>
                <li className='mb-2'>▶️ Suplier Ring Burung</li>
                <li className='mb-2'>▶️ Kurir Ekspedisi Pengiriman</li>
                <li className='mb-2'>▶️ Suplier Packing</li>
              </ul>
            </div>
            <div className={`flex-col items-start ${ isMitra == 3 ? 'flex' : 'hidden' }`}>
            <h4 className='text-4xl font-extrabold leading-[50px] sm:leading-[70px] text-transparent bg-clip-text bg-gradient-to-r to-[#00796D] from-[#38C682]'>Perluasan Mitra Usaha</h4>
              <ul className='pl-6'>
                <li className='mb-2'>▶️ Kalimantan</li>
                <li className='mb-2'>▶️ Yogyakarta</li>
                <li className='mb-2'>▶️ Malang</li>
                <li className='mb-2'>▶️ Pasuruan</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      {/* end mitra */}

      {/* start footer */}
      <div className="bg-primaryColor text-white px-[51px]">
        <footer className="footer pb-[25px] pt-[70px]">
          <aside>
            <div className="flex items-center gap-2">
              <img src={logo} className='h-12 w-auto' alt="logo" />
              <a src="#" className="normal-case text-xl font-bold italic">RAFBF</a>
            </div>
            <p>RAFBF Breeding Puter Pelung Nusantara Ltd.<br/>Providing reliable tech since 2001</p>
            <p>RAFBF@gmail.com</p>
          </aside> 
          <nav>
            <header className="footer-title">Services</header> 
            <a className="link link-hover">Branding</a> 
            <a className="link link-hover">Design</a> 
            <a className="link link-hover">Marketing</a> 
            <a className="link link-hover">Advertisement</a>
          </nav> 
          <nav>
            <header className="footer-title">Company</header> 
            <a className="link link-hover">About us</a> 
            <a className="link link-hover">Contact</a> 
            <a className="link link-hover">Jobs</a> 
            <a className="link link-hover">Press kit</a>
          </nav> 
          <nav>
            <header className="footer-title">Legal</header> 
            <a className="link link-hover">Terms of use</a> 
            <a className="link link-hover">Privacy policy</a> 
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <div className="border-t-[1px] border-gray-500 py-7">
            <p className='text-center'>Copyright © 2023 by RAFBF. All rights reserved.</p>
        </div>
      </div>
      {/* end footer */}
    </>
  )
}

export default App
