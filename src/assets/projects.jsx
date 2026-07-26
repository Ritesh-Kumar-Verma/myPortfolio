import { assets } from "./assets" 


export const liveProjects = [{
  sample: assets.airesumeoptimizer,
  title: "AI Resume Optimizer",
  summary: {
    icons: ["📄", "🤖", "📥", "🎯", "⚡", "📑"],
    text: [
      "AI Resume Optimizer is a Streamlit-based Python application that tailors resumes to specific job descriptions using LLMs.",
      "Manual Form Mode: Easily input contact, education, and project details structured for resume generation.",
      "PDF Parser Mode: Instantly extract and populate information directly from existing PDF resumes.",
      "AI Tailoring Mode: Optimizes your resume against target Job Descriptions using Groq API for maximum ATS compatibility.",
      "PDF Export: Generates polished, downloadable PDF resumes dynamically using ReportLab.",
      "Built with Python, Streamlit, Groq AI, and PyPDF for fast and effective resume customization.",
    ],
  },
  url: "https://ai-resume-optimizer-rv.streamlit.app",
},
    {
      sample: assets.aijob,
      title: "AI job Search",
      summary: {
  icons: ["🤖", "🎯", "🌍", "🔐", "⚙️", "📱"],
  text: [
    <>AI Resume Engine: Uses <span className="text-cyan-300">Gemini API</span> with a fallback to <span className="text-cyan-300">Groq AI</span> to extract skills and summarize resumes with LLM precision.</>,
    <>Predictive Match Scoring: Calculates compatibility percentages between user skills and job requirements.</>,
    <>Live Market Integration: Fetches real-time job listings via <span className="text-cyan-300">Adzuna API</span> based on dynamic filters.</>,
    <>Secure Authentication: Built with <span className="text-cyan-300">Spring Security</span> and <span className="text-cyan-300">JWT</span> for encrypted, stateless user access.</>,
    <>Enterprise Backend: High-performance <span className="text-cyan-300">Java Spring Boot</span> architecture backed by <span className="text-cyan-300">PostgreSQL</span>.</>,
    <>Responsive Design: Fully optimized dark-themed UI for seamless desktop and mobile tracking.</>,
  ],
},
      url: "https://ritesh-kumar-verma.github.io/AI_Job_Search/",
    },
    {
      sample: assets.mapify,
      title: "Mapify",
      summary: {
        icons: ["📍", "🔎", "📤", "👥", "🗺️", "🔒"],
        text: [
          <>Mapify is a React-based location-sharing app.</>,
          <>Built with  <span className="text-cyan-300">Spring Security</span> and  <span className="text-cyan-300">JWT authentication</span></>,
          <>Search friends and connect</>,
          <>Request/share live locations</>,
          <>View locations on an interactive map</>,
          <>Built with privacy and real-time collaboration in mind.</>,
        ],
      },
      url: "https://ritesh-kumar-verma.github.io/Mapify/",
    },
    {
      sample: assets.expenseTracker,
      title: "Expense Tracker",
      summary: {
        icons: ["💰", "📊", "📝", "🔍", "🎨", "✅"],
        text: [
          "Expense Tracker is a React-based application that helps users monitor and manage their spending.",
          "Visualize total expenses with a dynamic graph",
          "View a detailed list of all transactions",
          "Track individual item costs with ease",
          "Clean and intuitive UI for better expense management",
          "Designed to make personal finance tracking simple and effective.",
        ],
      },
      url: "https://ritesh-kumar-verma.github.io/Expense-Tracker/",
    },
    {
      sample: assets.weatherify,
      title: "Weatherify",
      summary: {
        icons: ["⛅", "🌍", "🌡️", "🖼️", "📱", "🎨"],
        text: [
          "Weatherify is a responsive weather application built with React, fetching real-time data from the OpenWeather API.",
          "Search any city to view weather instantly",
          "Check temperature, humidity, and wind speed",
          "Get condition-specific weather icons",
          "Optimized for desktop and mobile devices",
          "Sleek and modern UI for a smooth experience",
        ],
      },
      url: "https://ritesh-kumar-verma.github.io/weatherify/",
    },
  ]
  