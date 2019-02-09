import React from 'react';

import MediaCard from "./MediaCard";

const items = [
    { name: 'AAA', color: 'black' },
    { name: 'BBB', color: 'blue' },
    { name: 'CCC', color: 'orange' },
    { name: 'DDD', color: 'green' },
  ];
  
  const Top = () => (
    <div>
      {items.map((it,index) => (
      <MediaCard key={index} shop={it.name} coupon={it.color} />
    ))}
    </div>
  );

export default Top;