import React from 'react';
import './App.css';
import Icon from 'mod-icon-library'

function App() {
  return (
    <div className="App">      
       <h1>Iconos SVG Personalizados</h1> 

       <div className='row'>
           <div className='col'>
              <Icon name="ticketPlusCircular"/>
             
              {/* 
              <Icon name="IconoChatUnread"/>
              <Icon name="IconoChatRead"/>
              <Icon name="IconoNotificaciones"/> */}
           </div>
           <div>
              <Icon name="ticketPlus"/>
           </div>
           <div>
              <Icon name="IconoChatRead"/>
           </div>
        <div>
              <Icon name="IconoChatUnread"/>
           </div>
       </div>
      
    </div>
  );
}

export default App;
