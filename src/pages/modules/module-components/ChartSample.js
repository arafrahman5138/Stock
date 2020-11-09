import React from 'react';
import { Line } from 'react-chartjs-2';
import './ChartSample.css';

const state = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Stock',
            lineTension: 0.5,
            backgroundColor: '#7ED2EF',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56],
            fill: true,
            lineTension: 0
        }
    ]
}

export default class ChartSample extends React.Component {
    render() {
        return (
            <div className="testingagain">
                <Line className="testing"
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Stock price',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        },
                        layout: {
                            padding: {
                                top: 400,
                                bottom: 100,
                                right: 15,
                                left: 40
                            }
                        }

                    }}
                />
            </div>
        );
    }
}