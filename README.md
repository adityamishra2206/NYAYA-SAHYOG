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

##Dependencies

  "dependencies": {
    "@radix-ui/react-accordion": "^1.2.4",
    "@radix-ui/react-dropdown-menu": "^2.1.7",
    "@radix-ui/react-label": "^2.1.3",
    "@radix-ui/react-select": "^2.1.7",
    "@radix-ui/react-slot": "^1.2.0",
    "@radix-ui/react-tabs": "^1.1.4",
    "@radix-ui/react-toast": "^1.2.7",
    "@radix-ui/react-tooltip": "^1.2.0",
    "@tanstack/react-query": "^5.72.2",
    "axios": "^1.8.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.487.0",
    "next-themes": "^0.4.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hot-toast": "^2.5.2",
    "sonner": "^2.0.3",
    "tailwind-merge": "^3.2.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@eslint/js": "^9.21.0",
    "@types/node": "^22.14.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.21.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^15.15.0",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.1",
    "typescript": "~5.7.2",
    "typescript-eslint": "^8.24.1",
    "vite": "^6.2.0"
  }
}

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

MONGO_URI = your_mongodb_URI
PORT=5000
JWT_SECRET= your_JWT_secret
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
