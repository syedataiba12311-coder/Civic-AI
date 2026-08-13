# 🚀 CivicAI — AI-Powered Civic Complaint & Smart Routing Platform

> Smarter Cities Start With Smarter Reporting.

CivicAI is an AI-powered civic technology platform that transforms the way citizens report and track public infrastructure and community issues.

Instead of requiring citizens to figure out **which department or government authority is responsible**, CivicAI uses AI to analyze the complaint, identify the issue category, determine its priority, use the user's location, and intelligently route the complaint toward the appropriate authority through an authorized government integration.

The platform is designed to create a complete journey:

**Report → Understand → Route → Track → Resolve**
<img width="1882" height="906" alt="image" src="https://github.com/user-attachments/assets/9f662693-d7d6-4287-8bb7-4cdb65f064a4" />

<img width="1885" height="897" alt="image" src="https://github.com/user-attachments/assets/664c273e-5490-405e-8164-cf00803d8211" />
<img width="1856" height="876" alt="image" src="https://github.com/user-attachments/assets/3fc6fc54-53ae-4189-8377-430b33a1407c" />


## 🌍 Problem

Citizens frequently encounter problems such as:

* 🛣️ Potholes and damaged roads
* 💧 Water leaks
* 🗑️ Garbage and illegal dumping
* 💡 Broken streetlights
* 🚰 Sewerage problems
* 🏗️ Damaged public infrastructure
* 🌳 Other municipal issues

The problem is that citizens often don't know:

* Which government department handles the issue
* Where to submit the complaint
* How urgent the issue is
* Whether the complaint has reached the correct authority
* What is happening after submission

This creates delays, duplicate complaints, poor routing, and limited visibility for citizens.

---

# 💡 Our Solution

CivicAI acts as an intelligent layer between citizens and government service systems.

A citizen simply reports an issue using an image, description, location, or voice.

CivicAI then:

1. 📸 Receives the complaint
2. 🧠 Uses AI to analyze the issue
3. 📍 Determines the location
4. 🏷️ Classifies the complaint
5. 🚨 Determines priority
6. 🏢 Identifies the responsible department
7. 🔀 Routes the complaint through the appropriate integration
8. 🆔 Stores the external government complaint ID
9. 📊 Allows citizens to track progress
10. 🔔 Provides status updates

---

# ⭐ Core Workflow

```text
                    CITIZEN
                       │
                       ▼
                Report an Issue
                       │
              ┌────────┼────────┐
              │        │        │
             📷       🎤       📍
            Image    Voice    Location
              │        │        │
              └────────┼────────┘
                       ▼
                  CIVICAI API
                       │
                       ▼
                  GEMINI AI
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
     Category       Priority       Summary
        │              │              │
        └──────────────┼──────────────┘
                       ▼
                 ROUTING ENGINE
                       │
                       ▼
              GOVERNMENT ROUTER
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       Roads         Water       Sanitation
       Adapter       Adapter       Adapter
          │            │            │
          └────────────┼────────────┘
                       ▼
              Government System
                       │
                       ▼
             External Complaint ID
                       │
                       ▼
                  FIRESTORE
                       │
              ┌────────┴────────┐
              ▼                 ▼
          CITIZEN             ADMIN
          PORTAL              CENTER
```

---

# 🧠 AI-Powered Analysis

CivicAI uses Google's Gemini AI to analyze submitted complaints.

For an uploaded image, the AI can determine:

```json
{
  "category": "road_damage",
  "issue": "pothole",
  "priority": "high",
  "confidence": 96.4,
  "summary": "A large pothole has been detected on the roadway."
}
```

The AI output is then used by the routing engine to determine where the complaint should go.

---

# 🎯 Main Features

## 👤 Citizen Portal

Citizens can:

* Register and log in
* Report civic issues
* Upload images
* Provide descriptions
* Share their location
* Submit voice complaints
* View AI analysis
* Track complaints
* View complaint history
* Receive notifications
* View resolution evidence

---

## 🤖 AI Complaint Analysis

CivicAI analyzes complaints and automatically determines:

* Issue category
* Issue description
* Priority
* AI confidence
* Responsible department
* Suggested routing

Example:

```text
Image
  ↓
AI Vision
  ↓
Road Damage
  ↓
High Priority
  ↓
Road Authority
```

---

## 📍 Location Intelligence

The system uses geographic information to improve routing.

```text
GPS Coordinates
       ↓
Location Processing
       ↓
City / Area
       ↓
Government Authority
```

This allows the same type of complaint to be routed differently depending on where it occurs.

---

# 🔀 Intelligent Government Routing

The routing engine combines:

```text
AI Category
+
Location
+
Government Route Configuration
```

to determine the appropriate authority.

Example:

```text
Road Damage
+
Islamabad
        ↓
Road Authority
```

Another example:

```text
Water Leakage
+
Islamabad
        ↓
Water Authority
```

---

# 🏢 Government Integration Architecture

CivicAI is designed around an **adapter-based integration architecture**.

This allows different government systems to be connected without changing the citizen-facing application.

```text
CivicAI
   │
   ▼
Routing Engine
   │
   ├── Government Adapter A
   │
   ├── Government Adapter B
   │
   ├── Government Adapter C
   │
   └── Mock Government Adapter
```

Each adapter can expose a common interface:

```text
submitComplaint()
getComplaintStatus()
updateComplaint()
```

Where an official government API or authorized integration is available, CivicAI can use that connector.

Where no authorized API is available, the platform can use a configured fallback workflow or a mock integration for demonstration purposes.

> **Important:** CivicAI does not claim direct integration with a government portal unless official API access or authorization has been provided.

---

# 🔄 Complaint Lifecycle

Every complaint follows a structured lifecycle:

```text
Pending
   ↓
Assigned
   ↓
In Progress
   ↓
Resolved
```

The citizen can see the current status from their dashboard.

---

# 🆔 External Government Tracking

When an authorized government integration accepts a complaint, CivicAI stores the external reference.

Example:

```json
{
  "civicAiId": "CA-10024",
  "externalComplaintId": "GOV-123456",
  "authority": "Road Authority",
  "status": "submitted"
}
```

This allows CivicAI to maintain a connection between its internal complaint and the corresponding government record.

---

# 📊 Admin Center

Government or authorized administrative users can:

* View complaints
* Filter complaints
* View complaint locations
* View AI classifications
* Review priority
* Assign departments
* Update complaint status
* Add internal notes
* Upload resolution evidence
* View analytics

---

# 🗺️ Smart Complaint Map

Complaints can be displayed geographically.

Example priority visualization:

```text
🔴 Critical
🟠 High
🟡 Medium
🟢 Resolved
```

Administrators can identify areas with a high concentration of civic problems.

---

# 📈 Analytics

The Admin Center can provide:

* Total complaints
* Pending complaints
* Resolved complaints
* Critical complaints
* Complaints by category
* Complaints by department
* Resolution rate
* Average resolution time
* Geographic complaint distribution

---

# 🔔 Notifications

Citizens receive updates as their complaint progresses.

Example:

```text
✅ Complaint Received

Your complaint CA-10024 has been successfully submitted.
```

```text
🏢 Complaint Assigned

Your complaint has been assigned to the relevant department.
```

```text
🔧 Work In Progress

The responsible department is currently working on your issue.
```

```text
✅ Complaint Resolved

Your reported issue has been marked as resolved.
```

---

# 🧩 Technology Stack

## Frontend

| Technology              | Purpose                         |
| ----------------------- | ------------------------------- |
| React.js                | Frontend application            |
| JavaScript              | Application logic               |
| CSS / Responsive UI     | Interface design                |
| React Router            | Navigation                      |
| Axios / Fetch           | API communication               |
| Leaflet / OpenStreetMap | Maps and location visualization |

## Backend

| Technology              | Purpose                      |
| ----------------------- | ---------------------------- |
| Node.js                 | Server runtime               |
| Express.js              | REST API                     |
| Firebase Admin SDK      | Backend Firebase integration |
| Firestore               | Database                     |
| Firebase Authentication | User authentication          |
| Multer                  | File uploads                 |
| Cloudinary              | Image storage                |
| Gemini API              | AI analysis                  |
| Helmet                  | API security                 |
| CORS                    | Cross-origin configuration   |
| Express Validator       | Request validation           |
| Morgan                  | HTTP logging                 |

---

# 🏗️ System Architecture

```text
┌─────────────────────────────────────────┐
│              React Frontend             │
│                                         │
│ Citizen Portal │ Admin Center │ Map     │
└───────────────────┬─────────────────────┘
                    │
                    │ REST API
                    ▼
┌─────────────────────────────────────────┐
│             Express Backend             │
│                                         │
│ Auth │ Complaints │ AI │ Routing │ Admin│
└───────┬─────────────┬───────────┬───────┘
        │             │           │
        ▼             ▼           ▼
    Firebase       Gemini     Government
    Firestore        AI        Adapters
        │             │           │
        │             │           ▼
        │             │     Government APIs
        │             │
        │             ▼
        │          AI Results
        │
        ▼
     Complaint
       Data
```

---

# 📁 Project Structure

```text
CivicAI/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── utils/
│   │   └── App.jsx
│   │
│   ├── public/
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   ├── firebase.js
│   │   │   ├── cloudinary.js
│   │   │   └── gemini.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   ├── complaint.controller.js
│   │   │   ├── ai.controller.js
│   │   │   └── admin.controller.js
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   ├── complaint.routes.js
│   │   │   ├── ai.routes.js
│   │   │   └── admin.routes.js
│   │   │
│   │   ├── services/
│   │   │   ├── ai.service.js
│   │   │   ├── complaint.service.js
│   │   │   ├── routing.service.js
│   │   │   └── notification.service.js
│   │   │
│   │   ├── integrations/
│   │   │   ├── government.adapter.js
│   │   │   ├── mock-government.adapter.js
│   │   │   └── government.router.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.middleware.js
│   │   │   ├── upload.middleware.js
│   │   │   └── error.middleware.js
│   │   │
│   │   ├── prompts/
│   │   │   └── complaint.prompt.js
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── uploads/
│   ├── .env
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# 🔌 API Endpoints

## Health

```http
GET /api/health
```

Response:

```json
{
  "status": "ONLINE",
  "message": "CivicAI Backend Operational"
}
```

---

## Authentication

```http
POST /api/auth/register
POST /api/auth/login
POST /api/auth/sync-profile
GET /api/auth/profile
```

---

## Complaints

```http
POST /api/complaints
GET /api/complaints
GET /api/complaints/:id
PUT /api/complaints/:id
DELETE /api/complaints/:id
```

---

## AI

```http
POST /api/ai/scan-image
POST /api/ai/analyze
```

---

## Admin

```http
GET /api/admin/dashboard
GET /api/admin/analytics
PUT /api/admin/assign
PUT /api/admin/status
```

---

# 🗄️ Firestore Data Model

## Users

```text
users/
    userId/
        name
        email
        role
        createdAt
```

Possible roles:

```text
citizen
admin
officer
```

---

## Complaints

```text
complaints/
    complaintId/
        userId
        description
        imageUrl
        category
        priority
        confidence
        latitude
        longitude
        address
        authority
        department
        status
        externalComplaintId
        createdAt
        updatedAt
```

---

## Notifications

```text
notifications/
    notificationId/
        userId
        title
        message
        type
        isRead
        createdAt
```

---

## Government Routes

```text
government_routes/
    routeId/
        category
        city
        authority
        department
        integrationType
        enabled
```

---

# 🔐 Environment Variables

Create a `.env` file inside the backend:

```env
PORT=5000

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

GOOGLE_MAP_API_KEY=your_google_maps_api_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Never commit `.env` or Firebase service-account credentials to GitHub.

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/CivicAI.git

cd CivicAI
```

---

## 2. Install Frontend Dependencies

```bash
cd client

npm install
```

---

## 3. Install Backend Dependencies

```bash
cd ../server

npm install
```

---

## 4. Configure Environment Variables

Create:

```text
server/.env
```

and add the required API keys.

---

## 5. Start Backend

```bash
cd server

npm run dev
```

Backend:

```text
http://localhost:5000
```

Health check:

```text
http://localhost:5000/api/health
```

---

## 6. Start Frontend

Open another terminal:

```bash
cd client

npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# 🧪 Backend Verification

The current backend can be tested with:

```bash
GET http://localhost:5000/api/health
```

Expected response:

```json
{
  "status": "ONLINE",
  "message": "CivicAI Backend Operational"
}
```

AI image analysis:

```http
POST /api/ai/scan-image
```

Complaint retrieval:

```http
GET /api/complaints
```

---

# 🔄 End-to-End Example

A citizen discovers a pothole.

### Step 1 — Report

The citizen uploads an image and shares their location.

### Step 2 — AI Analysis

Gemini identifies:

```text
Issue: Pothole
Category: Road Damage
Priority: High
Confidence: 96%
```

### Step 3 — Routing

CivicAI combines:

```text
Road Damage
+
Location
```

and determines the appropriate authority.

### Step 4 — Government Integration

If an authorized government API is available:

```text
CivicAI
    ↓
Government Adapter
    ↓
Government API
    ↓
External Complaint ID
```

### Step 5 — Tracking

The citizen receives:

```text
Complaint ID: CA-10024

Status: In Progress
Authority: Road Department
```

### Step 6 — Resolution

The authority resolves the issue and the status becomes:

```text
Resolved
```

The citizen receives a notification.

---

# 🛡️ Security Considerations

CivicAI is designed with security in mind.

The production implementation should include:

* Firebase token verification
* Server-side role authorization
* Request validation
* File type validation
* File size limits
* API rate limiting
* Secure environment variables
* Restricted CORS
* Firestore security rules
* Protected admin endpoints
* Secure government API credentials
* Audit logging

---



# 🗺️ Roadmap

## Phase 1 — MVP

* [x] Frontend foundation
* [x] Backend foundation
* [x] Firebase
* [x] Gemini integration
* [ ] Complete report workflow
* [ ] Complaint tracking

## Phase 2 — Smart Routing

* [ ] Location-based routing
* [ ] Government route database
* [ ] Adapter architecture
* [ ] Mock government integration
* [ ] Authorized government API integrations

## Phase 3 — Government Operations

* [ ] Admin dashboard
* [ ] Department assignment
* [ ] Status management
* [ ] Resolution evidence
* [ ] Notifications

## Phase 4 — AI Intelligence

* [ ] Duplicate complaint detection
* [ ] AI priority optimization
* [ ] Voice complaint processing
* [ ] CivicAI assistant
* [ ] Geographic issue clustering

## Phase 5 — Production

* [ ] Automated testing
* [ ] Security audit
* [ ] Production deployment
* [ ] Monitoring
* [ ] Performance optimization

---

# 🌟 Future Vision

CivicAI aims to become an intelligent interoperability layer for civic services.

Instead of citizens asking:

> **"Where should I report this?"**

CivicAI should make the process:

> **"Tell us what happened. We'll understand it, find the right authority, route it, and help you track it."**

The long-term vision is to connect multiple civic departments and authorized government systems through a standardized integration architecture.

---

# 🏆 Hackathon Focus

CivicAI demonstrates how AI can be used beyond chatbots and content generation to solve a real-world infrastructure and governance problem.

### Key Innovation

**AI + Location Intelligence + Automated Classification + Smart Routing + Government Interoperability**

The goal is not simply to create another complaint form.

The goal is to create an intelligent bridge between:

```text
Citizens
   ↕
CivicAI
   ↕
Government Services
```

---

# 👩‍💻 Project

**CivicAI — AI Public Complaint Platform**

Built for an AI Innovation / Smart City Hackathon.

### Core Technologies

`React` `Node.js` `Express` `Firebase` `Firestore` `Gemini AI` `Cloudinary` `OpenStreetMap` `Leaflet`

---
