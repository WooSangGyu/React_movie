# React movie App

React JS Fundamenals Course (2020.01.08 Update!)

continue

- App.js 중 -
  class App extend React.component 에서 extends 를 통해 React.Componet가
  가지고 있는 여러가지 method 를 가져온다. 그 중 대체적으로 사용하는 것은 render Method 이다.
  react는 자동적으로 모든 class의 render method를 실행한다.

<a>life Cycle 실행순서</a>
constructor -> render -> didMount -> render -> didUpdate -> Willunmount

<a>gh-pages는 git 레포지토리를 무료로 웹 호스팅 해주는 것</a>

- 현재 3.0.1은 버전 오류가 있기 때문에 2.1.0 혹은 2.0.1을 설치해야함 (21.04.10)

<a>github gh-pages network error 발생 시 아래 조치사항대로 하기</a>

- $ git commit --allow-empty -m 'Trigger rebuild'
- $ git push origin
