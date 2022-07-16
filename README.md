# Nobar-server
`샴페인서버노바 인 더 스카이~~~~~~`

<div align="center">
	<table>
  <th>박진수 @jinsp_inary</th>
	<th>임승하 @</th>
	<tr>
		<td><img width="500" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8b3f769d-d676-4ce1-a71b-9aa27544a3c3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220713T164207Z&X-Amz-Expires=86400&X-Amz-Signature=93a77f32b5f33e5f5e0481dfbf6c6196cfabe6b551448e7d05c501026786ec30&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject"></td>
		<td><img width="500" src="https://i.ibb.co/RpG6ZqW/image.jpg"></td>
	</tr>
<th> 역할</th>
<th> 역할</th>
<tr>
<td>
- 초기 세팅<br>
- 노션 페이지 설정<br>
- 소셜 로그인 / 회원 가입<br>
- 홈 조회 기능<br>
- 레시피 상세 조회 기능<br>
- 테이스팅 노트 기능 <br>
- 마이페이지 조회 기능 <br>
</td>
<td>
- 검색 태그 조회 기능 <br>
- 최근 & 추천 검색어 조회 기능 <br>
- 재료, 칵테일 텍스트 검색 기능 <br>
- 술 태그 검색 조회 기능 <br>
- 칵테일 가이드 상세 조회 기능 <br>
</td>
</tr>
	</table>
</div>

## 설계한 컬렉션
- ![collectionImage](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/04f58ab4-5910-4a88-8e91-2d69ea84d1a2/Group_33682.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220713T133940Z&X-Amz-Expires=86400&X-Amz-Signature=674f2145108df6dbadb342546dfdea68af0855bda47338cd6d30937ec464ba0d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Group%252033682.png%22&x-id=GetObject)
- 자세한 내용은 여기서! [Click](https://www.notion.so/DB-collections-790950ea9cd94feba849571051be5f21)


## API 명세서
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/944ee8dc-fc5d-4b0f-b549-a2af266bd682/image_12.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220713T134614Z&X-Amz-Expires=86400&X-Amz-Signature=e9fef5f8b0b12ad82466ff4d60c78c5721d41604b1e03dbd55bfd7e87669bb0d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22image%252012.png%22&x-id=GetObject)

API 명세서에서 전체 API 로직 구현 진척도와 팀 별 역할 분담을 확인하실 수 있습니다!
[Click](https://www.notion.so/api-d68ba5f5ec06464093a42d14c9171d0b)

## Git Commit Message Convention
- Git Commit Message Structure
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7d0a00a6-5f32-4b0b-b2e4-4b28a120d8b1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220713T135154Z&X-Amz-Expires=86400&X-Amz-Signature=faf723a9d198455e0c5c448644220e046c1dc6f701e7dc646b0cb1405736e280&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
- Commit Type Tag
![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F50f41847-4d67-478f-9264-3324127f5b61%2FUntitled.png?table=block&id=0dee6451-c9e5-4d55-bf90-76a7f1e3f4e2&spaceId=c2c49716-1bd9-4f10-a2ba-246e348c3fbd&width=2000&userId=d3a1ec4b-f86d-4b34-af10-22d2f5b804e7&cache=v2)


## Branching Strategy
- 기본적으로 git flow 전략을 사용합니다.
- main, develop, feature 3가지 branch 를 기본으로 합니다.
- main → develop → feature. feature 브랜치는 feat/기능명으로 사용합니다.
- 이슈를 사용하는 경우 브랜치명을 feat/[issue num]_[feature name]로 합니다.

## Coding Convention
- 코드 컨벤션은 여기서 확인하세요![Click](https://www.notion.so/Coding-Convention-e17614fca75b4e2cb0c774428ae7c8ba)


## Project Foldering

```                 
.
├── tsconfig.json
├── nodemone.json
├── package.json
├── .gitignore
├── .eslintignore
├── .eslintrc.json
├── docker-compose.yml
├── tsoa.json
└── src
    ├── config
    ├── controller
    ├── dto
    ├── loaders
	├── model
    ├── service
	├── utils
    └──  index.ts
```
