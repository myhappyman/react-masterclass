import Router from "./routes/Router";
import { ReactQueryDevtools } from "react-query/devtools";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { defaultTheme, whiteTheme } from "./theme";
import { VscColorMode } from "react-icons/vsc";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "./atoms";

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  *{
    box-sizing: border-box;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ThemeBtn = styled.div`
    position: fixed;
    top: 40px;
    right: 40px;
    width: 40px;
    height: 40px;
    border-radius: 35px;
    .icon{
      transition: .3s linear;
      width: 100%;
      height: 100%;
    }
    &:hover{
      color: ${props => props.theme.accentColor}
    }
`;

function App() {
  
  const isDark = useRecoilValue(isDarkAtom); //atom의 value를 가져온다.
  const setIsDark = useSetRecoilState(isDarkAtom); //function을 가져와서 value를 바꿔준다.
  //useSetRecoilState는 recoil의 state값을 업데이트 할 수 있는 setter함수를 반환시켜줍니다.
  const toggleDarkAtom = () => setIsDark(prev => !prev);

  return (
    <>
      <ThemeProvider theme={ isDark ? defaultTheme : whiteTheme }>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
        <ThemeBtn onClick={toggleDarkAtom} >
          <VscColorMode className="icon" />
        </ThemeBtn>
      </ThemeProvider>
    </>
  );
}

export default App;
