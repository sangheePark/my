

0. 리엑트 가이드
    - 기본: https://react.vlpt.us/basic/
    - 리엑트 디자인 패턴: https://velog.io/@holim0/React-Design-Pattern


1. 전역 상태 관리(클라이언트 상태 관리)
    - redux: 상태 관리 https://jeonghwan-kim.github.io/dev/2019/07/15/react-redux-ts.html
    - redux-Saga: 상태 흐름 정의 https://mskims.github.io/redux-saga-in-korean
    - redux-persist: localStorege에 상태 저장 https://medium.com/humanscape-tech/redux-persist-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-2077c9e566d9
    - deox: 상태 관리 아키텍처를 위한 유틸리티(reduce, action maker) https://www.npmjs.com/package/deox


2. React-Query(서버 상태 관리)
    - 공식 페이지: https://react-query.tanstack.com/guides/window-focus-refetching
    - 배민 기술 블로그 발취: https://techblog.woowahan.com/6339/
    - 한글 메뉴얼: https://velog.io/@familyman80/React-Query-%ED%95%9C%EA%B8%80-%EB%A9%94%EB%89%B4%EC%96%BC


3. 프로젝트 구조 및 가이드
    - 공통: 
        - 네이밍: 
            1. 파일명, class, interface, enum, type, React.FC 의 네이밍은 파스칼 케이싱
                - 파일명은 각 폴더별 대문자 사용.
                - class 첫 글자는 대문자 "C"로 한다. ex) CCommon
                - interface 첫 글자는 대문자 "I"로 한다. ex) IProps
                - enum  첫 글자는 대문자 "E"로 한다. ex) ECommon

            2. 매서드, 변수명은 캐멀 케이싱
                - 첫 번째 단어를 제외한 단어의 첫 글자는 대문자로 한다. ex) sayHello, loadList, addUser
                - 조회 = 목록일 경우 대상의 단어의 복수형, 단건의 조회일 경우 단일형( ex => 복수 = users , 단일 = user), 등록 = add, 수정 = edit, 삭제 = remove
    - src
        - assets: 디자인 관련 파일
            - css: 스타일 시트
            - font: 폰트
            - images: 이미지 파일
        - component: 단일 콤포넌트
        - enum: 열거형 상수
            - UI에서 사용되는 상수형 코드 처리.
        - mock: API 테스트 데이터
        - model: Data entity
        - module: 
            - action: 전역 상태 action 정의
                - 파일 네이밍 Action을 접미어로 사용. ex) UserAction
            - reducer:  전역 상태 변경 시 매서드 정의
                - 파일 네이밍 Reducer를 접미어로 사용. ex) UserReducer
            - routine: 상태 관리 사용시 설정 유틸리티
            - saga: 비동기 상태 관리 처리
                - 파일 네이밍 Saga를 접미어로 사용. ex) UserSaga
        - service: API
            - 파일 네이밍 Service를 접미어로 사용. ex) UserService
        - view: 화면 페이지 
            - 각 폴더 아래 container(상태 관리 및 데이터 관리에 대한 관점) + Presenter(화면 보여지는것에 대한 관점) 구성