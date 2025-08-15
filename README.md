# na-T-na-FE

## 프로젝트 소개

이 프로젝트는 비사이드 포텐데이(AI 해커톤)에서 진행한 NAVER Cloud AI 개발 도구를 활용한 T성향이 ‘티’나는 사람을 위한 F 공감 시뮬레이션 챗봇 서비스.

기획자 1명/디자이너 2명/프론트엔드 개발자 1명/ 백엔드 개발자 1명/ AI개발자 1명이 모여 진행 


## 실행 방법

```sh
$ git clone https://github.com/besides-508-potenday/na-T-na-FE.git
$ npm install
$ npm run dev
```

## 기술 스택

<p>

<img src="https://img.shields.io/badge/npm-CB3837?&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/typescript-3178C6?&logo=typescript&logoColor=white"  alt="typescript">
<img src="https://img.shields.io/badge/vite-646CFF?&logo=vite&logoColor=white" alt="vite">
<img src="https://img.shields.io/badge/React-61DAFB?&logo=React&logoColor=white"  alt="React">

<img src="https://img.shields.io/badge/reactrouter-CA4245?&logo=reactrouter&logoColor=white"  alt="reactrouter">
<img src="https://img.shields.io/badge/TanStackQuery-FF4154?&logo=ReactQuery&logoColor=white" alt="TanStackQuery">
<img src="https://img.shields.io/badge/zustand-000000?&logo=zustand&logoColor=white" alt="zustand">

<img src="https://img.shields.io/badge/framer-0055FF?&logo=framer&logoColor=white" alt="framer">
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?&logo=tailwindcss&logoColor=white" alt="tailwindcss">
<img src="https://img.shields.io/badge/shadcnui-000000?&logo=shadcnui&logoColor=white" alt="shadcnui">

<img src="https://img.shields.io/badge/socket.io-010101?&logo=socketdotio&logoColor=white" alt="socketdotio">

<img src="https://img.shields.io/badge/vercel-000000?&logo=vercel&logoColor=white" alt="vercel">

</p>

## FE 아키텍쳐

![alt text](image.png)

## 구현내용
### 유저 닉네임/챗봇 전역상태로 관리 
- zustand로  유저 닉네임과 선택된 챗봇을 전역상태로 관리 해당 상태를 payload로 보내서 백엔드로 부터 chatroom_id발급 

### 채팅기능 구현
- Socket.IO를 통해 chatroom_id로 채팅 방 입장 
- Socket.IO를 통해 실시간으로 5개의 문답진행

### 결과 페이지
- 백엔드로 부터 받은 mp3주소재생
- 결과 페이지 링크 공유 기능
