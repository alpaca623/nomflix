# react web application develop
* nomad coder lecture - react membership

* 순서
1. Introduction
1. Fundamentals
1. Project Setup
1. Styles
1. Networking
1. Containers
1. Presenters
1. Deployment
---
### 강의 진행 내용
* __2.23 토__ - **Fundamentals**
  1. Arrow Functions
  1. Template Literals
  1. Object Destructuring
  1. Spread Operator
  1. Classes
  1. Array.map
  1. Array.filter
  1. forEach, includes, push

* __2.25 월 진행내용__
  1. React Router Part One
  1. React Router Part two
  ---
  * react-router 사용 예제 실습
  * react-router github page
    * https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom
  * Home, TV, detail 페이지에 해당하는 view 를 만듬
  * .env 파일 생성
    * import 하는 소스의 root path를 지정해준다.
    * 이게 뭔지 궁금해서 좀 더 찾아봤는데, env는 enviroment(환경)의 약자이고, port 번호나 DB url을 지정해놓는 등, 기본적으로 default 환경을 설정하는 곳인거같다. 다양한 플랫폼에서 사용한다.(example - https://www.google.com/search?q=.env+%ED%8C%8C%EC%9D%BC&rlz=1C5CHFA_enKR832KR832&oq=.env&aqs=chrome.2.69i57j69i60j0l4.3718j0j7&sourceid=chrome&ie=UTF-8)
  * Composition에 대한 내용
    * 두개의 컴포넌트를 동시에 렌더링 시키는 방식
    * 부모의 경로(path)가 같을 경우, react-router는 동시에 렌더링을 시킨다.
    * Router안에서 경로가 중복되는 경우가 발생하게 되면, 에러가 발생한다. 예제 : ```You tried to redirect to the same route you're currently on : "/"``` 이때 switch를 사용하여 방지시킴
* __2.27 수 진행내용__
  1. CSS in React part One
  1. CSS in React part Two
  1. CSS in React part Three
  1. GlobalStyles and Header
  1. Location Aware Header
  ---
  * 리액트에서 스타일을 주는 방법은 여러가지가 있다. 이 강의에서는 styled-components를 이용하여 스타일을 지정하였다.
    1. 가장 기본적으로 css를 이용하는 방법이 있고(전통적인방법)
    1. scss를 사용하는 방법
    1. styled-components를 이용하는 방법
    1. 그 외 등등

  * **진행순서**
    * yarn으로 styled-components를 추가한다.(https://www.styled-components.com/)
    * Header의 각 요소들을 변경시킴
      * header -> Header
      * ul -> List
      * li -> Item
      * a -> Link(이건 react-router 요소로 변경)
    * yarn으로 styled-reset을 추가한다.(https://github.com/zacanger/styled-reset) - css리셋하는걸로 브라우저별로 적용되어 있는 default css를 제거해준다.
    
---
  
  