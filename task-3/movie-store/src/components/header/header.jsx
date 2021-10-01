import React from 'react';
import ErrorBoundry from '../error-boundaries';
import ItemModalAdd from "../item-modal-add";
import './header.scss';


export default function HeaderItem() {
  return (
    <ErrorBoundry>
      <header className='logo logo-image'>
        <ItemModalAdd/>
        <form>
          <label>
            <input type='text' name="search" className="search"></input>
          </label>
          <button type='submit' className='search-button'>SEARCH</button>
        </form>
      </header>
    </ErrorBoundry>
  );
}
