# NYAYA-SAHYOG
# 🇮🇳 NyayaSahyog – Empowering Citizens Through Legal Awareness

#PPT  link:- https://docs.google.com/presentation/d/1MGyU34aQjlba50w_DZ8ysd5iPZHcSZG4/edit?usp=sharing&ouid=103675097226648723818&rtpof=true&sd=true

NyayaSahyog is a modern, responsive, and accessible website built to educate Indian citizens on their **legal rights**, **access to justice**, and **social justice systems**. The platform aims to break down complex legal concepts into easy-to-understand content and tools, enabling users to become informed and empowered citizens.

---

## ✨ Features

- ✅ **Authentication & Authorization**
              - Secure Signup/Login
              - JWT Token-based authentication with httpOnly cookies
              - Role-based access (Lawyer/Client)
            - 🌗 **Dark Mode Support**
              - User-toggleable dark/light theme with persistent preference
            - 📚 **Comprehensive Legal Sections**
              - Fundamental Rights (Equality, Freedom, Life, Education, Remedies)
              - Legal Aid & Access to Justice
              - RTI (Right to Information)
              - FIR and Police System Guide
              - Court System Overview with Case Tracker Tool (planned)
              - Landmark Judgments with simplified summaries
              - Women and Child Protection Laws
              - Cyber Law and Digital Safety
              - PIL and Environmental Justice
              - Human Rights and Anti-Discrimination Laws
            - 💻 **Responsive Design**
              - Fully optimized for desktop views
            - 🧩 **Component-based Architecture**
              - Built using `shadcn/ui` for sleek, modern components
            - 🧠 **Educational UX**
              - Simple, jargon-free language to promote public understanding
              - Icons, cards, and illustrations to improve user experience

---

## 🛠️ Tech Stack

### 🌐 Frontend

  - **React** with **TypeScript**
  - **Tailwind CSS** for utility-first styling
  - **shadcn/ui** for high-quality, accessible UI components
  - **React Router** for client-side routing
  - **Context API** for global state management

### 🔐 Backend (Authentication)

- Authentication handled via secure token-based login
- **JWT (JSON Web Tokens)** for auth
- **httpOnly Cookies** to prevent XSS/token theft
- Optional: Role-based route protection

---

## 🧪 Setup Instructions

Follow these steps to run the project locally on your machine:

---

### 📁 1. Clone the Repository

  
  git clone https://github.com/adityamishra2206/NYAYA-SAHYOG.git
  cd nyayasahyog


⚙️ 2. Setup the Backend

  cd backend
  npm install nodemon express mongoose jsonwebtoken bcryptjs cookie-parser



  Create a .env file inside the /server directory:

  PORT=5000
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  COOKIE_SECRET=your_cookie_secret
  ✅ Replace the above values with your actual MongoDB URI and secrets.

  Run the Backend Server

  npm run dev


🎨 3. Setup the Frontend

   create vite@latest
   project-name :- frontend
   cd frontend
   npm install
   npm run dev



🌐 4. Access the App


   Frontend: http://localhost:5173

   Backend API: http://localhost:5000/api

   🧪 Optional: Testing Auth
   To test login/signup:

   Visit /signup to create a new account.

   After successful login, an httpOnly cookie will store the token.

   Protected routes (like /profile) will verify authentication using the token.


🧠 Future Enhancements

  📌 Court Case Tracker using eCourts API

  🗺️ Map integration for Legal Aid Centers

  📑 RTI auto-form generator

  🏛️ Admin dashboard for content management

  🛡️ Two-factor authentication

  🤝 Contributions
  All contributions are welcome! You can help with:

  UI/UX improvements

  New legal sections or articles

  Bug fixes and optimizations

  Translation into regional languages

  🧾 License
  This project is open-source under the MIT License.

📬 Contact
  Have suggestions or want to collaborate?

  📧 Email: [madityakumar2206@gmail.com]
  🐙 GitHub: [github.com/adityamishra2206]

“Justice will not be served until those who are unaffected are as outraged as those who are.”
— Benjamin Franklin

## Contributors

- ByteForge Team (NIT Patna)
```
