import React from 'react'
import { Link } from 'react-router-dom';

function CourseCard() {
  return (
    <>
            <div id="new"className="container">
                <div className="card">
                    <div className="card__side card__front">
                        <div className="card__text">
                            <div className="card__heading">
                                YOUTUBE BASED COURSES
                            </div>
                            <div className="card__desc">
                                lorem ipsum dolor semet
                            </div>
                        </div>
                    </div>
                    <div className="card__side card__back">
                        <Link to="youtube">CLICK</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card__side card__front">
                        <div className="card__text">
                            <div className="card__heading">
                                OUR LIBRARY
                            </div>
                            <div className="card__desc">
                                lorem ipsum dolor semet
                            </div>
                        </div>
                    </div>
                    <div className="card__side card__back">
                        <Link to="library">CLICK</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card__side card__front">
                    <div className="card__text">
                            <div className="card__heading">
                                OUR UDEMY RECOMMENDATIONS
                            </div>
                            <div className="card__desc">
                                lorem ipsum dolor semet
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