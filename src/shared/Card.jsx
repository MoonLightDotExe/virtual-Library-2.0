import React from 'react'

import { Link } from 'react-router-dom';

function Card({name , author, link}) {

  return (
    <> 
        <div className="card-container">
            <div className="card-heading">
                {name}
            </div>
            <div className="card-author">
                {author}
            </div>
            <a href={link} className='btn-link'> Click to access </a>
        </div>
    </>
  )
}

export default Card