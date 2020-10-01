import React, { useState, useRef, useEffect } from 'react';
import { select } from 'd3';

function Graphs() {
  const [data, setData] = useState([4, 12, 22, 18, 40]);

  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    // Select all circles found in svg and sync them with data
    svg
      .selectAll('circle')
      .data(data)
      // Enter Update Exit pattern (Exit isn't needed in new D3, the new general update pattern)
      // .join(
      //   (enter) =>
      //     enter.append('circle', 'circleClass').attr('r', (value) => value),
      //   (update) => update.attr('class', 'updatedClass')
      // )
      .join('circle')
      // Circle attributes, radius, x, y, stroke
      .attr('r', (value) => value)
      .attr('cx', (value) => value * 2)
      .attr('cy', (value) => value * 2)
      .attr('fill', 'none')
      .attr('stroke', 'red');
  }, [data]);
  return (
    <React.Fragment>
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={() => setData(data.map((value) => value + 5))}>
        Update Data
      </button>
      <button onClick={() => setData(data.filter((value) => value < 35))}>
        Filter Data
      </button>
    </React.Fragment>
  );
}

export default Graphs;
