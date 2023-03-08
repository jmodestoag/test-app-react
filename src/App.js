import React from 'react';
import './App.css';
import Icon from 'mod-icon-library'

function App() {
  return (
    <div className="App">      
       <h1>Iconos SVG Personalizados</h1> 

      <div className='row'>
        <div className='col'>
          <Icon name="ticketPlusCircularIcon" />
        </div>
        <div>
          <Icon name="ticketPlusIcon" />
        </div>
        <div>
          <Icon name="chatReadIcon" />
        </div>
        <div>
          <Icon name="chatUnreadIcon" />
        </div>
        <div>
          <Icon name="deleteIcon" />
        </div>
        <div>
          <Icon name="notificacionesIcon" />
        </div>       
      </div>      
    </div>
  );
}

export default App;


const styles = { 
  backgroundColor : "black",
  width: 64,
  height: 64,
  borderRadius: 50
}


