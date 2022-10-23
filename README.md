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

   2-1. typescript 사용을 위한 리액트를 개발하기 위해서는 보통 2가지 방식이 있다.
   첫번째는 명령어를 통해 프로젝트를 처음부터 타입스크립트 버전으로 생성하는것이다.

   > npx create-react-app my-app --template typescript

   두번째 방식으로 위의 간단한 방식이 싫다면 typescript에 관련된 모든것을 전부 설치해줘야 한다.

   > npm install --save typescript @types/node @types/react @types/react-dom @types/jest

   설치가 되었다면 파일들의 확장자들을 바꿔줘야한다.
   기존에 .js파일들을 .tsx(ts + react조합)로 바꿔야한다. (그냥 타입스크립트는 .ts 확장자로 쓴다.)
   변경을 하고 구동중이던 react를 종료한다.

   > clear
   > npm start

   해보면 타입스크립트가 동작해서 에러들을 뿜뿜하고 있는 걸 확인 할 수 있는데, 기존에 개발한게 js라서 그렇다.
   props라던지 import된 styled-component들을 변경해야한다.

   > npm i --save-dev @types/styled-components

   styled-component의 경우 위 명령어로 재설치를 하라고 한다.
   설치가 완료되면 에러가 없어진걸 볼 수 있다.

   2-2. typescript를 react에서 사용해보기
   props로 데이터를 전달하는경우 해당 데이터 타입이 무엇인지 정의를 해주어야 타입스크립트가 구분을 한다.
   background-color와 같은 문자열을 넘길경우 bgColor: string이라는식으로 바로 적어줘도 되지만, 하나의 interface를 만들고
   props의 object전체를 interface에 상속받아서 타입스크립트를 적용시킬수도 있다.

   컴포넌트의 {}: interface명
   형태로 입력하면 props들에 대해 정의된 interface값을 상속시켜서 타입스크립트의 값을 정의할 수 있다.

   styled-component의 경우
   styled.div<interface명>``;
   위 형태로 <명칭> 으로 입력한다.

   \*interface는 object를 설명해주는것이라고 생각하면 된다.

   2-3. interface를 통해 typescript가 알 수 있도록 정의를 해줬는데,
   정의를 하게되면 해당 옵션은 필수값인 required가 되어버린다.
   개발을 하다보면 넣어야하는 경우 없어야하는 경우가 있는데, 이럴땐 명칭뒤에 '?' 물음표 하나를 추가해주면
   optional처리가 되어서 없어도 타입스크립트가 오류를 뿜어내지 않는다.

   하지만 넘기는 props는 optional이고 실제로 그리는 컴포넌트의 css에
   border값과 같은곳에 undefined가 들어간다면? 이상한 css문법이 될 것이다.
   물론 똑똑한 브라우저는 알아서 초기값을 해줄수도 있겠지만, 사용자가 초기값을 정해주는게 맞다고 생각이 든다.
   여기서 값이 들어오지 않아 undefined로 들어온다면

   es2020추가된 '??' 연산자로 초기값을 처리할 수 있다.

   borderColor={borderColor ?? "white"}

   -A ?? B
   Nullish Coalescing Operator라고 불리며, A의 값이 null이거나 undefined이라면 B가 되어라 라는 의미가 된다.

   또는 아래와 같이 파라미터상태에서 처리도 가능하다.
   function A({text = "기본 메시지"}){ }
   이것 또한 es6로 기억한다.

   2-4. typescript & state
   react에서 젤 처음 배운 개념인 state와 typescript를 같이 사용하는법을 배운다.
   useState(0); 으로 선언하면 해당값은 number로 인식한다.
   useState(""); 으로 선언하면 해당값은 string으로 인식한다.
   useState(true); > boolean

   자주 없는케이스이지만 number이면서 string이어야 하는경우는 아래처럼 표현할 수 있다.

   > const [value, setValue] = useState<number|string>(0);

   <> 람다형태로 허용할 타입을 넣어주면 된다.

   2-5. state사용법 2
   state사용을 위해 onChange onSubmit, onKeypress등등 다양한 이벤트를 처리하고 set함수에 넣어줘야할텐데, 이때 기존의 react와는 조금 다른 형태로 데이터를 처리한다.

   input태그에 onChange를 기준으로 설명하자면 아래와 같다.
   const onChange = (event: React.FormEvent<HTMLInputElement>) => {}

   파라미터값인 event에 타입은 React문법이면서 Form이벤트가 발생했을 때, 그중에서도 Input이벤트인 경우를 지칭할 수 있다.
   이것은 다 외우거나 자연스럽게 알 수 있는것은 아니고 구글링을 통해 찾거나 반복숙달을 해야한다. 하단에 관련 url을 참고하면 좋다.

   url: https://reactjs.org/docs/events.html
   리액트 관련된 이벤트들이 궁금하다면 SyntheticEvent 가이드를 본다.

   set처리부분도 변경된 걸 볼 수 있는데, 기존 react에서는 아래처럼
   setName(event.target.value);
   형태로 set함수에 값을 갱신해줬는데,

   setName(event.currentTarget.value);
   타입스크립트에선 위 형태로 currentTarget이라는걸 타입스크립트에서 채택했다. 차이점은 요정도다.

   또한 object안에서 object의 특정값을 통해 받는법도 알아냈는데, 위 value형태는 아래처럼 표현 할 수도 있다.
   const {currentTarget:{value}} = event;
   setName(value); //이것은 event.currentTarget.value를 value상수에 대입 후 setName함수에 넣은것이다.

   2-6. typescript & styled-component : theme
   참고 url : https://styled-components.com/docs/api#typescript

   2-6-1.타입스크립트가 알아먹을 수 있는 styled-component로 설치

   > npm install @types/styled-components

   설치를하게 되면 index.d.ts 파일이 생성되는데, 타입스크립트에게 styled-component를 설명해준다.

   2-6-2. styled.d.ts를 만든다.(d.ts는 declaration file이라는 뜻이다.)

   2-6-3. theme.ts(테마를 정의할 파일을 만든다.)
   사용될 값들을 정의해주고 export처리한다.

   2-6-4. index.tsx파일에서 ThemeProvider를 선언하고 theme안에 theme.ts에서 작성한 테마를 불러서 사용한다.

   2-6-5. theme값을 사용하고 싶은 .tsx파일로 가서 props를 통해 props.theme.테마로 정의한값을 통해 불러서 사용하면 끝!

3. 지금까지 배운 기능들을 통해 페이지를 만들고 fetch를 통해 데이터를 가져오고 출력하는 기능을 만들어볼것이다.
   react-query를 통해 fetch를 좀 더 쉽게 사용해볼 예정이다.

   3-1. react-router-dom 설치

   3-2. stlyed component는 전역 css를 적용을 위한 property를 가지고 있는데, 그것이 바로 createGlobalStyle이다.
   그리고 생성한 컴포넌트를 최상단인 App 맨위에 선언해주는 방식을 택했는데, 이렇게 넣다보면 프로젝트내에 불필요한 div가 많아진다.
   리액트팀은 이런것을 막히위해 Fragment라는걸 만들었다.
   유령 컴포넌트로 부모없이 붙어있을수 있도록 만들어준다.

   글로벌 스타일을 적용하게 되면 styled-component가 Document의 head로 찾아가서 해당 내용을 전역에 적용시켜준다.

   google에서 reset css검색하고 첫번째 url의 기본내용을 App.tsx에 적용하여 전역 리셋처리함

   3-3. 폰트 적용
   폰트또한 import로 지원되는 구글에서 원하는 폰트를 가져와서 reset 최상단에 선언한다. 선언한 폰트를 전역 css에서 body에 걸어준다.

   3-4. fetch등으로 데이터를 가져올때도 typescript한테 타입을 알려줘야한다.

   3-5. 이미 출력된 리스트에서 name값을 알고 데이터를 아는데,
   상세 페이지로 이동하면서 또 로딩을 보여주는건 좋지 않은 개발 방식이다.
   이미 데이터를 브라우저가 애초에 가지고 있기때문에, 보이지 않는 방식으로 데이터를 어떻게 보내는지 알아본다.(비하인드더씬 방식)
   데이터를 넘길때 보통 paramter를 넘기는데, 이것 말고 state를 활용하여 처리할 수 있다. (비하인드더씬의 소통방식)

   React Router dom에 있는 Link 컴포넌트는 2가지 옵션이 있다.
   to속성에 string인 일반 문자열로 경로를 넣는것.

   두번째는 object를 사용할 수 있다.
   <Link 
      to={{
         pathname: "/course",
         search: "?sort=name",
         hash: "#the-hash",
         state: {fromDashboard: true}
      }}
   />

   다만 해당 문법도 react-router 6이상부터 변경되어 object형태가 아닌
   각각 속성별로 적어준다.
   <Link to={"/"} state={name:"psw"}>

   설정해주고 state에 넘긴 데이터는 어떻게 받을까?
   받아야하는 페이지에서 useLoaction()을 통해서 데이터를 받아오면 된다.

   interface LocationState{
   state:{
   name: string,
   rank: number
   }
   }
   const {state} = useLoaction() as LocationState;

   3-6. 상세페이지 작업
   state를 통해 넘긴 coinId, state값등을 활용하여 상세페이지를 꾸미고 출력한다.
   async, await, fetch조합으로 coin정보와, 가격정보를 request한다.
   여기서 state에 값을 담아줘야하는데, state값은 단일 정보이다 보니 object형태일 것이다.
   타입스크립트는 각 object의 값이 무엇인지 설명해줘야하는데, 이것은 타입스크립트를 쓰면서 귀찮은 점 중 하나가 된다.

   3-7. 이전장에서 문제였던 object의 각 데이터를 typescript에게 설명해주는 부분을 작성해본다. 처리를 안해주면 useState의 object 기본값때문에 계속 빈 object로 인식하기 때문이다.

   interface정의를 할때 명칭은 대문자 I를 붙여주는 규칙을 사용하면 좋다.
   interface정의를 조금 쉽게할 수 있는 팁이 있는데, 처리하고자 하는 object를 console.log로 출력하고 콘솔창에서 해당 값의 오른쪽클릭 후 Store object as global variable을 클릭하면, 전역 변수에 해당 값을 담아주는데, 이걸 Object.keys를 통해 처리하면 key에 대한 array를 받을 수 있다. 이걸 join()메소드로 처리하면 하나의 문자열로 붙여준다. Object.keys(temp1).join();
   (으... 신규 프로젝트 들어가서 db스키마를 보고 java에서 VO 또는 mybatis 작성하는 기분이다...)

   이렇게 key값들은 불러왔고, 각 key의 타입을 불러와야하는데, 이번엔 Object.values(temp1).map(v=> typeof v).join()로 가져온다.
   각 문자열을의 쉼표를 제거하고 엔터로 한줄로 만들어서 복사 한 후
   먼저 세팅한 키값: ; 을 전체 선택하고 shift alt i 를 눌러서 맨 우측으로 포커싱하고 : ;사이에 커서를 둔 후 붙여넣기를 하면 끝!
   엄청난 꿀팁이다...

   하지만 해당 방법이 완벽한건 아니다 [{...}, {...}, ...]
   형태의 array타입안에 object로 이루어진 값인데 object타입이라고 적힐때도 있다.
   이러한 경우 array내부의 object를 설명할 interface를 만들고
   tag: ITag[];
   위 형태로 추가로 또 처리해줘야한다.(복잡하면... 알아볼 수 있을까..허헣)

   -vscode 단축키
   ctrl + d : 같은 문자열 선택
   전체 선택 후 > shift + alt + i : 선택한 문자열 맨 우측으로 포커싱
   ctrl + shift + -> : 현재 선택한 문자열 기준으로 우측끝까지 선택

   3-8. Nested router or nested route
   route안에 있는 route이다.
   웹 사이트에서 탭을 사용할때 많이 도와줄 것이다.
