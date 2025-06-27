import React from 'react';

const Count = ({text,count})=>{
    console.log('Rendering', text);
    return <p>{`${text} - ${count}`}</p>;
}

export default React.memo(Count);