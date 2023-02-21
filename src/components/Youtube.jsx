import React from 'react'
import database from '../data/youtubeData'
import Card from '../shared/Card';

function Youtube() {

    const data = database;

  return (
    <div className="data">
        {
                data.map((item) => (
                        <Card name={item.name} author={item.author} link={item.link}/>
                    )
                )
            }
    </div>
  )
}

export default Youtube