import React from 'react'
import { Link } from 'react-router-dom';
import youtube from '../assets/youtube2.jpg'
import books from '../assets/books.jpg'
import udemy from '../assets/udemy.jpg'

function CourseCard() {
  return (
    <>
            <div id="new"className="container">
                <div className="card">
                    <div className="card__side card__front">
                    <img src={youtube} alt="" className="youtube" />
                        <div className="card__text">
                            <div className="card__heading">
                                YOUTUBE BASED COURSES
                            </div>
                            <div className="card__desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam non laborum magni consequatur accusamus quasi iure illo nobis
                            </div>
                        </div>
                    </div>
                    <Link to="youtube"> <div className="card__side card__back">
                        CLICK
                    </div> </Link>
                </div>
                <div className="card">
                    <div className="card__side card__front">
                    <img src={books} alt="" className="youtube" />
                        <div className="card__text">
                            <div className="card__heading">
                                OUR LIBRARY
                            </div>
                            <div className="card__desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam non laborum magni consequatur accusamus quasi iure illo nobis
                            </div>
                        </div>
                    </div>
                    <Link to="library"><div className="card__side card__back">
                        <div className="btn-link">CLICK</div>
                    </div></Link>
                </div>
                <div className="card">
                    <div className="card__side card__front">
                    <img src={udemy} alt="" className="youtube" />
                    <div className="card__text">
                            <div className="card__heading">
                                OUR UDEMY RECOMMENDATIONS
                            </div>
                            <div className="card__desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam non laborum magni consequatur accusamus quasi iure illo nobis
                            </div>
                        </div>
                    </div>
                    <div className="card__side card__back">
                        <Link to="udemy">CLICK</Link>
                    </div>
                </div>
            </div>
    </>
  )
}

export default CourseCard