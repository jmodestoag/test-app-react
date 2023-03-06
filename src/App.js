import React from 'react';
import './App.css';
import Icon from 'mod-icon-library'

function App() {
  return (
    <div className="App">      
       <h1>Iconos SVG Personalizados</h1> 

      <div className='row'>
        <div className='col'>
          <Icon name="ticketPlusCircular" />
        </div>
        <div>
          <Icon name="ticketPlus" />
        </div>
        <div>
          <Icon name="IconoChatRead" />
        </div>
        <div>
          <Icon name="IconoChatUnread" />
        </div>
        <div>
          <Icon name="IconDelete"/>
        </div>
      
      </div>
      
    </div>
  );
}

export default App;


const styles = { 
  color: 'white',
  with: '42px',
  height: '42px'
}


