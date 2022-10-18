기초 리액트에서 배운 문법들을 활용하여 넷플릭스 프로젝트를 진행한다.
섹션별로 진행이되며, 점진적으로 프로젝트가 커지고 새로운것을 도입하여 프로젝트를 완성할 계획이다.

1. styled components
   styled components 가 어째서 React.js의 스타일 적용에 최고인지 알아본다.
   어떻게 생산성에 도움이 되는지 알아볼 것이다.
   ex) 다크모드, 라이트모드 같은걸 아주 쉽게 적용할 수 있도록 도와준다.

   1-1. npm i styled-components
   styled-components를 설치하는 명령어.

   1-2. styled를 사용해보기.
   styled를 사용하고 원하는 태그를 선택한다.
   이후 스타일을 적용을 위해 백틱(``)을 사용한다. (',"는 안됨!)
   백틱안에는 css를 적는다.
   css까지 정의를 했으면 해당 컴포넌트를 일반적으로 만들던 div와같은 태그 대신에 컴포넌트명으로 입력한다.

   1-3. styled component는 class명을 임의로 생성하고 정의한 css코드를 어딘가에 담아둔다.

   1-4. 생성한 컴포넌트를 변경가능하게 처리해보기!
   모든 css는 똑같고 background-color만 다른 컴포넌트라면?
   여러개의 이름이 다른 컴포넌트를 생성해서 각각 입력해야할까?
   10개, 20개, 100개가 넘어간다면 굉장히 비효율적일것이다.
   공통부분은 백틱부분에 css를 처리하고 변경이 필요한 부분은 props의 기능을 활용하여 props명을 설정해서 값을 넘기고 백틱안에서 ${}를 통해 전달받은 값을 넣어준다.

   props를 통해 공통처리부분은 그대로 쓰고 변경될 부분만 입력하여 바꿀 수 있도록 입력하였다.
   이제 상속과 비슷한 개념으로 Box와 똑같은 속성들을 사용하는데 radius만 필요하다면 styled(컴포넌트명)``으로 정의한다.
   이렇게 되면 컴포넌트명의 모든 속성을 가져오고 합친다는 뜻이다.

   1-5. styled component의 유용한 트릭
   button태그의 style만 승계받고, 태그 자체인 button은 받고 싶지 을때는 어떻게할까? 새롭게 정의하는게 아니라 컴포넌트를 생성하는 부분에서 as라는 props를 사용하고 원하는 태그명을 입력하면 태그명이 변경되어 나온다.

   1-6. styled component에서 애니메이션 다루기
   keyframes 컴포넌트를 호출하고, 사용한다.
   keyframes`` 벡틱안에 css문법으로 animation을 정의하고
   정의된 keyframes변수를 ${}문법으로 넣어주면 된다.
   props로 넣어줄 필요는 없다. (고로 위에서 먼저 선언해줘야함.)

   1-7. selector기능을 사용할 수 있는데, 특정 컴포넌트를 styled로 만들었고, 그 안에 span과 같은 태그가 있다면?
   그 태그를 위해 styled로 또 정의할수도 있지만, 공통처리처럼
   내부안에서 sass느낌으로 Box{span{ span에 대한 css }}를 처리 할 수도 있다.

   1-8. selector를 태그네임에 의존하지 않는 방법
   즉, 어떤 하위태그가 오더라도 적용하는 방법에 대해 알아본다.
   하위 태그에 적용될 컴포넌트를 만들고, 해당 컴포넌트를 ${}문법으로 하위 자식노드에 처리한다.
   그렇게되면, as를 통해 어떤 태그가 오더라도 적용이 가능한 태그면 css가 동작한다.
   즉 컴포넌트 자체를 넣어서 타겟팅을 할 수 있다..

   1-9. Theme
   모든 색깔을 하나의 object안에 넣어놓은걸 Theme라고 부른다.
   추후 색을 바꿀 때, component들의 색을 하나하나 바꾸는게 아니라 object만 변경하면 된다.
   Theme를 사용하기 위해서는 ThemeProvider를 import해서 사용한다.
   ThemeProvider는 theme라는 props가 필요하다.

   2가지 이상의 테마를 만들어주고, 동일한 이름의 명확한 꾸며주는 색상명칭들을 설정하고 색상을 넣어준다.
   이후 ThemeProvider로 App을 감싸고 props로 theme를 넣어주면,
   App에서는 props.theme로 값을 가져올 수 있다.
   설정이 끝나면 최상단의 ThemeProvider에 theme값만 바뀌면
   컴포넌트 값을 바꿀필요없이 전부 변경된 값으로 적용이 된다.
   꼭 테마별 TextColor, bgColor등 이름들은 같게 설정해야한다.
   여기까지 50%의 theme사용법!

2. TypeScript, ReactJs, styled-component를 혼합해서 프로젝트 진행
   2-0. 간단하게 TypeScript를 알아본다.
   strongly-type언어로 프로그래밍 언어가 작동하기 전에 type을 확인한다.
   Javascript는 인터프리터 언어로 실행하기 직전까진 오류가 있던지 말던지 신경쓰지 않는다.
   또한, 타입도 무엇인지 상관하지 않는다.
   잘못된 타입이 들어오거나 잘못된 object의 값을 호출해서 undefined가 발생하는 이슈들을 미연에 방지해준다.
