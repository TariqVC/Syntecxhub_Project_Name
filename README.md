# 🌤️ Weather Forecasting App

A full-stack weather forecasting app built with React and Node.js for the SyntecxHub Internship program. 
It displays real-time weather data including current conditions, hourly forecasts, and a 7-day weekly forecast — with dynamic backgrounds 
and animated weather effects.

---

## ✨ Features

- 🔍 Search weather for any city in the world
- 🌡️ Current conditions — temperature, feels like, wind, humidity & UV index
- 🕐 Hourly forecast with rain probability
- 📅 7-day weekly forecast
- 🎨 Dynamic backgrounds based on time of day (sunrise, day, sunset, night)
- ⛈️ Animated weather effects — rain, thunder, clouds, sun, wind & stars
- ❌ Error handling for invalid city searches

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- CSS — glassmorphism cards, animations & responsive layout
- date-fns — local time parsing per city

**Backend**
- Node.js
- Express
- WeatherAPI — real-time weather data


## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- A free API key from [WeatherAPI](https://www.weatherapi.com/)

### 1. Clone the repository

```bash
git clone https://github.com/TariqVC/Syntecxhub_Weather_App.git
cd Syntecxhub_Weather_App
```

### 2. Set up the backend

```bash
cd server
npm install
```

Create a `.env` file in the `server` folder:

```
API_KEY=your_weatherapi_key_here
```

Start the backend server:

```bash
node index.js
```

The server will run on **http://localhost:5000**

### 3. Set up the frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The app will run on **http://localhost:5173**

---

## ⚙️ Environment Variables

| Variable  | Description                          |
|-----------|--------------------------------------|
| `API_KEY` | Your WeatherAPI key (server/.env)    |

> Never commit your `.env` file. Make sure it is listed in `.gitignore`.


## 👤 Author

**Tariq** — [GitHub](https://github.com/TariqVC)

Built as part of the [SyntecxHub](https://syntecxhub.com) Internship Program.
