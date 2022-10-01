# 바닐라 자바스크립트로 만드는 TO DO LIST

학습 목표 : fetch API, json-server 사용해보기 및 DOM 조작

<br/>

> ## preview

[2022.09.26] 투두리스트 완성

![Honeycam 2022-09-26 02-06-37](https://user-images.githubusercontent.com/48672106/192156708-3000431a-303e-4e09-bef0-9c377b2334cd.gif)


> 구현사항
- 첫 화면 로드시 form input에 포커스 적용
- 할 일 추가시 fetch API에 POST 요청하여 db.json에 추가후 다시 db.json의 모든 데이터 불러오기
- 할 일 삭제시 fetch API에 DELETE 요청 후 해당 id값을 가진 todo 삭제
- 수정 버튼 누르고 내용 변경시 db.json에 데이터 변경시키고 변경된 데이터 반영되도록 만들기
- 체크 박스 클릭시 todo에 취소선 넣기

> 추가할 사항
- 페이지네이션 구현하기
