import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/echartsCreateOptions';
import {px} from '../shared/pxFunc';
import china from '../geo/china.json';
import {Improvement} from "./improvement";

export const Chart2 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        // @ts-ignore
        echarts.registerMap('CN', china);
        myChart.setOption(createEchartsOptions({
            xAxis: {show: false},
            yAxis: {show: false},
            series: [
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    label: {show: false, color: 'white'},
                    itemStyle: {
                        areaColor: '#19475D',
                        opacity: 0.7,
                        borderColor: 'aqua',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },

            ]
        }));
    }, []);

    return (
        <div className="bordered chinaMap">
            <div className="wrapper">
                <div ref={divRef} className="chart"/>
                <div className="notes">此地图仅显示了中国的部分区域</div>
            </div>
            <Improvement/>
        </div>
    );
};