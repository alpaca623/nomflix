# 강의 진행 내용 기록!

### __2.23 토 진행내용__

  **1. Fundamentals**
  * 1-0. Arrow Functions
  * 1-1. Template Literals
  * 1-2. Object Destructuring
  * 1-3. Spread Operator
  * 1-4. Classes
  * 1-5. Array.map
  * 1-6. Array.filter
  * 1-7. forEach, includes, push

### __2.25 월 진행내용__

  __2. Project Setup__
  * 2-1. React Router Part One
  * 2-2. React Router Part two
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

### __2.27 수 진행내용__

  **3. styles**
  * 3-0. CSS in React part One
  * 3-1. CSS in React part Two
  * 3-2. CSS in React part Three
  * 3-3. GlobalStyles and Header
  * 3-4. Location Aware Header
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

### 2.28 목 진행사항
  **4. Networking**
  * 4-1. Introduction to The Movie DB API
  * 4-2. Sexy Networking with Axios Instances
  * 4-3. API Verbs Part One
  * 4-4. API Verbs Part Two
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

    * 결론 : axios를 이용하여 api를 받아오는 방법을 알게되었다. 우선 api.js라는 한곳에 모두 모아놨다는게 아주 만족스럽다. 소스도 이쁘고. 이제 이거를 가지고 component에서 데이터를 써야하는데 그건 다음 강의에서 알려줄 듯~
    
  **5. Containers**
  * 5-0. Container Presenter Pattern part one
  * 5-1. Container Presenter Pattern part two

  - 이부분에서 나오는 패턴은 아주 중요하다. 이전 리액트 페이지를 만들때 가장 힘들었던 것 중 하나인, component를 다루는 방식에 대해서 알려준다. 우선 두개의 강의를 들었는데 구분이 되는 컴포넌트를 3개의 파일로 분리한다.
  ```
    - index.js
    - ~Container.js
    - ~Presenter.js
  ```
  - 이렇게 했을 때, 각 파일들의 역할은 다음과 같다.
  ```
    * index.js - 단순히 Container를 export 시킨다.
    * ~Container.js - 데이터를 받아오거나 보내는 역할을하는 컨테이너. state, axios 로직등 데이터 핸들링을 하는 부분
    * ~Presenter.js - Container.js에서 처리한 데이터를 받아서 보여주는 view의 역할이다. 함수형 컴포넌트로서 state가 존재하지 않는다.
  ```
  - 예전에 나는 한 파일에서 view, data handling까지 다 하려고 햇었는데.. 이렇게 하면 되는것이었다.. 패턴화, 중요하네..!! index.js의 역할을 아직 잘 모르겠다. 뭔가 index.js파일을 자동으로 인식시키는 코드가 있을거같다.

### 3.2~3 주말 진행사항
  * 5-2. Home Container
  * 5-3. TV Container
  * 5-4. Search Container

  - 상세내용은 아래에 적어놓음

### 3.4 월 진행사항
  **5. Containers**
  * 5-2. Home Container
  * 5-3. TV Container
  * 5-4. Search Container
  * 5-5. Detail Container part one
  * 5-6. Detail Container part two
  * 5-7. Destructuring assignment with let

  - 컴포넌트의 컨테이너를 완성해 나가는 과정을 commit 하였다.
  - 각 컨테이너는 용도에 맞게 데이터를 가져오는 부분으로 구성된다. 
    - TV, Movie Container는 메뉴 클릭시 나올 첫 화면의 리스트를 뽑아오기 위한 api를 불러왔다.
    - Search Container는 특정 단어의 검색어에 대한 검색결과를 api에 전달하고 그 결과를 받아온다.
    - Detail Container는 특정 id에 해당하는 TV, Movie 데이터를 조회하여 결과를 받아온다.
  - **아직 부족한 부분 check**
    1. lifeCycle 다시 공부해야함 - componentDidMount안에서 setState하게될때.. 순환되는게 이해가 잘 안된다. 예전에 componentDidMount를 쓸 때 안에서 setState하게되면 에러가 났던적이 있는데, 우선 한번 더 강의를 봐야 할듯..
    1. javascript6,7 문법을 꾸준히 보자.