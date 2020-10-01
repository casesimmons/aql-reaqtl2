import React, {
  useState,
  Component,
  useEffect
} from 'react';
import * as d3 from 'd3';

class Graphs extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.dataSet = [2, 5, 3, 7, 23];
  }

  componentDidMount() {
    let accessToRef = d3.select(this.myRef.current)
      .append('svg')
      .attr('width', 200)
      .attr('height', 70);

    let myCirqls = accessToRef.selectAll("circle")
      .data(this.dataSet)
      .enter()
      .append("circle")
      .attr("cx", (d,i) => i*35 + 20)
      .attr("cy", 25)
      .attr("r", (d, i) => d)
      .style("fill", "white");
  }



  render() {
    return (
      <div id="graphdiv">
      <h5>Aql Analytics</h5><div ref={this.myRef} id="graphs">Insert graphs here</div> 
      </div>
    )
  }


}

export default Graphs;