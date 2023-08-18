# BDD-TEST-REPORT

![screenshot](https://i.imgur.com/mWghtJR.png)

BDD 기반의 패턴을 이용하여 테스트 코드를 작성할 때
계층 구조로 테스트가 만들어지기 떄문에 word나 excel로 정리하기가 매우 애매한 점이 있었습니다.
그래서 계층구조를 이용하여 테스트를 정리하고 시각적으로 보여줄 수 있는 리포트 페이지를 만들어보았습니다.

## 시작하기

`pnpm start`

## 테스트 케이스 작성

`src/tests.json` 를 예시로 참고하여 테이스 케이스를 정리하면 그에 따라 화면이 구성이 됩니다.

`status`에는 아래 값들이 있습니다.

- unknown
- pass
- fail
- blocked

`type`에는 아래 값들이 있습니다.

- group
- describe (+ context)
- it (+ test)

## 구현 방향

### 현재 구현 사항

- json 파일을 기반으로 보고서 페이지 생성

### 추후 개선 방향

- 그룹(도메인)별 페이지 분리
- 브라우저 내에서 테스트 추가 가능하도록 기능
- 테스트 아이템 접을 수 있도록 (collapsible) 기능 추가
- 테스트 성공 비율 표시
- 테스트 케이스 연결
- 로컬 json 말고 data source를 사용할 수 있도록 수정
- 체크 내역 저장
- 데이터 추출하기 (word/excel/pdf ...)
- 등등

## 참고자료

[JUnit5로 계층 구조의 테스트 코드 작성하기](https://johngrib.github.io/wiki/junit5-nested/)
