/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search';



const App = function(){
  return <div>
    <Search/>
  </div>;
}

ReactDOM.render(<App/>,document.getElementById('app'));
