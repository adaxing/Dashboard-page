import * as React from 'react';
import {
  Chart,
  ArgumentAxis,
  ArgumentGrid,
  ValueAxis,
  LineSeries,
  ValueGrid,
} from '@devexpress/dx-react-chart-material-ui';
import { Scale, Animation } from '@devexpress/dx-react-chart';

export default class DownLine extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {time: '12am', total:200},
        {time: '3pm', total:800},
        {time: '6pm', total:400},
        {time: '9pm', total:300},
        {time: '12pm', total:250},
        {time: '3am', total:230},
        {time: '6am', total:200},
        {time: '9am', total:180}
      ],
    };
  }

  render() {
    const { data: chartData } = this.state;
    return (
      <div>
        <Chart
          data={chartData}
          height={150}
          style={{background: 'linear-gradient(60deg, #ef5350, #e53935)'}}
        >
          <ArgumentAxis tickSize={0}/>
          <ValueAxis min={0} tickSize={0}/>

          <ArgumentGrid />
          <ValueGrid />

          <LineSeries
            valueField="total"
            argumentField="time"
          />        
          <Animation />
          <Scale />
        </Chart>
      </div>
    );
  }
}

