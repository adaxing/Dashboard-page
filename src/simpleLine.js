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

export default class UpLine extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {week: 'Mon', total:10},
        {week: 'Tue', total:20},
        {week: 'Wed', total:5},
        {week: 'Thu', total:20},
        {week: 'Fri', total:25},
        {week: 'Sat', total:20},
        {week: 'Sun', total:40}
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
          style={{background: 'linear-gradient(60deg, #66bb6a, #43a047)'}}
        >
          <ArgumentAxis tickSize={0} />

          <ValueAxis min={0} tickSize={0} />

          <ArgumentGrid />
          <ValueGrid />

          <LineSeries
            valueField="total"
            argumentField="week"
          />        
          <Animation />
          <Scale />
        </Chart>
      </div>
    );
  }
}

