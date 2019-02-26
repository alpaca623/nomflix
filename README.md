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
* 2.23 토 - **Fundamentals**
  1. Arrow Functions
  1. Template Literals
  1. Object Destructuring
  1. Spread Operator
  1. Classes
  1. Array.map
  1. Array.filter
  1. forEach, includes, push

* 2.25 월
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
---
  
  