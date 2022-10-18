import styled, { keyframes } from "styled-components";

/**
 * 1. 기본 styled-components 사용법
 * 호출명.태그명.``(벡틱 내부에 css정의)
 * 재사용성이 올라간다.
 */
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  padding: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

/**
 * 2. 또한 props를 통해 원하는 css부분만 유동적으로 처리가 가능하다.
 */
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

/**
 * 3. 위에서 정의한 속성을 상속 받는 방법
 * styled(상속받을 컴포넌트명)
 */
const Circle = styled(Box)`
  border-radius: 50px;
`;

/**
 * 4. 처리할 속성은 같지만 태그를 다르게 하고 싶다면,
 * 호출하는 컴포넌트 명 옆에 as를 통해 변경할 태그명으로 입력한다.
 * <Btn as="a" />   <--- button으로 정의한 컴포넌트지만 as때문에 a태그로 생성된다.
 */
const Btn = styled.button`
  border: none;
  background-color: green;
  color: tomato;
`;

/**
 * 5. 속성을 주는 방법
 * attrs() 안에 object형태로 처리할 속성 추가
 */
const Input = styled.input.attrs({ required: "true", maxLength: "5" })`
  background-color: red;
`;

/**
 * 6. 애니메이션 활용법
 * keyframes 컴포넌트를 호출하고 ``벡틱에 정의한다.
 * 이후 사용할 컴포넌트 animation쪽에 ${} js문법으로 집어넣고 설정하면 끝이다.
 */
const animations = keyframes`
from{
  color: blue;
}
to{
  color: yellow;
}
`;

const AnimationBox = styled.div`
  animation: ${animations} 1s linear infinite;
`;

/**
 * 7. Pseudo selectors
 * 해당 컴포넌트 하위에 생성되는 태그들에 공통적인 처리를 할 수 있다.
 * 태그들을 대상으로 하거나 컴포넌트를 대상으로 처리 할 수 있다.
 * 선택자를 통해 중복생성을 막고 하위에 존재하는 어떤 태그들에 대해 처리 할 수 있다.
 *
 */

const YellowText = styled.span`
  color: yellow;
`;

const BigBtn = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 20px;
  ${YellowText}:hover {
    font-size: 12px;
    font-size: 22px;
  }
`;

/**
 * 실제 구현부에선 뭘 뜻하는지 알아볼만한 컴포넌트명만 처리해서
 * stlye이 없이 가독성이 좋도록 만들어서 처리한다.
 * @returns
 */
function ExStyledComponents() {
  return (
    <Wrapper>
      <Column>
        <Box bgColor="tomato" />
        <Box bgColor="teal" />
        <Circle bgColor="blue" />
      </Column>

      <Column>
        <Btn>button</Btn>
        <br />
        <Btn as="a">a태그입니다</Btn>
      </Column>

      <Column>
        <Input />
        <Input />
        <Input />
        <Input />
      </Column>

      <Column>
        <AnimationBox>애니메이션!!!</AnimationBox>
      </Column>

      <Column>
        <BigBtn>button</BigBtn>
        <BigBtn>
          <YellowText>button</YellowText>
        </BigBtn>
        <YellowText>button</YellowText>
      </Column>
    </Wrapper>
  );
}

export default ExStyledComponents;
