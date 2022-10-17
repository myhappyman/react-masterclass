import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

/**
 * button태그의 style만 승계받고,
 * 태그 자체인 button은 받고 싶지 않을때는 어떻게할까?
 * 새롭게 정의하는게 아니라 컴포넌트를 생성하는 부분에서 as라는
 * props를 사용하고 원하는 태그명을 입력하면 태그명이 변경되어 나온다.
 */
const Btn = styled.button`
  color: #fff;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

/**
 * 또한 styled.태그명.다음으로attrs라는 속성을 줄 수 있는데,
 * 이곳에 object형태로 넣고싶은 속성값들을 넣어주면 해당 속성이
 * 추가된 상태로 컴포넌트가 생성된다.
 */
const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      {/* <Btn>LogIn</Btn>
      <Btn as="a" href="/">
        새로고침
      </Btn> */}
      <Input maxLength="5" />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
