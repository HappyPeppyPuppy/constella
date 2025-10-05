# constella-server

## 폴더 구조

```
└─ src
  │  // 전체 프로젝트에서 사용되는 코드
  ├─ libs
  ├─ constants
  ├─ ...
  │
  └─ routes
      │  // Domain1에서만 사용되는 코드
      ├─ Domain1
      │   ├─ libs
      │   ├─ constants
      │   └─ ...
      │
      │  // Domain2에서만 사용되는 코드
      └─ Domain2
          ├─ libs
          ├─ constants
          └─ ...
```

- 각 route의 index에서 Route export
- 각 route에 대한 라우팅 정보는 routes/index 에서 정의
- routes/index에서는 모든 route들을 합친 Router export
