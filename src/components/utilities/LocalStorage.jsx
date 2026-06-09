const admin = {
  id: 1,
  email: "admin@gmail.com",
  password: "123"
};

const employees = [
  {
    id: 2,
    name: "Ali Khan",
    email: "ali@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Login Page",
        taskDescription: "Create responsive login page using React.",
        taskDate: "2026-06-10",
        taskCategory: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve navbar responsiveness issues.",
        taskDate: "2026-06-05",
        taskCategory: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect login form with backend API.",
        taskDate: "2026-06-03",
        taskCategory: "Backend"
      }
    ]
  },
  {
    id: 3,
    name: "Ahmed Raza",
    email: "ahmed@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Dashboard UI",
        taskDescription: "Create employee dashboard layout.",
        taskDate: "2026-06-12",
        taskCategory: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Task Card Component",
        taskDescription: "Develop reusable task card component.",
        taskDate: "2026-06-11",
        taskCategory: "React"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Profile Page",
        taskDescription: "Implement employee profile page.",
        taskDate: "2026-06-01",
        taskCategory: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Redux Setup",
        taskDescription: "Configure Redux store.",
        taskDate: "2026-05-29",
        taskCategory: "React"
      }
    ]
  },
  {
    id: 4,
    name: "Usman Tariq",
    email: "usman@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Node Server Setup",
        taskDescription: "Initialize Express server.",
        taskDate: "2026-06-15",
        taskCategory: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "JWT Authentication",
        taskDescription: "Implement JWT auth system.",
        taskDate: "2026-06-14",
        taskCategory: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "MongoDB Schema",
        taskDescription: "Create employee schema.",
        taskDate: "2026-06-02",
        taskCategory: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "REST API",
        taskDescription: "Build CRUD APIs.",
        taskDate: "2026-06-04",
        taskCategory: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email Service",
        taskDescription: "Integrate email notifications.",
        taskDate: "2026-05-28",
        taskCategory: "Backend"
      }
    ]
  }
];
export const setLocalStorage = () =>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}
export const getLocalStorage = () =>{
    const data =localStorage.getItem("employees")
     const admin = JSON.parse(localStorage.getItem("admin"));
     console.log(JSON.parse(data));
     return { employees, admin };
}