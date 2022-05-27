import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/pxFunc';
import {createEchartsOptions} from '../shared/echartsCreateOptions';

export const Chart3 = () => {
    const divRef = useRef(null);
    useEffect(() => {

        setInterval(()=>{
            const newData = [
                Math.random()*0.1+0.1,
                Math.random()*0.1+0.1,
                Math.random()*0.1+0.1,
                Math.random()*0.1+0.1,
                Math.random()*0.1+0.1,
                Math.random()*0.1+0.1,
                Math.random()*0.1+0.1,
                Math.random()*0.1+0.1,
                Math.random()*0.1+0.1,
                Math.random()*0.1+0.1,
                Math.random()*0.1+0.1,
                Math.random()*0.1+0.1,
                Math.random()*0.1+0.1]
            x(newData)
        },1000)
        var myChart = echarts.init(divRef.current);
        const x = (newData) => {
            myChart.setOption(createEchartsOptions({
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
                    splitLine: {show: true, lineStyle: {color: '#073E78'}},
                    axisTick: {show: false},
                    axisLine: {show: false},
                },
                yAxis: {
                    type: 'value',
                    splitLine: {lineStyle: {color: '#073E78'}},
                    axisLabel: {
                        formatter(val) {
                            return val * 100 + '%';
                        }
                    }
                },
                series: [{
                    name: '故意伤人',
                    type: 'line',
                    /*data: [
                        0.15, 0.13, 0.11,
                        0.13, 0.14, 0.15,
                        0.16, 0.18, 0.21,
                        0.19, 0.17, 0.16,
                        0.15
                    ],*/
                    data: newData,
                    symbol: 'circle',
                    symbolSize: px(12),
                    lineStyle: {width: px(2)},
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#414a9f'
                        }, {
                            offset: 1,
                            color: '#1b1d52'
                        }]),
                    }
                }]
            }));
        }
    }, []);

    return (
        <div className="bordered histogram">
            <h2>案发时段分析</h2>
            <div ref={divRef} className="chart">

            </div>
        </div>
    );
};