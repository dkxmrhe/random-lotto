import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Lotto from './components/lotto';
import NumAnal from './components/numAnal';
import YearLotto from './components/yearLotto';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <div className='logo'>
              <Link to="/">
                메인페이지
              </Link>
            </div>
            <div className='menu'>
              <div className='menuBar'>
                <Link to="/">
                  <div>로또 추첨번호</div>
                </Link>
                <Link to="/numanal">
                  <div>번호별 확률</div>
                </Link>
                <Link to="/yearlotto">
                  <div>연금복권 추첨번호</div>
                </Link>
              </div>
            </div>
          </header>
          <section>
            <div className='left'>
              왼쪽광고
            </div>
            <div className='center'>
              <div className='topCenter'>
                윗
              </div>
              <div className='mainCenter'>
                <Routes>
                  <Route path="/" element={<Lotto/>} />
                  <Route path="/numanal" element={<NumAnal/>} />
                  <Route path="/yearlotto" element={<YearLotto/>} />
                </Routes>
              </div>
              <div className='bottomCenter'>
                아랫
              </div>
            </div>
            <div className='right'>
              오른쪽 광고
            </div>
          </section>
      </Router>
    );
  } 
}