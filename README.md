📘 Wish Wallet

A simple MERN-based budgeting and savings goal tracker






📌 Overview

Wish Wallet is a full-stack personal finance tracker that helps users manage:

💵 Income

🧾 Expenses

🎁 Savings goals (“wishes”)

The app provides a simple dashboard showing overall financial health, progress toward goals, and CRUD management for all entries.

Built using the MERN stack:

MongoDB (data modeling & persistence)

Express.js (RESTful backend API)

React (UI + components)

Node.js (server runtime)

This project was created as a bootcamp capstone to demonstrate full-stack development skills.

✨ Features
✔ Income Tracking

Add, edit, delete income entries

View all earnings in one place

✔ Expense Tracking

Track expenses across categories

Filter & edit individual expenses

✔ Wish (Goal) Tracking

Create saving goals (“wishes”)

Track saved progress vs. target

Optional: update progress amounts

✔ Dashboard Overview

Total income

Total expenses

Current balance

Total saved across all wishes

🏗 Tech Stack
Layer	                Technologies
Frontend	            React, React Router, Axios, TailwindCSS
Backend	                Node.js, Express.js, Mongoose
Database	            MongoDB / MongoDB Atlas
Tools	                Git, VSCode, Postman

📂 Folder Structure
wish-wallet/
│
├── backend/
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── routes/
│   │   ├── incomeRouter.js
│   │   ├── expenseRouter.js
│   │   └── wishRouter.js
│   ├── controllers/
│   ├── models/
│   └── middleware/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── api/
│   │   └── App.jsx
│   ├── public/
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json

🛠 API Routes
### Income Routes (/incomes)
Method	       Endpoint	    Description
GET	    /incomes	        Get all incomes
POST	/incomes	        Create a new income
GET	    /incomes/:incomeId	Get one income
PUT	    /incomes/:incomeId	Update income
DELETE	/incomes/:incomeId	Delete income

Expense Routes (/expenses)
Method	        Endpoint	    Description
GET	    /expenses	            Get all expenses
POST	/expenses	            Create expense
GET	    /expenses/:expenseId	Get one expense
PUT	    /expenses/:expenseId	Update expense
DELETE	/expenses/:expenseId	Delete expense

Wish Routes (/wishes)
Method	       Endpoint	            Description
GET	    /wishes	                    Get all wishes
POST	/wishes	                    Create a new wish
GET	    /wishes/:wishId	            Get wish
PUT	    /wishes/:wishId	            Update wish
DELETE	/wishes/:wishId	            Delete wish
PATCH	/wishes/:wishId/progress	Update savedAmount

🚀 Getting Started
1. Clone the Repository
git clone https://github.com/<your-username>/wish-wallet.git
cd wish-wallet

🔧 Backend Setup
Install dependencies
cd backend
npm install

Create .env
MONGO_URI=your_mongodb_connection_string
PORT=3000

Run backend server
npm run dev

🎨 Frontend Setup
Install frontend dependencies
cd frontend
npm install

Start frontend
npm run dev


Frontend runs at: http://localhost:5173/

Backend runs at: http://localhost:3002/

🧪 Testing the API

Use tools like Postman or Thunder Client to hit:

GET http://localhost:3002/incomes
POST http://localhost:3002/expenses
PATCH http://localhost:3002/wishes/:wishId/progress

📸 Screenshots (Optional)

(Add these later)

Dashboard	    Wishes	        Expenses
(screenshot)	(screenshot)	(screenshot)

📎 Future Enhancements

User authentication + private dashboards

Monthly budget planner

Category analytics charts

Multi-wish savings distribution

Mobile UI optimizations