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
      <div className="home-latest">
        <div className="home-bl-caption d-f align-center">
          <div className="home-bl-pattern"></div>
          <h3 className="home-bl-title">Latest posts</h3>
          <div className="home-bl-pattern"></div>
        </div>
        <div className="home-latest-box d-f jc-sb">
          <div className="home-latest-item">
            <div className="latest-item-about d-f jc-sb align-center">
              <div className="latest-item-author d-f align-center">
                <div><img src="images/post-author1.png" alt="post-author1" /></div>
                <div className="author-name">Emily</div>
              </div>
              <div className="latest-item-date">2022/22/8</div>
            </div>
            <div className="latest-item-img"><img src="images/latest1.png" alt="latest1" /></div>
            <div className="latest-item-title">Best flowers for inside home</div>
            <p className="latest-item-desc">
              All the flowers are best for your lovly house
              just get the one you love the most 😊
            </p>
            <div className="latest-item-info d-f jc-sb align-center">
              <div className="latest-item-stats d-f">
                <div className="latest-item-likes">15</div>
                <div className="latest-item-views">2001</div>
              </div>
              <a href="" className='latest-item-more'>Read more</a>
            </div>
          </div>
          <div className="home-latest-item">
            <div className="latest-item-about d-f jc-sb align-center">
              <div className="latest-item-author d-f align-center">
                <div><img src="images/post-author1.png" alt="post-author1" /></div>
                <div className="author-name">Emily</div>
              </div>
              <div className="latest-item-date">2022/22/8</div>
            </div>
            <div className="latest-item-img"><img src="images/latest2.png" alt="latest2" /></div>
            <div className="latest-item-title">Best flowers for inside home</div>
            <p className="latest-item-desc">
              All the flowers are best for your lovly house
              just get the one you love the most 😊
            </p>
            <div className="latest-item-info d-f jc-sb align-center">
              <div className="latest-item-stats d-f">
                <div className="latest-item-likes">15</div>
                <div className="latest-item-views">2001</div>
              </div>
              <a href="" className='latest-item-more'>Read more</a>
            </div>
          </div>
          <div className="home-latest-item">
            <div className="latest-item-about d-f jc-sb align-center">
              <div className="latest-item-author d-f align-center">
                <div><img src="images/post-author1.png" alt="post-author1" /></div>
                <div className="author-name">Emily</div>
              </div>
              <div className="latest-item-date">2022/22/8</div>
            </div>
            <div className="latest-item-img"><img src="images/latest3.png" alt="latest3" /></div>
            <div className="latest-item-title">Best flowers for inside home</div>
            <p className="latest-item-desc">
              All the flowers are best for your lovly house
              just get the one you love the most 😊
            </p>
            <div className="latest-item-info d-f jc-sb align-center">
              <div className="latest-item-stats d-f">
                <div className="latest-item-likes">15</div>
                <div className="latest-item-views">2001</div>
              </div>
              <a href="" className='latest-item-more'>Read more</a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-comments">
        <div className="home-bl-caption d-f align-center">
          <div className="home-bl-pattern"></div>
          <h3 className="home-bl-title">Comments</h3>
          <div className="home-bl-pattern"></div>
        </div>
        <div className="home-comments-box d-f jc-sb">
          <div className="home-comments-item d-f">
            <div><img src="images/comment-author1.png" alt="comment-author1" /></div>
            <div className='comments-item-info'>
              <div className="comments-item-name">Atena</div>
              <p className="comments-item-desc">
                I'm buying flower from them every weak, always fresh flowers and beutiful😍🌻... love'em so nuch..keep going 💯💯
              </p>
              <div className="comments-item-rating d-f">
                <div><img src="images/star.png" alt="star" /></div>
                <div><img src="images/star.png" alt="star" /></div>
                <div><img src="images/star.png" alt="star" /></div>
                <div><img src="images/star.png" alt="star" /></div>
                <div><img src="images/star2.png" alt="star2" /></div>
              </div>
            </div>
          </div>
          <div className="home-comments-item d-f">
            <div><img src="images/comment-author2.png" alt="comment-author2" /></div>
            <div className='comments-item-info'>
              <div className="comments-item-name">pop Boy</div>
              <p className="comments-item-desc">
                I get flowers from them for my baby mama, she love them so much 🔥💯
              </p>
              <div className="comments-item-rating d-f">
                <div><img src="images/star.png" alt="star" /></div>
                <div><img src="images/star.png" alt="star" /></div>
                <div><img src="images/star.png" alt="star" /></div>
                <div><img src="images/star.png" alt="star" /></div>
                <div><img src="images/star.png" alt="star" /></div>
              </div>
            </div>
          </div>
          <div className="home-comments-item d-f">
            <div><img src="images/comment-author3.png" alt="comment-author3" /></div>
            <div className='comments-item-info'>
              <div className="comments-item-name">Young Girl</div>
              <p className="comments-item-desc">
                Drip too hard, don't stand too close. You gon' fuck around and drown off this wave.
              </p>
              <div className="comments-item-rating d-f">
                <div><img src="images/star.png" alt="star" /></div>
                <div><img src="images/star.png" alt="star" /></div>
                <div><img src="images/star.png" alt="star" /></div>
                <div><img src="images/star.png" alt="star" /></div>
                <div><img src="images/star.png" alt="star" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home