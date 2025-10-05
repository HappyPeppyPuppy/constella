# constella-client

## 폴더 구조

```
├─ app (app navigation)
│  // 전체 프로젝트에서 사용되는 코드
├─ components
├─ assets
├─ constants
├─ hooks
├─ ...
│
└─ domains
   │  // Domain1에서만 사용되는 코드
   ├─ Domain1
   │     ├─ components
   │     ├─ assets
   │     ├─ constants
   │     ├─ hooks
   │     └─ ...
   │
   │  // Domain2에서만 사용되는 코드
   └─ Domain2
         ├─ components
         ├─ assets
         ├─ constants
         ├─ hooks
         └─ ...
```
