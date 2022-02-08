import React from 'react';
import './Menu.css';
const Menu = ({x,y,showMenu}) => {
    const style=()=>{
        return{
            top:y,
            left:x,
            display: showMenu ? 'flex' : 'none',
            zIndex:-1,
    }
    }

  return( 
  <div className='outer__Menu' style={style()}>
      <div className='rows' >Töröl</div>
      <div className='rows' >Megnyit</div>
      <div className='rows'>Hozzáad</div>
  </div>
  );
};


export default Menu;
