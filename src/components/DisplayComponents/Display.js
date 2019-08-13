import React from "react";

const Display = (props) => {
  console.log('Display props: ', props)
  
  const {number:bang} = props

  return <div className='display'>
    {bang}
    </div>;
};

export default Display;
