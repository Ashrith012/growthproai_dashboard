# 🚀 GrowthProAI – Mini Local Business Dashboard

This project is my submission for the **GrowthProAI Full Stack Intern Assignment**.  
It demonstrates how small businesses might view their **SEO content** and **Google Business data** in a simple dashboard.

---

## 📌 **Project Objective**

Build a mini dashboard that:
- Lets you enter a **Business Name** and **Location**
- Displays a simulated **Google Rating**, **Number of Reviews**, and an **AI-generated SEO headline**
- Lets you **regenerate** a new SEO headline
- Shows a **loading spinner** to simulate a real-time delay

---

## 🛠️ **Tech Stack**

| Part      | Technology                 |
|-----------|----------------------------|
| Frontend  | React + Tailwind CSS       |
| Backend   | Node.js + Express (ES Modules) |
| Styling   | Tailwind CSS               |
| Deploy    | _(optional)_ Vercel / Netlify for frontend, Render for backend |

---

## ✅ **Features**

- 📄 **Input Form:** Business Name & Location
- 📊 **Display Card:** Google Rating, Reviews, SEO Headline
- 🔁 **Regenerate Headline:** New AI-style headline from backend
- ⏳ **Loader Spinner:** Simulated delay for better UX
- 📱 **Responsive:** Fully mobile-friendly with Tailwind CSS

---

## ⚙️ **Run Locally**

### 1️⃣ Clone the repo


git clone https://github.com/YOUR_USERNAME/GrowthProAI.git <br>
cd GrowthProAI


### 2️⃣ Install Backend
cd backend <br>
npm install

## Run backend:
node server.js

Server runs on http://localhost:5000 by default.

### 3️⃣  Install Frontend

cd ../frontend <br>
npm install

## Run frontend:
npm start

App runs on http://localhost:3000 by default.

## 🌐 API Endpoints

| Method | Endpoint                   | Description                                                               |
| ------ | -------------------------- | ------------------------------------------------------------------------- |
| POST   | `/api/business-data`       | Submit Business Name & Location. Returns rating, reviews, and a headline. |
| GET    | `/api/regenerate-headline` | Regenerates a new AI-style headline.                                      |


## 🧩 Folder Structure

```plaintext
GrowthProAI/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── server.js
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BusinessForm.jsx
│   │   │   ├── BusinessCard.jsx
│   │   │   ├── Loader.jsx
│   │   ├── api/
│   │   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── ...
│   └── ...
└── README.md

```
## 🌐 **Deployed Links**

| Part       | Link                                                                 |
|------------|----------------------------------------------------------------------|
| **Frontend** | [View on Vercel](https://growthproai-dashboard-ashriths-projects-8f83587b.vercel.app/)                  |
| **Backend**  | [View on Render](https://growthproai-dashboard-lo62.onrender.com/api) |
