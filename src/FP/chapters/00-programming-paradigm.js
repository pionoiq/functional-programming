// --------------------------------------------------------------------------
// 📌 [프로그래밍 패러다임]
// --------------------------------------------------------------------------
// - 명령형, 선언형 프로그래밍 비교
// - 함수, 객체 지향 프로그래밍 비교
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 명령형 프로그래밍

const courses = [
  {
    id: 1,
    name: " imperative programming",
  },
  {
    id: 2,
    name: "declarative programming ",
  },
];

console.log("원본 데이터\n", courses);

// 1. 과정 배열을 순환하여 각 과정 이름의 좌우 공백 제거
// 2. 과정 배열을 순환하여 각 과정 이름 대문자화

// ES2015(v6)
// [전개구문(spread syntax)]을 사용하면 배열을 복사할 수 있다.
// 얕은 복사 (shallow copy)
const updateCourses = []; // [...courses];

// [기능 1.] 좌우 공백 제거
// 명령형으로 프로그래밍 한다.
// C, JAVA 문법
// for문
for (let i = 0, l = courses.length; i < l; i = i + 1) {
  // 객체 복제는 어떻게???
  // [전개구문(spread syntax)]을 사용한다.
  // 얕은 복사 (shallow copy)
  const course = { ...courses[i] };
  course.name = course.name.trim();
  updateCourses.push(course);
}

// [기능 2.] 대문자화
for (let i = 0, l = updateCourses.length; i < l; ++i) {
  const course = updateCourses[i];
  course.name = course.name.toUpperCase();
}

// [기능 3.] 배열 원소의 'name' 속성의 공백을 밑줄(_)로 변경하는 기능 추가
// 명령형 프로그래밍 방식으로
for (let i = 0, l = updateCourses.length; i < l; ++i) {
  const course = updateCourses[i];
  course.name = course.name.replace(/\s+/g, "_");
  /* /\s+/g 에서 '+' 는 '모든' 스페이스를 의미 */
}

console.log("업데이트 데이터\n", updateCourses);

// console.assert(!Object.is(courses, updateCourses), "🚨 courses와 updateCourses는 동일한 객체이다.");

// --------------------------------------------------------------------------
// 선언형 프로그래밍

const subjects = [
  {
    id: 1,
    name: " imperative programming",
  },
  {
    id: 2,
    name: "declarative programming ",
  },
];

console.log("원본데이터\n", subjects);

// [기능 1.] 객체 이름(name) 속성 좌우 공백 제거 함수 선언

function toTrim(object) {
  const o = { ...object };
  o.name = o.name.trim();
  return o;
}

// [기능 2.] 객체 이름(name) 속성 대문자화 함수 선언
function toUpperCase(object) {
  const o = { ...object };
  o.name = o.name.toUpperCase();
  return o;
}

// console.log(toTrim[0]);
// console.log(toTrim[1]);
// console.log(toUpperCase[0]);
// console.log(toUpperCase[1]);

// [기능 3.] 배열 원소의 'name' 속성의 공백을 밑줄(_)로 변경하는 기능 추가

function toUnderscore() {
  const o = { ...object };
  o.name = o.name.replace(/\s+/g, "_");
  return o;
}

// 3. 과목 이름 "좌우 공백 제거" → "대문자화" 후, 새로운 과목 배열 생성
// - 조건 1. 새로운 배열 반환
// - 조건 2. 배열 순환 후, 기능 처리(적용)

/*
 const updateSubjects = subjects
  .map((subjects) => {
    const copySubject = toTrim(subjects);
    return copySubject;
  })
  .map((subjects) => {
    const copySubject = toUpperCase(subjects);
    return copySubject;
  });
  */
const updateSubjects = subjects.map(toTrim).map(toUpperCase).map(toUnderscore);

console.log("업데이트 데이터\n", updateSubjects);

// --------------------------------------------------------------------------
// JavaScript 프로그래밍 패러다임
// → 함수(function)를 사용해 구현합니다.

// --------------------------------------------------------------------------
// JavaScript 프로그래밍 패러다임
// → 클래스(class)를 사용해 구현합니다. (참고: https://mzl.la/3QrTKlF)

// --------------------------------------------------------------------------
// 웹 컴포넌트(Web Components) API
// → 웹 컴포넌트를 사용해 구현합니다. (참고: https://mzl.la/3YjFdu9)
