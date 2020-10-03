import React, { useState, useRef, useEffect } from 'react';
import LineChartToZoom from './LineChartToZoom';

function LineChartZoom() {
  const [data, setData] = useState(
    Array.from({ length: 200 }, () => Math.round(Math.random() * 100))
  );
  return (
    <React.Fragment>
      <LineChartToZoom data={data} />
      <br />
      <div className="buttons">
        <button
          onClick={() => setData([...data, Math.round(Math.random() * 100)])}
        >
          Add
        </button>
        <button onClick={() => setData(data.filter((value) => value < 35))}>
          Filter
        </button>
      </div>
    </React.Fragment>
  );
}

export default LineChartZoom;
