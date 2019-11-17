import * as React from 'react';
import {
  Chart,
  ArgumentAxis,
  ArgumentGrid,
  ValueAxis,
  BarSeries,
  ValueGrid,
} from '@devexpress/dx-react-chart-material-ui';
import { Scale, Animation } from '@devexpress/dx-react-chart';

export default class BarChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {mon: 'Jan', total:580},
        {mon: 'Feb', total:410},
        {mon: 'Mar', total:360},
        {mon: 'Apr', total:780},
        {mon: 'May', total:590},
        {mon: 'Jun', total:450},
        {mon: 'Jul', total:380},
        {mon: 'Aug', total:410},
        {mon: 'Sep', total:590},
        {mon: 'Oct', total:600},
        {mon: 'Nov', total:790},
        {mon: 'Dec', total:850}
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
          style={{background: 'linear-gradient(60deg, #ffa726, #fb8c00)'}}
        >
          <ArgumentAxis tickSize={0} />

          <ValueAxis min={0} tickSize={0} />

          <ArgumentGrid />
          <ValueGrid />

          <BarSeries
            valueField="total"
            argumentField="mon"
          />        
          <Animation />
          <Scale />
        </Chart>
      </div>
    );
  }
}

