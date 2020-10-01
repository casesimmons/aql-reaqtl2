import React, { useState, useEffect } from 'react';

function Analytics() {
  const analytics = [];
  const [title, setTitle] = useState(
    [
    'This is a bunch of text for column 1 tralala text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
    'This is all of the text for column 2 yay yay yay yay text text text text text text text text text text text text text text text text text text text text text text text text text',
    'column 3 up in heeeeeerrrrrre with more text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text'
  ]);
  for(let i = 0; i < 3; i++) {
    analytics.push(<div className="col">{title[i]}</div>)
  }

  return (
    <div id="analytics">
      {analytics}
    </div>
  )

}

export default Analytics;