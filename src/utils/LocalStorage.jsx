// localStorage.clear()

const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Monthly Report",
        "description": "Compile financial data and prepare the monthly report.",
        "date": "2025-02-10",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update Client Database",
        "description": "Ensure all client records are up-to-date in the system.",
        "date": "2025-02-08",
        "category": "Admin",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskSummary": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Rohan",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Develop New Feature",
        "description": "Implement a new login system for the web app.",
        "date": "2025-02-15",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix UI Bugs",
        "description": "Resolve reported UI inconsistencies in the dashboard.",
        "date": "2025-02-12",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Review Code",
        "description": "Conduct a peer review for the recent feature updates.",
        "date": "2025-02-11",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskSummary": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstName": "Priya",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Customer Support Calls",
        "description": "Handle pending customer support queries.",
        "date": "2025-02-07",
        "category": "Support",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Document API Endpoints",
        "description": "Update documentation for newly released API endpoints.",
        "date": "2025-02-13",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskSummary": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Sneha",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Plan Marketing Strategy",
        "description": "Outline marketing goals and KPIs for Q1.",
        "date": "2025-02-20",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Social Media Campaign",
        "description": "Launch a campaign for the new product line.",
        "date": "2025-02-18",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "SEO Optimization",
        "description": "Improve search engine rankings for the company website.",
        "date": "2025-02-16",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskSummary": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Vikram",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "System Maintenance",
        "description": "Check and update server security patches.",
        "date": "2025-02-09",
        "category": "IT",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Network Optimization",
        "description": "Analyze and improve network speed and reliability.",
        "date": "2025-02-14",
        "category": "IT",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskSummary": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  }
]

const admin = [
  {
      "id": 1,
      "firstName": "Rajesh",
      "email": "admin@example.com",
      "password": "123"
  }
]



export const setLocalStorage = ()=>{
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    
    return {employees, admin}
}