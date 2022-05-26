import React from 'react';
import './home.scss';
import {Chart1} from "../components/Chart-1";
import {Chart3} from "../components/Chart-3";
import {Chart2} from "../components/Chart-2";
import {Time} from "../components/time";
import {Weather} from "../components/weather";

export const Home = () => {
    const year = new Date().getFullYear()

  return (
    <div className='home'>
        <header className='bordered'>
            <Time/>
            <div className='title'>国家公安合成作战平台</div>
            <Weather/>
        </header>
        <main>
            <section className='section1 bordered'>
                <Chart1/>
            </section>
            <section className='section2 bordered'>
                <Chart2/>

            </section>
            <section className='section3 bordered'>
                <Chart3/>
            </section>
        </main>
        <footer>
            LinYicheng 2020-{year}
        </footer>
    </div>
  );
};
