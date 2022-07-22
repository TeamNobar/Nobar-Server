# Nobar
<img src="https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/logo.png">

</br>

## 나를 위한 특별한 홈텐딩 레시피  

- SOPT 30th APPJAM - Team Nobar  

- 프로젝트 기간: 2022.07.28 ~ 2020.07.18  

</br>
</br>

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
- 서버 노션 페이지 설정<br>
- 로그인 / 회원 가입<br>
- 홈 조회 기능<br>
- 레시피 상세 조회<br>
- 테이스팅 노트 작성 및 조회<br>
- 마이페이지 조회<br>
- 노바 자체 에러 코드 및 메시지 제작<br> 
- 서버 배포<br>
</td>
<td>
- 검색 태그 조회<br>
- 추천 검색어 조회<br>
- 텍스트로 칵테일 검색<br>
- 베이스 술로 칵테일 검색<br>
- 칵테일 가이드 상세 조회<br>
- DB에 더미데이터 적재<br>
</td>
</tr>
	</table>
</div>

</br>
</br>

## 설계한 컬렉션
- ![collectionImage](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/04f58ab4-5910-4a88-8e91-2d69ea84d1a2/Group_33682.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220713T133940Z&X-Amz-Expires=86400&X-Amz-Signature=674f2145108df6dbadb342546dfdea68af0855bda47338cd6d30937ec464ba0d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Group%252033682.png%22&x-id=GetObject)
- 자세한 내용은 여기서! [Click](https://www.notion.so/DB-collections-790950ea9cd94feba849571051be5f21)

</br>
</br>

## API 명세서
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/944ee8dc-fc5d-4b0f-b549-a2af266bd682/image_12.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220713T134614Z&X-Amz-Expires=86400&X-Amz-Signature=e9fef5f8b0b12ad82466ff4d60c78c5721d41604b1e03dbd55bfd7e87669bb0d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22image%252012.png%22&x-id=GetObject)

API 명세서에서 전체 API 로직 구현 진척도와 팀 별 역할 분담을 확인하실 수 있습니다!
[Click](https://www.notion.so/api-d68ba5f5ec06464093a42d14c9171d0b)

</br>
</br>

## Git Commit Message Convention
- Git Commit Message Structure
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7d0a00a6-5f32-4b0b-b2e4-4b28a120d8b1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220713T135154Z&X-Amz-Expires=86400&X-Amz-Signature=faf723a9d198455e0c5c448644220e046c1dc6f701e7dc646b0cb1405736e280&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
- Commit Type Tag
![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F50f41847-4d67-478f-9264-3324127f5b61%2FUntitled.png?table=block&id=0dee6451-c9e5-4d55-bf90-76a7f1e3f4e2&spaceId=c2c49716-1bd9-4f10-a2ba-246e348c3fbd&width=2000&userId=d3a1ec4b-f86d-4b34-af10-22d2f5b804e7&cache=v2)

</br>
</br>

## Branching Strategy
- 기본적으로 git flow 전략을 사용합니다.
- main, develop, feature 3가지 branch 를 기본으로 합니다.
- main → develop → feature. feature 브랜치는 feat/기능명으로 사용합니다.
- 이슈를 사용하는 경우 브랜치명을 feat/[issue num]_[feature name]로 합니다.

</br>
</br>

## Coding Convention
- 코드 컨벤션은 여기서 확인하세요![Click](https://www.notion.so/Coding-Convention-e17614fca75b4e2cb0c774428ae7c8ba)

</br>
</br>

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
		├── auth
    ├── controller
    ├── dto
    ├── loaders
		├── error
		├── mapper
		├── model
		├── service
		├── utils
	└──  index.ts
```

</br>
</br>

## Server Architecture

![arch](https://user-images.githubusercontent.com/89137120/180420764-1afac15d-1ef5-4c47-b68e-90cb128c3d7c.png)

</br>
</br>

## package.json

![](https://raw.githubusercontent.com/TeamNobar/Nobar-Server/develop/package.json)

```
{
  "name": "nodeProjectTemplate",
  "version": "1.0.0",
  "main": "build/src/index.js",
  "scripts": {
    "build": "tsoa spec-and-routes && tsc",
    "start": "node dist/src/index.js",
    "dev": "concurrently \"nodemon\" \"nodemon -x tsoa spec-and-routes\"",
    "build1": "tsc && node dist"
  },
  "license": "MIT",
  "devDependencies": {
    "@types/express": "^4.17.13",
    "@types/jsonwebtoken": "^8.5.8",
    "@types/morgan": "^1.9.3",
    "@types/node": "^18.0.0",
    "@types/slack-node": "^0.1.4",
    "@typescript-eslint/eslint-plugin": "^5.29.0",
    "@typescript-eslint/parser": "^5.29.0",
    "concurrently": "^7.2.2",
    "eslint": "^8.18.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.0.0",
    "nodemon": "^2.0.16",
    "prettier": "^2.7.1",
    "ts-node": "^10.8.1",
    "typescript": "^4.7.4"
  },
  "dependencies": {
    "app-root-path": "^3.0.0",
    "aws-sdk": "^2.1157.0",
    "axios": "^0.27.2",
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "express-validator": "^6.14.1",
    "inversify": "^6.0.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.4.0",
    "morgan": "^1.10.0",
    "multer": "^1.4.5-lts.1",
    "multer-s3": "^3.0.1",
    "reflect-metadata": "^0.1.13",
    "request": "^2.88.2",
    "slack-node": "^0.1.8",
    "ts-jenum": "^2.2.2",
    "tsoa": "^4.1.0",
    "winston": "^3.7.2",
    "winston-daily-rotate-file": "^4.7.1"
  }
}
```
