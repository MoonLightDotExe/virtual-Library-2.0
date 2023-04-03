import React from 'react';
import Card from '../shared/Card';
import database from '../data/database';

function Library() {
  const data = database;

  return (
    <>
      <div className='data'>
        {data.map((item) => (
          <Card
            name={item.name}
            author={item.author}
            link={item.link}
          />
        ))}
      </div>
    </>
  );
}

export default Library;
