import React, {Component} from 'react';
import { findDOMNode } from 'react-dom';
// import styled from "styled-components";
import cx from 'classnames';
import {Easer} from 'functional-easing';
import {Track, TrackedDiv, TrackDocument} from 'react-track';
import {tween} from 'react-imation';
import {topTop,
        topBottom,
        centerCenter,
        topCenter,
        bottomBottom,
        bottomTop,
        getDocumentRect,
        getDocumentElement,
        calculateScrollY} from 'react-track/tracking-formulas';
import {rgb, rgba, scale, rotate, turn, px, percent,
        translate3d, translateX} from 'react-imation/tween-value-factories';

import '../css/fonts.css';
import '../css/react-track.css';

const easeOutBounce = new Easer().using('out-bounce');

class ReactTrackDemo extends Component {
  componentDidMount() {
    // initialize svg
    var node = findDOMNode(this.sparkPath);
    var length = ~~ node.getTotalLength();
    this.offsetTarget = length;
    node.style.strokeDasharray = length + ' ' + length; // i'm cheating
  }

  render() {
    return (
      <TrackDocument
        formulas={[getDocumentElement, getDocumentRect, calculateScrollY,
                   topTop, topBottom, topCenter, centerCenter, bottomBottom,
                   bottomTop]}
      >
        {(documentElement, documentRect, scrollY, topTop,
        topBottom, topCenter, centerCenter, bottomBottom, bottomTop) =>
        <div style={{minHeight:'5000px'}}>

          {/* <a href="https://github.com/gilbox/react-track">
            <img
              style={{position: 'absolute', top: 100, right: 0, border: 0}}
              src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"
              alt="Fork me on GitHub"
            />
          </a> */}

          <Track style={styles.hero} formulas={[topTop]}>
          { (Div, posTopTop) =>
            <Div>
              <a href="https://github.com/gilbox/react-track">
                <h1
                  style={{
                    ...tween(
                      scrollY,
                      [
                        [posTopTop, { opacity: 1, transform: translate3d(0,150,0) }],
                        [posTopTop+200, { opacity: 0, transform: translate3d(0,100,0) }]
                      ]
                    ),
                    ...styles.aich1,
                    ...styles.aich,
                  }}
                >
                  <span>
                    <svg width="296px" height="228px" viewBox="0 0 296 228" version="1.1">
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <path
                          ref={r => this.sparkPath = r}
                          style={{strokeDashoffset: tween(scrollY, [
                            [posTopTop, 0],
                            [posTopTop+150, this.offsetTarget]
                          ])}}

                          d="M20.2,56.3C31.1,55.6,38.7,44.7,40.6,34C26.1,72.7,22.1,115.3,29.1,156c1.3,7.3,2.9,14.7,7.2,20.8s11.6,10.4,18.9,9.1
		c6.3-1.1,11.1-6.1,15-11.1c13.8-17.8,21.1-40,24.3-62.2s2.7-44.9,2.1-67.4c-4.9,20.4-9.8,41-10.9,61.9s1.8,42.6,11.8,61
		c0.7,1.3,1.5,2.7,2.8,3.5c2.4,1.6,5.7,0.6,8.3-0.6c13.1-6.2,23-18,29.1-31.2c6.1-13.2,8.8-27.6,10.5-42c2.4-20.5,3-41.3,1.6-61.9
		c-8.7,10.3-10.4,25.9-4.1,37.9c3,5.8,7.7,10.6,11.9,15.6c12.9,15.2,22.8,34.4,21.1,54.3s-18.1,39.2-38,38.6
		c-10.3-0.3-21-7.1-22.4-17.3c5.2,12.5,22.1,16.7,34.6,11.6c12.5-5,21.2-16.7,27.4-28.6c16.7-32.3,20.3-69.5,23.5-105.7
		c-1.3-3.4-6.8-3.5-9-0.6c-2.2,2.9-1.4,7.3,0.9,10.1c2.3,2.8,5.7,4.5,9.1,5.8c19.7,7.9,42.2,9.8,62.4,3.5c5.5-1.7,12-6.6,9.7-11.9
		c-1.1-2.4-3.7-3.8-6.4-4.1c-10.2-1.1-16.7,10.5-19.6,20.4c-5.2,17.9-8,36.5-8.1,55.1c-0.1,9.2,0.5,18.6-1.6,27.6
		c-3.3,14.3-13.6,26.8-27,32.9c-6.6,3-14.2,4.4-21.2,2.6s-13.3-7.5-14.4-14.7c22.6,13.7,52.3,14.9,75.9,2.9" id="Path-13" stroke="#382513" strokeWidth="3">
                        </path>
                      </g>
                    </svg>
                  </span>
                </h1>
              </a>

              <div
                style={{
                  ...tween(
                    scrollY,
                    [
                      [posTopTop, { opacity: 1, transform: translate3d(0,0,0) }],
                      [posTopTop+200, {opacity: 0, transform: translate3d(0,-150,0) }]
                    ]
                  ),
                  ...styles.downArrow,
                }}
              >
                v
              </div>
            </Div>
          }</Track>

          {/* fade */}
          {/* <button style={{...styles.panel.button,...styles.panel.backButton}}>Back</button> */}
          <Track component="h2" formulas={[topBottom, centerCenter]}>
            {(H2,posTopBottom,posCenterCenter) =>
              <H2
                style={{
                  ...tween(
                    scrollY,
                    [
                      [posTopBottom, { opacity: 0 }],
                      [posCenterCenter, { opacity: 1 }]
                    ]
                  ),
                  ...styles.aich,
                  ...styles.aich2,
                }}
              >
                fade
              </H2>
            }
          </Track>

          {/* move */}
          <Track component="h2" formulas={[topBottom, centerCenter]}>
            {(H2,posTopBottom,posCenterCenter) =>
              <H2
                style={{
                  ...tween(
                    scrollY,
                    [
                      [posTopBottom, { marginLeft: px(-500), opacity: 0 }],
                      [posCenterCenter, { marginLeft: px(0), opacity: 1 }]
                    ], easeOutBounce
                  ),
                  ...styles.aich,
                  ...styles.aich2,
                }}
              >
                move
              </H2>
            }
          </Track>

          {/* spin */}
          <TrackedDiv formulas={[topBottom, centerCenter]}>
          {(posTopBottom,posCenterCenter) =>
            <h2
              style={{
                ...tween(scrollY,
                  [
                    [posTopBottom, { transform: rotate(0) }],
                    [posCenterCenter, { transform: rotate(360) }]
                  ]
                ),
                ...styles.aich,
                ...styles.aich2,
              }}
            >
              spin
            </h2>
          }</TrackedDiv>

          {/* scale */}
          <TrackedDiv formulas={[topCenter]}>
          {(posTopCenter) =>
            <h2
              proxy="scale-proxy"
              style={{
                ...tween(
                  scrollY,
                  [
                    [posTopCenter-201, { transform: scale(0.01), opacity: 0}],
                    [posTopCenter-200, { transform: scale(0.01), opacity: 1 }],
                    [posTopCenter+70, { transform: scale(1), opacity: 1 }]
                  ],
                  easeOutBounce
                ),
                ...styles.aich,
                ...styles.aich2,
              }}
            >
              scale
            </h2>
          }</TrackedDiv>

          {/* pin, reveal, slide, color, unpin */}
          <TrackedDiv style={styles.pinCont} formulas={[topTop, bottomBottom]}>
          {(posTopTop, posBottomBottom) =>
            <section
              className={cx("react-track-pin",{
                'react-track-pin-pin':scrollY > posTopTop,
                'react-track-pin-unpin':scrollY > posBottomBottom})}>

              {/* <h3
                style={{
                  ...tween(
                    scrollY,
                    [
                      [posTopTop, { top: percent(0), marginTop: px(0) }],
                      [posTopTop+50, { top: percent(50), marginTop: px(-60) }]
                    ],
                  ),
                  ...styles.aich,
                  ...styles.aich3,
                  ...styles.pinText,
                }}
              > */}
              <h3
                className="react-track-pin-txt"
                style={{
                  ...tween(
                    scrollY,
                    [
                      [posTopTop, { top: percent(0), marginTop: px(0) }],
                      [posTopTop+50, { top: percent(50), marginTop: px(-60) }]
                    ],
                  ),
                  ...styles.aich,
                  ...styles.aich3,
                }}
              >
                pin
              </h3>

              <div
                className="reveal"
                style={tween(scrollY, [
                  [posTopTop+100, {width: percent(0), backgroundColor: rgba(92, 131, 47, 1)}],
                  [posTopTop+250, {width: percent(100), backgroundColor: rgba(56, 37, 19, 1)}]
                ])}
              >
                <h3
                  className="reveal-txt"
                  style = {{
                    ...styles.aich,
                    ...styles.aich3,
                  }}
                >
                  reveal
                </h3>
              </div>

              <div
                className={cx("slide",{hide:scrollY < posTopTop+250})}
                style={tween(scrollY, [
                  [posTopTop+250, { bottom: percent(100), backgroundColor: rgb(92, 131, 47) }],
                  [posTopTop+400, { bottom: percent(0), backgroundColor: rgb(40, 73, 7) }],
                  [posTopTop+450, { bottom: percent(0), backgroundColor: rgb(0, 0, 170) }],
                  [posTopTop+500, { bottom: percent(0), backgroundColor: rgb(170, 0, 0) }],
                  [posTopTop+550, { bottom: percent(0), backgroundColor: rgb(92, 131, 47) }]
                ])}
              >
                {/* when we hit the appropriate scroll position, change the
                      text to 'slide' or 'color' depending on the position */}
                <h3
                  className="slide-txt"
                  style={{
                    ...styles.aich,
                    ...styles.aich3,
                  }}
                >
                  {scrollY > posTopTop+400 ? 'color' : 'slide'}
                </h3>

                <h3
                  className={cx("unpin-txt",{hide:scrollY < posTopTop+600})}
                  style={{
                    ...tween(
                      scrollY,
                      [
                        [posTopTop+600, { top: percent(100) }],
                        [posBottomBottom, { top: percent(50) }]
                      ]
                    ),
                    ...styles.aich,
                    ...styles.aich3,
                  }}
                >
                  unpin
                </h3>
              </div>
            </section>
          }</TrackedDiv>

          <div className="spacer50"></div>

          {/* parallax */}

          <a href="https://www.flickr.com/photos/rafagarcia_/15262287738/in/pool-83823859@N00/">
            <Track component="div" formulas={[topBottom, bottomTop]}>
            {(Div, posTopBottom, posBottomTop) =>
              <Div className="parallax-cont">
                <div className="parallax-shadow" />

                <div
                  className="parallax-img"
                  style={tween(scrollY, [
                    [posTopBottom, {transform: translate3d(0,0,0)}],
                    [posBottomTop, {transform: translate3d(0,-80,0)}]
                  ])}>
                </div>

                {/* <h3
                  className="parallax-txt fade2"
                  style={tween(scrollY, [
                    [posTopBottom, { transform: combine(scale(0.8), translate3d(0,120,0)) }],
                    [posBottomTop, { transform: combine(scale(0.8), translate3d(0,-120,0)) }]
                  ])}>parallax</h3>

                <h3
                  className="parallax-txt fade1"
                  style={tween(scrollY, [
                    [posTopBottom, {transform: combine(scale(0.9), translate3d(0,160,0)) }],
                    [posBottomTop, {transform: combine(scale(0.9), translate3d(0,-160,0)) }]
                  ])}>parallax</h3> */}

                <h3
                  className="parallax-txt"
                  style={{
                    ...tween(
                      scrollY,
                      [
                        [posTopBottom, {transform: translate3d(0,200,0)}],
                        [posBottomTop, {transform: translate3d(0,-200,0)}]
                      ]
                    ),
                    ...styles.aich,
                    ...styles.aich3,
                  }}
                >
                  parallax
                </h3>
              </Div>
            }</Track>
          </a>
          <div className="spacer10"></div>
        </div>
      }</TrackDocument>
    )
  }
}

const styles = {
  hero: {
    position: 'relative',
    height: '100vh',
  },
  downArrow: {
    position: 'absolute',
    bottom: '100px',
    left: '50%',
    marginLeft: '-22px',
    fontSize: '100px',
    color: '#7ea54e',
  },
  pinText: {
    position: 'absolute',
    top: 0,
    margin: 0,
    textAlign: 'center',
    width: '100%',
  },
  pinCont: {
    position: 'relative',
    height: '1400px',
  },
  reveal: {
    position: 'absolute',
    display: 'block',
    height: '100%',
    width: '100%',
    background: 'blue',
    zIndex: 5,
    overflow: 'hidden',
  },
  aich: {
    fontFamily: 'Expletus Sans',
    fontWeight: 700,
  },
  aich1: {
    fontSize: '76px',
    fontFamily: 'Expletus Sans',
    margin: 0,
    padding: '50px 0 0 0',
    pointerEvents: 'none',
    textAlign: 'center',
  },
  aich2: {
    fontSize: '76px',
    display: 'block',
    textAlign: 'center',
    marginBottom: '150px',
  },
  aich3: {
    fontSize: '88px',
  }
}

// const Aich2Fade = styled.span`
//   fontSize: 76px;
//   fontweight: 100;
//   fontFamily: 'Expletus Sans', cursive;
//   display: block;
//   textAlign: center ;
//   marginBottom: 150px;
//   tween(scrollY, [
//     [posTopBottom, { opacity: 0 }],
//     [posCenterCenter, { opacity: 1 }]
//   ]);
// `;

export default ReactTrackDemo;
// ReactDOM.render(<ReactTrackDemo/>, document.getElementById('example'));
