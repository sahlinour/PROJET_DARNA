import React from 'react';
import Header from '../../Header';
import CountUp from 'react-countup';
import Filter from '../Filters/Filter'
import ListAnnonce from '../Cards/ListAnnonce';
import '../../style.css'
import About from '../../About';
import Footer from '../../Footer';
import Propre from '../../Propre';
function Accueil() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="home ">
      <div className="secContainer container ">
      <div className="homeText text-center mt-20">
        </div>
      </div>
         </div>
      <Filter />
      <ListAnnonce />
      <About />
      <Propre />
      <Footer />
    </div>
  );
}

export default Accueil;


 {/* <div>
          <div className='title1 flex items-center'>
            <div className='circle'></div>
            <h1 className="text-4xl font-bold text-white title">Bienvenue sur notre <br/> site immobilier</h1>
          </div>
          <div className='pl-28'>
            <p className="text-lg text-cyan-200 ">Trouvez la maison de vos rêves dès aujourd'hui ! <br/> Trouvez la maison de vos rêves dès aujourd'hui !</p>
          </div>
          <div className='flex items-center justify-between pl-24 pt- '>
          <div className="flex items-center my-12">
            <div>
              <span className='text-3xl text-white'>
                <CountUp start={8000} end={9000} duration={4}/>
                <span className='text-orange-500'> + </span>
              </span> <br/>
              <span className=' text-orange-200'>
                Premuium Products
              </span>
              
            </div>
          </div>
          <div className="flex items-center my-12">
            <div>
              <span className='text-3xl text-white'>
                <CountUp start={1950} end={2000} duration={4}/>
                <span className='text-orange-500'> + </span>
              </span> <br/>
              <span className=' text-orange-200'>
                Happy Customers
              </span>
            </div>
          </div>
          <div className="flex items-center my-12">
            <div>
              <span className='text-3xl text-white'> 
                <CountUp end={28}/>
                <span className='text-orange-500'> + </span>
              </span> <br/>
              <span className=' text-orange-200'>
                Award Winnings
              </span>
            </div>
          </div>
        </div>
          </div> */}
         
         {/* <div className="flex items-center image-container my-10 border border-emerald-400 " >
    <img src="/images/télécharger (7).jpeg" alt="Logo" className="hidden" />
</div> */}
