import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';

// match semantic-ui's breakpoints
const breaks = {
  mobile: '320px',
  tablet: '768px',
  computer: '992px',
  largeMonitor: '1280px',
  widescreen: '1920px',
}

// ------------ HeroHeader ---------------
export const HeroHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0;
  background: url(${ props => props.bgImage}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 460px;
  height: ${ props => props.height || '460px' };
  width: 100%;
  padding: 0;
  color: '#FFF';

  @media (max-width: ${breaks.computer}) {
    height: 440px;
  }
  @media (max-width: ${breaks.tablet}) {
    height: 400px;
  }
`
export const HhInnerContainer = styled.div`
  display: flex;
  align-items: left;
  flex-direction: row;
  height: 420px;
  width: 100%;
  margin: 0;
  padding: 0;
`
export const HhImageContainer = styled.div`
  ${'' /* border: 2px solid orange; */}
  background: url(${ props => props.bgImage}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  height: 340px;
  width: 400px;
  margin: 0;
  padding: 1em 0 0;
  position: relative;
  top: 50px;

  @media only screen and (max-width: ${breaks.computer}) {
    width: 360px;
  }
  @media only screen and (max-width: ${breaks.tablet}) {
    ${'' /* width: 300px; */}
    display:none;
  }
`
export const HhTextContainer = styled.div`
  ${'' /* border: 2px solid orange; */}
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 50%;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: ${breaks.tablet}) {
    width: 100%;
  }
`
export const HhH1 = styled.h1`
  display: flex;
  color: white;
  font-family: 'Open Sans', sans-serif;
  text-transform: none;
  font-weight: 300;
  font-size: 50px;
  margin: 0;
  padding: 0;

  @media (max-width: ${breaks.tablet}) {
    font-size: 44px;
  }
`
export const HhH2 = styled.h2`
  display: flex;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 35px;
  margin: 0;
  padding: 0;

  @media (max-width: ${breaks.tablet}) {
    font-size: 30px;
  }
`
// export const HhH3 = styled.h2`
//   display: flex;
//   color: white;
//   font-family: 'Open Sans', sans-serif;
//   font-weight: 300;
//   font-size: 30px;
//   line-height: 30px;
//   margin: 0;
//   padding: 0;
//
//   @media (max-width: ${breaks.tablet}) {
//     font-size: 30px;
//   }
// `
export const HhH4 = styled.h4`
  display: flex;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 20px;
  margin: 0;
  padding: 0;

  @media (max-width: ${breaks.tablet}) {
    font-size: 20px;
  }
`
export const HhH3 = styled.h3`
  display: flex;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 30px;
  margin: 0;
  padding: 0;

  @media (max-width: ${breaks.tablet}) {
    font-size: 30px;
  }
`
// --------- Img2 -----------
export const Img2 = styled.div`
  ${'' /* background: url(${ props => props.bgImage }) no-repeat center center; */}
  background-image: url(${ props => props.src});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  position: relative;
  width: ${ props => props.width || '100%' };
  min-height: ${ props => props.minHeight || '200px' };
  top: ${ props => props.top || '0' };
  margin-top: ${ props => props.marginTop || '0' };
`

// --------- Main Divs -----------
export const FullWidthDiv = styled.div`
  background: ${props => props.topColor && props.bottomColor ?
    `linear-gradient(${props.topColor}, ${props.bottomColor})` :
    'linear-gradient(white, black)'
  };
  padding-top: ${ props => props.padTopAndBottom || '60px' };
  padding-bottom: ${ props => props.padTopAndBottom || '60px' };
  padding-left: ${ props => props.padLeftAndRight || '0' };
  padding-right: ${ props => props.padLeftAndRight || '0' };
  width: 100%;
  overflow: hidden;
  height: ${ props => props.height || 'auto' };

  @media (max-width: ${breaks.tablet}) {
    height: ${ props => (Math.round(props.height * .9 )) || 'auto' };
  }
`
export const FullWidthBgDiv = styled.div`
  position: relative;
  ${'' /* top: 0; */}
  background: url(${ props => props.bgImage }) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: ${ props => props.height || 'auto' };
  min-height: ${ props => props.minHeight || '250px' };
  width: 100%;
  padding: 60px 0;
  ${'' /* margin: 0; */}
  color: '#FFF';
  overflow: hidden;
`
export const HoverCenterDivWrap = styled.div`
  left: 50%;
  top: ${ props => props.top || '0' };
  height: ${ props => props.height || '100%'};
  width: 100%;
  position: absolute;
  ${'' /* border: 1px solid blue; */}
`
export const HoverCenterDiv = styled.div`
  background-image: url(${ props => props.bgImage}) !important;
  background-repeat: no-repeat;
  background-position: center center;
  ${'' /* background-size: auto; */}
  position: relative;
  top: ${ props => props.top || '0' };
  left: -50%;
  display: inline-block;
  width: 100%;
  height: ${ props => props.height || '300px'};
  min-height: 300px;
  ${'' /* border: 1px solid orange; */}
`
{/* <div class="container">
    <div class="wrapper">
        <img src="http://placekitten.com/600/250" />
    </div>
    <div class="bottom" contentEditable="true">
</div> */}

// .container { display: table; width: 100%; height: 100%; }
// .wrapper { display:table-row; height:0px; }
// .bottom { display:table-cell; height:100% }

// bordereddiv ~= container ^^
export const BorderedDiv = styled.div`
  ${'' /* position: relative; */}
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  box-sizing: inherit;
  ${'' /* display: table-cell; */}

  border: 1px solid #f8da1d !important;
  border-radius: 0 !important;
  text-align: center !important;
  vertical-align: top !important;
  background-color: white;
  width: 100%;
  height: 100%;
  ${'' /* max-height: 100%; */}
  padding: 8%;
  min-height: 490px;

  @media (min-width: ${breaks.largeMonitor}) {
    min-height: 440px;
  }
  ${'' /* between these two ^v^v we have default styling */}
  @media (max-width: ${breaks.computer}) {
    min-height: 590px;
  }
  @media (max-width: ${breaks.tablet}) {
    min-height: 200px;
    height: auto;
    padding: 4% 8%;
  }
`
// BorderedDivInnerWrapper ~= wrapper ^^
export const BorderedDivInnerWrapper = styled.div`
  ${'' /* border: 1px solid orange; */}
  ${'' /* position: relative; */}
  ${'' /* display: flex; */}
  flex: 1;
  flex-grow: 1;
  box-sizing: inherit;
  ${'' /* flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  align-content: stretch; */}
  ${'' /* flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto; */}

  ${'' /* justify-content: center; */}
  ${'' /* justify-content: flex-start; */}
  width: 100%;
  height: 100%;
`
export const BorderedDivHead = styled.div`
  ${'' /* border: 1px solid blue; */}
  display: flex;
  justify-content: center;
  align-items: center;
  ${'' /* width: 100% !important; */}
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  color: #4c4c4c;
  padding: 15px 0 15px;
  ${'' /* flex: 1; */}
  width: 100%;
  ${'' /* height: 100%; */}
`
export const BorderedDivBody = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 14px;
  text-align: center;
  color: #4c4c4c;
  ${'' /* flex: 1; */}
  width: 100%;
  ${'' /* height: 100%; */}
`

// ------------ Dividers -----------
export const DividerGrayGrad = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align:center
  ${'' /* margin: 0;
  padding: 0; */}
  width: 100%;
  height: 80px;
  background: linear-gradient(to right, #6d6d6d, #908f8f, #6d6d6d);
  ${'' /* position: relative; */}
  top: 0;
`
export const DividerTransparent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align:center
  ${'' /* margin: 0;
  padding: 0; */}
  width: 100%;
  height: 80px;
  background: transparent;
  ${'' /* position: relative; */}
  top: 0;
`
export const VerticalSpacer = styled.div`
  width: 100%;
  background: transparent;
  height: ${ props => props.height || '10px'} !important;
  min-height: ${ props => props.height || '10px'} !important;
`

// ------------ Headers ------------
export const OpenH3 = styled.h3`
  height: auto;
  color: ${ props => props.color || '#4c4c4c' }
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 28px;
  text-align: ${ props => props.textAlign || 'center' };
  text-justify: ${ props => props.textJustify || 'auto '};
  margin-bottom: 30px;
`
export const OpenH4 = styled.h4`
  height: auto;
  color: ${ props => props.color || '#4c4c4c' }
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 20px;
  text-align: ${ props => props.textAlign || 'center' };
  text-justify: ${ props => props.textJustify || 'auto '};
  margin-bottom: 20px;
`
export const OpenH5 = styled.h5`
  height: auto;
  color: ${ props => props.color || '#4c4c4c' };
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 16px;
  text-align: ${ props => props.textAlign || 'center' };
  text-justify: ${ props => props.textJustify || 'auto '};
  margin-bottom: 18px;
`
export const HrOrange = styled.hr`
  border-top: 1px solid #fded0d;
  border-bottom: 1px solid #fdaa1a;
  margin-top: -17px;
  margin-bottom: 10px;
`
export const HrWhite = styled.hr`
  color: #fff;
  border-style: inset;
  border-width: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
`

// ------------ NavBar ---------------
export const NavSpacer = styled.div`
  //height: 100px;
  width: 100%;
  background:rgba(255, 0, 255, 0.0);
`
// export const NavStyled = styled.div`
//   display: flex;
//   position: fixed;
//   top: 0;
//   margin-top: 0;
//   left: 0;
//   z-index: 10000;
//   width: 100%;
//   min-height: 100px;
//   padding: 10px 10%;
//   text-align: right;
//   border: none;
//   background-color: #FFFFFF;
//   opacity: ${ props => props.navOpacity };
//   margin-bottom: 100px;
// `
// export const NavLogo = styled.div`
//   width: ${ props => props.logoWidth};
//   min-width: ${ props => props.logoWidth};
//   background-image: url(${ props => props.logoImage}) !important;
//   background-repeat: no-repeat;
//   background-size: contain;
//   padding: 0;
//   margin: 0;
//   float:left;
// `
export const NavLinks = styled.div`
  width: 100%;
  min-height: 34px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  flex-wrap: wrap;
  opacity: ${ props => props.navOpacity};
  margin-top: ${ props => props.marginTop || 0 };
  border: none;

  @media (max-width: ${breaks.tablet}) {
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 50px;
  }
`
export const LinkMm = styled.div`
  ${'' /* height: 1em; */}
  ${'' /* color: white; */}
  font-size: 0.9em;
  padding: 0;
  display: flex;
  ${'' /* float: right; */}
  align-self: center flex-end;

  &:not(:first-child) {
    padding-left: 2.2em;
  }

  &:hover {
    color: #1fccdc;
  }

  @media (max-width: ${breaks.tablet}) {
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.5em 0 0.5em 2.2em;
  }



`
export const FlexColContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* height: 100vh; */}
`
export const FlexContent = styled.div`
  flex: 1 0 auto;
  border-top: solid 1px;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`
export const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${'' /* width: 100%; */}
  ${'' /* border: 1px solid orange; */}
`
export const OpenP = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 1em;
  color: ${ props => props.color || '#4c4c4c' };
  text-align: ${ props => props.textAlign || 'center' };
  text-justify: ${ props => props.textAlign === 'justify' ? 'inter-word' : 'auto'};
  text-decoration: ${ props => props.deco || 'none' };
  width: 100%;
  padding-bottom: ${ props => props.paddingBottom || '1em' };
  padding-left: ${ props => props.paddingLeft || '0' };
`
export const OpenPSmall = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: .8em;
  color: ${ props => props.color || '#4c4c4c' };
  text-align: ${ props => props.textAlign || 'center' };
  text-justify: ${ props => props.textJustify || 'auto'};
  text-decoration: ${ props => props.deco || 'none' };
  width: 100%;
  padding-bottom: 1em;
`
export const OpenUl = styled.ol`
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 1em;
  color: ${ props => props.color || '#4c4c4c' };
  text-align: ${ props => props.textAlign || 'left' };
  text-decoration: ${ props => props.deco || 'none' };
  width: 100%;
  padding-left: 1em;
  padding-bottom: 1em;
`
export const OpenLi = styled.li`
  list-style-type: disc;
  list-style-position: outside;
  padding-bottom:1em;
`
export const OpenSpanGreen = styled.span`
  color: #68c900 !important;
  display: inline;
`
export const OpenSpanRed = styled.span`
  color: #d40e00 !important;
  display: inline;
`
export const OpenSpanWhite = styled.span`
  color: #fff !important;
  display: inline;
`
export const USGButton = styled.button`
  border: none;
  color: white;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid #80cc2f;

  &:hover {
    background-color: #80cc2f;
    color: white;
  }
`

// ------------ Footer ---------------
export const FooterStyled = styled.div`
  flex-shrink: 0;
`

// ------------ defunct ---------------
export const HeroHeaderTextContainerLeft = styled.div`
  z-index: 2;
  position: relative;

  /* Internet Explorer 10 */
  display:-ms-flexbox;
  -ms-flex-pack:start;
  -ms-flex-align:start;

  /* Firefox */
  display:-moz-box;
  -moz-box-pack:start;
  -moz-box-align:start;

  /* Safari, Opera, and Chrome */
  display:-webkit-box;
  -webkit-box-pack:start;
  -webkit-box-align:start;

  /* W3C */
  display:box;
  box-pack:start;
  box-align:start;

  display: block;
  min-height: 10em;
  overflow: hidden;
  margin: 0;
  padding: 5% 0 0 6%;
  text-align:left;

  :after {
    content: ' ';
    clear: both;
    display: table;
  }

  @media (max-width: 50em) {
    padding: 7% 0 0 7%;
  }
`

export const HeroHeaderTextContainerRight = styled.div`
  z-index: 2;
  position: relative;

  /* Internet Explorer 10 */
  display:-ms-flexbox;
  -ms-flex-pack:end;
  -ms-flex-align:end;

  /* Firefox */
  display:-moz-box;
  -moz-box-pack:end;
  -moz-box-align:end;

  /* Safari, Opera, and Chrome */
  display:-webkit-box;
  -webkit-box-pack:end;
  -webkit-box-align:end;

  /* W3C */
  display:box;
  box-pack:end;
  box-align:end;

  min-height: 10em;
  overflow: hidden;
  margin: 0;
  padding: 0 6% 2% 0;
  text-align: right;
  vertical-align: bottom !important;

  :after {
    content: ' ';
    clear: both;
    display: table;
  }

  @media (max-width: 50em) {
    padding: 0 7% 7% 0;
  }
`
export const HeroHeaderH1LowerRight = styled.h1`
  position: relative;
  color: white;
  display: inline-block;
  font-family: sans-serif;
  font-weight: 100;
  font-size: 3em;
  text-align: right !important;
  padding-right: 6% !important;
  vertical-align: bottom !important;

  ${'' /* @media (max-width: 50em) {
    font-size: 2em;
  } */}
`
export const HeroHeaderH1UpperLeft = styled.h1`
  position: relative;
  color: white;
  display: block;
  font-family: sans-serif;
  font-weight: 100;
  font-size: 3em;
  text-align: left !important;
  padding-left: 6%;
  padding-top: 5%;

  ${'' /* @media (max-width: 50em) {
    font-size: 2em;
  } */}
`
