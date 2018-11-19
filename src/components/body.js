import React from 'react';
import People from './people';

const Body = ({ store }) => {
  console.log(store);
  if (store.view === 'people') {
    return <People />;
  } else if (store.view === 'facts') {
    return <div>{store.view}</div>;
  } else if (store.view === 'voting') {
    return <div>{store.view}</div>;
  } else {
    return <div>kek</div>;
  }
};

export default Body;
