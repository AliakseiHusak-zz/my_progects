import React from 'react';
import People from './people';
import Facts from './facts';
import Voting from './voting';

const Body = ({ store }) => {
  if (store.view === 'people') {
    return <People />;
  } else if (store.view === 'facts') {
    return <Facts state={store} />;
  } else if (store.view === 'voting') {
    return <Voting state={store} />;
  } else {
    return <People />;
  }
};

export default Body;
