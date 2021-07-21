import React, { Fragment } from 'react';
import HeaderItem from '../header';
import ContentItem from '../content';
import FooterItem from '../footer';
import './app.scss';


function App() {
  return(
    <Fragment>
      <div className='container'>
        <HeaderItem />
        <ContentItem />
        <FooterItem />
      </div>
    </Fragment>
  );
}

export default App;