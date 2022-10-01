## image lazy load

API 요청 10MB로 10개 VS API 요청 100MB 1개 두가지가 있다면 보통은 요청이 많은 쪽이 느리다.<br/>
서버 요청의 수를 줄이고, 요청의 용량을 최소화 시키는 것이 속도 측면에서 UX를 향상시킬수 있다.

수많은 이미지가 있을 때 모두 로드하는 것보다 <br/>
사용자가 보고 있는 이미지만을 효율적으로 로드 시켜서
UX를 향상 시킬 수 있는데 이를 `이미지 레이지 로드`라 한다.

사용자가 스크롤 하기 전엔 저화질 사진을 띄워놓고 있다가 스크롤하는 경우 고화질 사진으로 바꿔주는 예제이다.

> ### preview

![Honeycam 2022-10-01 22-48-25](https://user-images.githubusercontent.com/48672106/193412674-77783d26-f8c5-4e1a-ac2b-663dd009c19f.gif)

> ### 스크롤하기 전에 나타나는 이미지

![image](https://user-images.githubusercontent.com/48672106/193412790-3ca9e8bd-0fc4-428e-9a0b-2e306874e9b8.png)


