import React from 'react';
import MovieList from '../movie-list';
import ErrorBoundry from '../error-boundaries';

import './content.scss';

export default function ContentItem() {
  return (
    <ErrorBoundry>
      <div className="{content}">
        <MovieList/>
      </div>
    </ErrorBoundry>
  );
}
