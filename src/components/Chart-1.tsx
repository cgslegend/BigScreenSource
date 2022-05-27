import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/pxFunc';
import {createEchartsOptions} from '../shared/echartsCreateOptions';
import {Simulate} from "react-dom/test-utils";
import wheel = Simulate.wheel;

export const Chart1 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            xAxis: {show: false},
            yAxis: {show: false},
            legend: {show:false },
            toolbox: {
                show: false,
            },
            series: [
                {
                    startAngle: 20,
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [ px(40), px(200)],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 1
                    },
                    label: {
                        show: true, position: 'outside', textStyle: {color: 'white', fontSize: px(20)},
                        distanceToLabelLine: 0,
                        formatter(options) {
                            return options.name +'  ' + options.value * 100 + '%';
                        }
                    },
                    data: [
                        {value: 0.36, name: '刑事案件'},
                        {value: 0.20, name: '民事案件'},
                        {value: 0.18, name: '经济案件'},
                        {value: 0.24, name: '其他案件'},
                    ]
                }
            ]
        }));
    }, []);
    return (
        <div className="bordered histogram">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart">
            </div>
        </div>
    );
};