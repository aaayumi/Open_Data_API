import React from "react";
import Highcharts from 'highcharts';

export default class Chart extends Component{
    componentDidMount() {
    this.chart = new Highcharts[this.props.type || 'Chart'](
      this.chartEl,
      this.props.options
    );
  }

  componentWillUnmount() {
    this.chart.destroy();
  }


    render(){
return(
     <div>
    <div ref={el => (this.chartEl = el)} />;
    </div>
)
}
}