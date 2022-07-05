import React from 'react';
import Chart from 'react-apexcharts';
import Axios from 'axios';

export class Belohnungschart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        series: [{
          name: '',
          data: [0]
        }, {
          name: '',
          data: [0]
        }, {
          name: '',
          data: [0]
        }, {
          name: '',
          data: [0]
        }, {
          name: '',
          data: [0]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            stackType: '100%'
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          stroke: {
            width: 1,
            colors: ['#fff']
          },
          xaxis: {
            categories: [],
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + "K"
              }
            }
          },
          fill: {
            opacity: 1
          
          },
          legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
          }
        }
      };
    }

    componentDidMount() {
      Axios.get("http://localhost:3001/api/getVerdienteBelohnungen")
      .then((response) => {
        const absolviert = [];
        const benötigt = [];
        const rest = [];
        const art = [];
        const challengeList = response.data;
        challengeList.map(item => {
          absolviert.push(item.absolviert);
          benötigt.push(item.anzahl);
          rest.push(item.anzahl-item.absolviert);
          art.push(item.art);
        });
        this.setState({
          series: [{
            name: 'Erreichte Stücke',
            data: absolviert
          }, {
            name: 'Fehlende Stücke',
            data: rest
          }]
        })
        this.setState({
          options: {
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              stackType: '100%'
            },
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            colors: ["#006400", "#8B0000"],
            stroke: {
              width: 1,
              colors: ['#fff']
            },
            xaxis: {
              categories: art,
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return val + " Stücke"
                }
              }
            },
            fill: {
              opacity: 1
            
            },
            legend: {
              position: 'top',
              horizontalAlign: 'center',
              offsetX: 40
            }
          }
        })
      });

    }
  

    render() {
      return (
      <div id="chart">
        <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
      </div>
      );
    }
  }
