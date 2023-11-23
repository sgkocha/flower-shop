import React from 'react'
import './SingleProduct.css'

const SingleProduct = () => {
    return (
        <main>
            <div className="single-main d-f jc-sb">
                <div><img src="images/shop/product-large1.png" alt="product-large1" /></div>
                <div>
                    <h3 className="single-main-title">Sun Flower</h3>
                    <p className="single-main-desc">
                        Make every day brighter with our abundant bouquet of fresh sunflowers.
                        These radiant, long-lasting blooms bring that just-picked-from-the-meadow
                        feeling to birthdays, get well wishes, or any day you want to make someone you care about smile.
                    </p>
                    <div className="single-main-rating">4.5/5</div>
                    <div className="single-main-opinion">(101 people opinion)</div>
                    <div className="single-main-controls d-f jc-sb">
                        <div className="single-main-price">100$ / each</div>
                        <div className="single-main-add d-f">
                            <button>Add to favorite</button>
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-info d-f">
                <div className="single-reviews">
                    <div className="d-f jc-sb">
                        <h3 className="single-reviews-title">Reviews</h3>
                        <button className="single-reviews-add">Add a review</button>
                    </div>
                    <div className="single-reviews-box d-f">
                        <div className='single-reviews-item d-f'>
                            <div><img src="images/comment-author1.png" alt="comment-author1" /></div>
                            <div>
                                <div className="reviews-item-title">Atena</div>
                                <div className="reviews-item-subtitle">This flower is the best gift i've ever got</div>
                                <div className="reviews-item-rating d-f">
                                    <div><img src="images/star.png" alt="star" /></div>
                                    <div><img src="images/star.png" alt="star" /></div>
                                    <div><img src="images/star.png" alt="star" /></div>
                                    <div><img src="images/star.png" alt="star" /></div>
                                    <div><img src="images/star.png" alt="star" /></div>
                                </div>
                            </div>
                        </div>
                        <div className='single-reviews-item d-f'>
                            <div><img src="images/comment-author1.png" alt="comment-author1" /></div>
                            <div>
                                <div className="reviews-item-title">Atena</div>
                                <div className="reviews-item-subtitle">This flower is the best gift i've ever got</div>
                                <div className="reviews-item-rating d-f">
                                    <div><img src="images/star.png" alt="star" /></div>
                                    <div><img src="images/star.png" alt="star" /></div>
                                    <div><img src="images/star.png" alt="star" /></div>
                                    <div><img src="images/star.png" alt="star" /></div>
                                    <div><img src="images/star.png" alt="star" /></div>
                                </div>
                            </div>
                        </div>
                        <div className='single-reviews-item d-f'>
                            <div><img src="images/comment-author1.png" alt="comment-author1" /></div>
                            <div>
                                <div className="reviews-item-title">Atena</div>
                                <div className="reviews-item-subtitle">This flower is the best gift i've ever got</div>
                                <div className="reviews-item-rating d-f">
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
                <div className="single-maybe">
                    <div className="single-maybe-title">Maybe you like...</div>
                    <div className="single-maybe-box d-f">
                        <div><img src="images/shop/product1.png" alt="product1" /></div>
                        <div><img src="images/shop/product2.png" alt="product2" /></div>
                        <div><img src="images/shop/product3.png" alt="product3" /></div>
                        <div><img src="images/shop/product4.png" alt="product4" /></div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SingleProduct