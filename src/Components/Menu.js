import React from 'react';

const Menu = ({x,y,showMenu}) => {
    const style=()=>{
        return{
            height:200,
            width:150,
            backgroundColor:'#FF5C58',
            color:'#FCD2D1',
            display:'flex',
            flexDirection:'column',
            padding:10,
            top:y,
            left:x,
            position:'absolute',
            display: showMenu ? 'flex' : 'none',
            zIndex:-1,
    }
    }

  return( 
  <div style={style()}>
      <div style={style.div}>Töröl</div>
      <div style={{...style.div,...style.margin }}>Megnyit</div>
      <div style={style.div}>Hozzáad</div>
  </div>
  );
};

const style={
    div:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FE8F8F',
        color:'#FFEDD3',
        fontWeight:'bold',
        cursor:'pointer',
    },
    margin:{
        margin:'10px 0'
    }
}

export default Menu;
