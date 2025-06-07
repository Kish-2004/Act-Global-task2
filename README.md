# 🎓 Student Manager App

A simple and elegant **full-stack web application** to manage student records using:

- ✅ **Spring Boot** (Backend)
- ✅ **React + Vite** (Frontend)
- ✅ **MySQL** (Database)
- ✅ **Axios** for HTTP requests
- ✅ **Bootstrap + Custom CSS** for styling

---
## 📷 Screenshot

![Student-app](https://github.com/user-attachments/assets/db8a68ea-48e0-461d-a7ee-81341be8cca1)

---

## 🚀 Features

- 📋 View student list  
- ➕ Add new student  
- ✏️ Edit existing student  
- ❌ Delete student  
- 🎨 Beautiful UI with centered layout and responsive design  

---

## 🛠️ Tech Stack

| Frontend        | Backend        | Database |
|----------------|----------------|----------|
| React + Vite   | Spring Boot    | MySQL    |
| Axios          | JPA + Hibernate|          |
| Bootstrap 5    | REST APIs      |          |

---

## 📁 Project Structure

```
student-manager-app/
├── backend/         # Spring Boot backend (port: 8081)
│   ├── controller/
│   ├── entity/
│   ├── repository/
│   └── DemoApplication.java
├── frontend/        # React frontend (port: 5173)
│   ├── src/
│   │   └── App.jsx
│   ├── public/
│   └── package.json
```

---

## ⚙️ Setup Instructions

### ✅ Backend (Spring Boot)

```bash
cd backend
```

1. Open in IntelliJ or VS Code with Java extension.  
2. Set up MySQL DB:  
   ```sql
   CREATE DATABASE studentdb;
   ```
3. Configure `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/studentdb
   spring.datasource.username=root
   spring.datasource.password=your_password
   ```
4. Run the application:
   ```bash
   mvn spring-boot:run
   ```

✅ Backend will run at: `http://localhost:8081/api/students`

---

### ✅ Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

✅ Frontend will run at: `http://localhost:5173`

---

## 📦 API Endpoints

| Method | Endpoint                    | Description         |
|--------|-----------------------------|---------------------|
| GET    | `/api/students`             | Get all students    |
| POST   | `/api/students`             | Create new student  |
| PUT    | `/api/students/{id}`        | Update student      |
| DELETE | `/api/students/{id}`        | Delete student      |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit PRs to enhance the app.


---

## 👨‍💻 Developer

Built with ❤️ by **Kishore Kumar**

[![GitHub](https://img.shields.io/badge/GitHub-KishoreKumar-blue?style=for-the-badge&logo=github)](https://github.com/your-username)

---
