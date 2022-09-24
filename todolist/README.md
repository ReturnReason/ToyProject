바닐라 자바스크립트로 만드는 TO DO LIST
fetch API, json-server 사용하기


> preview

![Honeycam 2022-09-24 19-24-06](https://user-images.githubusercontent.com/48672106/192092902-775bff9e-3127-4c48-a1fb-afce2fff7002.gif)

> 구현사항
- 첫 화면 로드시 form input에 포커스 적용
- 할 일 추가시 fetch API에 POST 요청하여 db.json에 추가후 다시 db.json의 모든 데이터 불러오기
- 할 일 삭제시 fetch API에 DELETE 요청 후 해당 id값을 가진 todo 삭제

> 추가할 사항

- 수정 버튼 누르고 내용 변경시 db.json에 데이터 변경시키고 변경된 데이터 반영되도록 만들기
- 체크 박스 클릭시 todo에 취소선 넣기
