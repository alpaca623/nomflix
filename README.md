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
    * 스타일을 수정한다(내용 생략 - 스타일은 아직 노가다이다..)
  * **withRouter사용**
    * 현재 어떤 메뉴가 선택이 되었는지 알려주기 위해서, 각 메뉴의 bottom-border로 밑줄을 그어놓았다. 지금 각 메뉴 선택에 대한 값을 path로 구분하고 있으므로, 현재 상태를 알려주는 withRouter를 이용하여 style을 주었다.
    * withRouter를 사용하면 props로 현재 페이지에 대한 정보를 알려주므로, 현재 어디 메뉴에 있는지 pathname을 알려준다.(자세한건 https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md)
  * styled-components는 말그대로 component이므로, props를 전달할 수 있게 해준다.. -> 공통된 styled를 사용하는 요소는 아주 편리하게 스타일을 지정할 수 있겠다.(어떻게 이런 생각을?? 신기방기네.. - https://github.com/alpaca623/nomflix/commit/61e400c6337ccec15614c1aaae62aecbbc35d10a#r32500711 참고)

* 2.28 목 진행사항
  1. Introduction to The Movie DB API
  1. Sexy Networking with Axios Instances
  1. API Verbs Part One
  1. API Verbs Part Two
  ---
  * 제공되는 영화 API를 이용해 데이터를 받아온다.(https://www.themoviedb.org/?language=ko-KR)
  * Axios 사용 방법은 github page참고(https://github.com/axios/axios)
    - axios에서 파라미터 보내는 방법을 알아냈다!
    - 검색어 같은 경우, 공백 등 검색어에 대한 문제가 있을 수도 있기 때문에, 요청할 때 인코딩을 해서 넘겨줘야 하는 경우가 있다. javascript에서는 기본 제공되는 **encodeURIComponent** 함수를 이용하면 된다.
  * api를 받아오는 소스를 컴포넌트마다 적어놓으면 안되니까, api.js 파일을 만들어서 데이터를 받아오는 곳을 만들어둔다. -> 데이터 들어오게 하는것 성공.
    * 가져올 API 목록
      - [x] Now playing (Movie)
      - [x] Upcoming (Movie)
      - [x] Top Rated (TV, X)
      - [x] Popular (TV, Movie)
      - [x] Airing Today (TV)
      - [x] Detail (TV, Movie)
      - [x] Search (Tv, Movie)
    * api.js 에서 tvApi와 moviesApi를 만들어서 사용한다. -> 전반적으로 axios를 사용하여 api에 접근하는 것을 잘 기억해놓는것이 중요함.

    * 결론 : axios를 이용하여 api를 받아오는 방법을 알게되었다. 우선 api.js라는 한곳에 모두 모아놨다는게 아주 만족스럽다. 소스도 이쁘고. 이제 이거를 가지고 component에서 데이터를 써야하는데 그건 다음 강의에서 알려줄 듯~!
    
---
  
  