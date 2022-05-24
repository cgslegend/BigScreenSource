import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/pxFunc';
import {createEchartsOptions} from '../shared/echartsCreateOptions';

export const Chart1 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        console.log(divRef.current)
        myChart.setOption(createEchartsOptions({

            polar: {
                radius: [30, '80%']
            },
            angleAxis: {
                max: 4,
                startAngle: 75
            },
            radiusAxis: {
                type: 'category',
                data: ['a', 'b', 'c', 'd']
            },
            tooltip: {},
            series: {
                type: 'bar',
                data: [2, 1.2, 2.4, 3.6],
                coordinateSystem: 'polar',
                label: {
                    show: true,
                    position: 'middle', // or 'start', 'insideStart', 'end', 'insideEnd'
                    formatter: '{b}: {c}'
                }
            }
        }));
    }, []);
    console.log(divRef.current);
    return (
        <div className="bordered histogram">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart">

            </div>
        </div>
    );
};