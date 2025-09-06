# NeuroVerse User Flowchart

## Overview
NeuroVerse is an AI-powered learning platform that uses real-time brainwave analysis to provide personalized education experiences. The platform supports two main user types: Students and Teachers.

## User Types & Entry Points

### 1. Unauthenticated Users
- **Entry Point**: Landing page (/)
- **Available Actions**: Browse public pages, Login/Register

### 2. Students
- **Entry Point**: After authentication
- **Primary Features**: Lessons, My Lessons, Progress Tracking

### 3. Teachers
- **Entry Point**: After authentication
- **Primary Features**: Reports, Manage Classes, Student Monitoring

---

## Complete User Flow

```mermaid
flowchart TD
    A[User Visits Website] --> B{User Authenticated?}
    
    B -->|No| C[Landing Page /]
    B -->|Yes| D{User Role?}
    
    C --> E[Browse Public Pages]
    E --> F[Features Page]
    E --> G[Benefits Page]
    E --> H[Contact Page]
    E --> I[Login/Register Button]
    
    I --> J[Authentication Page /auth]
    J --> K{Login or Register?}
    
    K -->|Login| L[Enter Credentials]
    K -->|Register| M[Fill Registration Form]
    
    L --> N{Valid Credentials?}
    M --> O{Valid Registration?}
    
    N -->|No| P[Show Error Message]
    N -->|Yes| Q[Redirect Based on Role]
    O -->|No| R[Show Validation Errors]
    O -->|Yes| Q
    
    P --> L
    R --> M
    
    D -->|Student| S[Student Dashboard]
    D -->|Teacher| T[Teacher Dashboard]
    
    Q --> S
    Q --> T
    
    %% Student Flow
    S --> U[Student Navigation Menu]
    U --> V[Lessons /lessons]
    U --> W[My Lessons /my-lessons]
    U --> X[Logout]
    
    V --> Y[Available Lessons Grid]
    Y --> Z{Select Lesson?}
    Z -->|Yes| AA[Lesson View /lessons/:id]
    Z -->|No| Y
    
    AA --> BB[Lesson Modules Sidebar]
    BB --> CC[Text Content]
    BB --> DD[Video Content]
    BB --> EE[Quiz Content]
    
    CC --> FF{EEG Attention < 40%?}
    DD --> GG[Continue Video]
    EE --> HH[Answer Questions]
    
    FF -->|Yes| II[Show Adaptive Modal]
    FF -->|No| JJ[Continue Text]
    
    II --> KK{Switch Content Type?}
    KK -->|Video| LL[Switch to Video]
    KK -->|Quiz| MM[Switch to Quiz]
    KK -->|Continue| JJ
    
    LL --> GG
    MM --> HH
    
    GG --> NN[Complete Video]
    HH --> OO[Complete Quiz]
    JJ --> PP[Complete Text Module]
    
    NN --> QQ[Mark as Complete]
    OO --> QQ
    PP --> QQ
    
    QQ --> RR[Return to Lessons List]
    RR --> Y
    
    W --> SS[Enrolled Courses]
    SS --> TT[Progress Dashboard]
    SS --> UU[Recent Activity]
    SS --> VV[Continue Learning Button]
    VV --> AA
    
    %% Teacher Flow
    T --> WW[Teacher Navigation Menu]
    WW --> XX[Reports /reports]
    WW --> YY[Manage Classes /manage-classes]
    WW --> ZZ[Logout]
    
    XX --> AAA[Classes Sidebar]
    AAA --> BBB[Select Class]
    BBB --> CCC[Students Grid]
    CCC --> DDD{Select Student?}
    DDD -->|Yes| EEE[Student Report /reports/:classId/:studentId]
    DDD -->|No| CCC
    
    EEE --> FFF[Student Analytics]
    FFF --> GGG[EEG Data]
    FFF --> HHH[Progress Charts]
    FFF --> III[Quiz Performance]
    FFF --> JJJ[AI Analysis]
    FFF --> KKK[Back to Students]
    KKK --> CCC
    
    YY --> LLL[Classes Management]
    LLL --> MMM[Class List]
    MMM --> NNN{Select Action?}
    
    NNN -->|View Reports| OOO[Go to Reports]
    NNN -->|Edit Class| PPP[Edit Class Modal]
    NNN -->|Add Student| QQQ[Add Student Modal]
    NNN -->|Remove Student| RRR[Remove Student Modal]
    
    OOO --> AAA
    PPP --> SSS[Update Class Info]
    QQQ --> TTT[Add New Student]
    RRR --> UUU[Remove Student]
    
    SSS --> MMM
    TTT --> MMM
    UUU --> MMM
    
    %% Logout Flow
    X --> VVV[Clear Session]
    ZZ --> VVV
    VVV --> A
```

## Key User Journeys

### Student Journey
1. **Landing** → **Login/Register** → **Student Dashboard**
2. **Browse Lessons** → **Select Lesson** → **Complete Modules** → **Track Progress**
3. **My Lessons** → **Continue Learning** → **Resume Progress**

### Teacher Journey
1. **Landing** → **Login/Register** → **Teacher Dashboard**
2. **Manage Classes** → **Add/Edit Students** → **View Reports**
3. **Reports** → **Select Class** → **Monitor Students** → **View Analytics**

### Adaptive Learning Features
- **Real-time EEG Monitoring**: Tracks student attention levels
- **Content Switching**: Automatically suggests video/quiz when attention drops
- **Progress Tracking**: Monitors completion rates and performance
- **AI Analysis**: Provides insights on learning patterns

## Decision Points

### Authentication
- **Login vs Register**: Users can choose to sign in or create new account
- **Role Selection**: Choose between Student or Teacher role
- **Validation**: Form validation and credential checking

### Content Navigation
- **Module Selection**: Students can navigate between different lesson modules
- **Content Type**: Switch between text, video, and quiz content
- **Adaptive Suggestions**: System suggests content changes based on attention

### Teacher Management
- **Class Selection**: Teachers can switch between different classes
- **Student Selection**: Choose specific students to monitor
- **Action Selection**: View reports, edit classes, or manage students

## Error Handling
- **Invalid Credentials**: Return to login with error message
- **Validation Errors**: Show specific field errors during registration
- **Access Control**: Redirect unauthorized users to appropriate pages
- **Missing Content**: Handle cases where lessons or students don't exist

## Success Paths
- **Lesson Completion**: Students can mark lessons as complete
- **Progress Tracking**: System tracks and displays learning progress
- **Analytics**: Teachers can view detailed student performance data
- **Session Management**: Users can logout and return to landing page 