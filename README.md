# useMemo 함수 구현하기

useMemo(calculateValue, dependencies)

매개변수
- calculateValue : 캐싱하려는 값을 계산하는 함수입니다. 순수해야 하며 인자를 받지 않고 모든 타입의 값을 반환할 수 있어야 합니다. React는 초기 랜더링 중에 함수를 호출합니다. 다음 랜더링에서 React는 마지막 랜더링 이후 dependencies가 변경되지 않았을 때 동일한 값을 다시 반환합니다. 그렇지 않다면 calculateValue를 호출하고 결과흫 반환하며 나중에 재사용할 수 있도록 저장합니다.
- dependencies: calculateValue 내에서 참조되는 모든 반응형 값의 목록입니다. 반응형 값은 props와 state, 그리고 컴포넌트 안에서 직접 선언된 모든 변수와 함수를 포함합니다.

# 구현 방향
1. [React github] https://github.com/facebook/react/blob/40f653d13c363c6f81b13de67ce391991fb1f870/packages/react-reconciler/src/ReactFiberHooks.js#L3640 을 참고하여 기존 React라이브러리 내에 useMemo 함수가 어떻게 구현되었는지 파악합니다.
2. 바닐라코딩 컨텐츠의 예시를 이용하여 useMemo 리액트 프로젝트를 만듭니다.
3. custom useMemo 함수를 구현합니다.

# custom useMemo 함수 설명
1. `useRef`를 사용하여 memoized된 `calculateValue`와 의존성 배열을 기억합니다.
2. 최초 랜더링시 또는 의존성 배열이 변경된 경우에만 의존성 배열과 새로운 값을 계산하여 memoized된 값을 업데이트 합니다.
3. memoized 된 값을 반환합니다.

<br>

# 실행방법
<br>

## 1. 프로젝트 클론받기!

터미널에서 아래의 Git 명령어를 이용하여 프로젝트를 클론(다운로드)!

```sh
git clone 프로젝트_GIT_URI
```

> 프로젝트\_GIT_URI는 Github useCallback 저장소의 메인 페이지에서 초록색 `<> Code` 버튼을 클릭하시면 확인할 수 있음!

<br>

## 2. 관련 의존성 패키지를 설치!

터미널의 useCallback 디렉토리 내에서 아래 명령어를 실행!

```sh
npm install
```

<br>

## 3. 로컬 서버 실행!
useCallback 디렉토리에서 아래 명령어를 실행!

```sh
npm run dev
```
<br>
<br>
<br>

