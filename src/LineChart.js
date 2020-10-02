import React, { useState, useRef, useEffect } from 'react';
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  axisRight,
  scaleLinear,
} from 'd3';

function LineChart() {
  const [data, setData] = useState([
    9,
    30,
    25,
    60,
    20,
    65,
    65,
    5,
    35,
    20,
    34,
    60,
    6,
    13,
    14,
    22,
    4,
    44,
    11,
    22,
    27,
    55,
    14,
    65,
    22,
    54,
    24,
    30,
    8,
    23,
    15,
    28,
    44,
    52,
    18,
    47,
  ]);
  const svgRef = useRef();

  // Called initally and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);

    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 600]);

    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(data.length - 1)
      .tickFormat((index) => index + 1);
    svg.select('.x-axis').style('transform', 'translateY(150px)').call(xAxis);

    const yAxis = axisRight(yScale);
    svg.select('.y-axis').style('transform', 'translateX(600px)').call(yAxis);

    // Generates the 'd' attribute of the path element
    const myLine = line()
      .x((value, index) => xScale(index))
      .y((value) => yScale(value))
      .curve(curveCardinal);
    // Renders the path element, and attaches the 'd' attribute from line generator above
    svg
      .selectAll('.line')
      .data([data])
      .join('path')
      .attr('class', 'line')
      .attr('d', (value) => myLine(value))
      .attr('fill', 'none')
      .attr('stroke', 'red');
  }, [data]);
  return (
    <React.Fragment>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      <br />
      <div className="buttons">
        <button
          onClick={() =>
            setData(data.map((value) => value + Math.random() * 10))
          }
        >
          Update Data
        </button>
        <button onClick={() => setData(data.filter((value) => value < 35))}>
          Filter Data
        </button>
      </div>
    </React.Fragment>
  );
}

export default LineChart;
