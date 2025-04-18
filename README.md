# 🎮 **Chill Gamer**

**A Game Review Application**

[**Live Site URL**](https://chill-gamer-main.netlify.app/) https://chill-gamer-main.netlify.app/

---

## **About Chill Gamer**

Chill Gamer is a user-friendly platform for gamers to explore and share reviews of their favorite games. With features like authentication, review management, and a clean, responsive design, it provides a seamless and enjoyable experience for all users. Whether you’re rating your favorite RPG or browsing reviews for the latest action game, Chill Gamer has you covered.

---

## **Key Features**

🎮 **User Authentication**:

- Email and password-based login/register.
- OAuth with Google for a streamlined login experience.
- User avatar and profile display.

🌟 **Game Reviews**:

- Add, update, and delete game reviews with properties like title, description, genres, rating, and more.
- View highest-rated games and detailed reviews.
- Filter and sort reviews by rating, year, or genre.

🕹️ **Watch List Management**:

- Add games to a personal watch list and manage it in a dedicated section.

📱 **Responsive Design**:

- Optimized for mobile, tablet, and desktop devices.

🌑 **Dark/Light Mode**:

- Toggle between dark and light themes for a personalized experience.

---

## Installation and Setup

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/farahsamsi/Chill-Gamer-Client.git
    ```

2.  **Navigate to the Project Directory:**

    ```bash
    cd Chill-Gamer-Client
    ```

3.  **Install Dependencies:**

    - Client:
      ```bash
      npm install
      ```

4.  **Set Environment Variables:**

    - Create a `.env` file in `client` directories.
    - Add the following variables: - For the client:

      ```env
      VITE_API_URL=your_backend_api_url
      VITE_FIREBASE_API_KEY=your_firebase_api_key
      VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
      VITE_FIREBASE_PROJECT_ID=your_project_id
      VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
      VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
      VITE_FIREBASE_APP_ID=your_app_id
      ```

5.  **Run the Application:**

    - Start the client:
      ```bash
      npm run dev
      ```

---

## **Technologies Used**

### **Frontend**

- **React.js**
- **Tailwind CSS** and **daisyUI** for styling.
- **React Router** for navigation.
- **React-toastify** and **Sweet Alert** for user notifications.
- **Additional Libraries**:
  - React-simple-typewriter
  - React Awesome Reveal
  - React-tooltip
  - React Icons
  - React rating-stars-component

### **Backend**

- **Node.js** and **Express.js** for the server.
- **MongoDB** as the database.

### **Authentication**

- **Firebase Authentication** for secure user login and registration.

### 🌐 **Hosting**

- **Netlify** for the client.
- **Vercel** for server-side deployment.

---
