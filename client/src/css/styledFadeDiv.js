import React from 'react';
import styled, { keyframes } from 'styled-components';
import Fade from 'react-reveal/Fade';
import makeCarousel from 'react-reveal/makeCarousel';
import withReveal from 'react-reveal/withReveal';

export const Fade4 = withReveal(
  styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `,
  <Fade left/>
);

// const fadeIn = keyframes`
//   from {
//     transform: scale(.25);
//     opacity: 0;
//   }
//   to {
//     transform: scale(1);
//     opacity: 1;
//   }
// `;
//
// const fadeOut = keyframes`
//   from {
//     transform: scale(1);
//     opacity: 0;
//   }
//   to {
//     transform: scale(.25);
//     opacity: 1;
//   }
// `;
//
// export const Fade2 = styled.div`
//   display: inline-block;
//   background: isVisible ? 'red' : 'blue'
// `
//
// export const Fade = styled.div`
//   display: inline-block;
//   visibility: ${props => props.out ? 'hidden' : 'visible'};
//   animation: ${props => props.out ? fadeOut : fadeIn} 2s linear;
//   transition: visibility 2s linear;
// `;

// function App() {
//   return (
//     <div>
//       <Fade>&lt;💅test&gt;</Fade>
//     </div>
//   );
// }
//
// export default App;
