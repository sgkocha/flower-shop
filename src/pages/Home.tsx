import React from 'react'
import './Home.css'
import Product from '../components/Product/Product'

const Home = () => {
  return (
    <main>
      <div className="home-main d-f">
        <div>
          <h2 className="home-main-title">Flowers, 🌻 what the world needs </h2>
          <div className="home-main-subtitle">Browse between hounders of flowers</div>
          <button className="home-main-browse">Browse</button>
        </div>
        <div className="home-main-box d-f">
          <div><img src="images/home-main1.png" alt="home-main1" /></div>
          <div><img src="images/home-main2.png" alt="home-main2" /></div>
          <div><img src="images/home-main3.png" alt="home-main3" /></div>
          <div><img src="images/home-main4.png" alt="home-main4" /></div>
          <div><img src="images/home-main5.png" alt="home-main5" /></div>
          <div><img src="images/home-main6.png" alt="home-main6" /></div>
        </div>
      </div>
      <div className="home-best">
        <div className="home-bl-caption d-f align-center">
          <div className="home-bl-pattern"></div>
          <h3 className="home-bl-title">Best selers</h3>
          <div className="home-bl-pattern"></div>
        </div>
        <div className="home-best-box d-f jc-sb">
          <Product
            image='images/best1.png'
            title='Daisy'
            price={5}
          />
          <Product
            image='images/best2.png'
            title='Sun flower'
            price={5}
          />
          <Product
            image='images/best3.png'
            title='White Rose'
            price={5}
          />
          <Product
            image='images/best4.png'
            title='Periwinkle'
            price={5}
          />
        </div>
      </div>
    </main>
  )
}

export default Home