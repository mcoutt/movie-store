import React from 'react';
import ErrorBoundry from '../error-boundaries';

import './footer.scss';


export default function FooterItem() {
  return (
    <ErrorBoundry>
      <footer>
        <div className='footer-logo'>
          MOVIEStore
        </div>
      </footer>
    </ErrorBoundry>
  );
}
