import React from 'react'
import database from '../data/udemyData'
import Card from '../shared/Card';

function UdemyPage() {

  const data = database
  
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

export default UdemyPage