// animations
const hello = document.querySelector('#hello');

let upperSvgElement = document.querySelector('#svg-jira-logo-upper-element');
let middleSvgElement = document.querySelector('#svg-jira-logo-middle-element');
let bottomSvgElement = document.querySelector('#svg-jira-logo-bottom-element');

// // Устанавливаем начальное состояние анимации для каждого SVG элемента
upperSvgElement.style.transition = 'transform 0.5s ease-in-out';
middleSvgElement.style.transition = 'transform 0.5s ease-in-out';
bottomSvgElement.style.transition = 'transform 0.5s ease-in-out';
// // bottomSvgElement.style.transform = 'translate(0px, 0px)';

hello.addEventListener('mouseover', () => {
    upperSvgElement.style.transform = 'scale(1.1)';
    middleSvgElement.style.transform = 'translate(-50%, -50%) scale(1.1)';
    bottomSvgElement.style.transform = 'scale(1.1)';

    setTimeout(() => {
        upperSvgElement.style.transform = 'scale(1)';
        middleSvgElement.style.transform = 'translate(-50%, -50%) scale(1)';
        bottomSvgElement.style.transform = 'scale(1)';
    }, 500);

    // Если элемент находится в начальном положении, двигаем его вниз и влево
    //bottomSvgElement.style.transform = 'translate(-50px, 50px)';
});

// bottomSvgElement.addEventListener('transitionend', () => {
//     // Когда анимация смещения завершена, возвращаем элемент обратно
//     //bottomSvgElement.style.transform = 'translate(-20%, 20px)';
// });



// document.addEventListener('DOMContentLoaded', (event) => {
//     // Получаем элементы
//     const modal = document.getElementById("myModal");
//     const btn = document.getElementById("createProject");
//     const span = document.getElementsByClassName("close")[0];

//     // Открываем модальное окно при нажатии на кнопку
//     btn.onclick = function() {
//         modal.style.display = "block";
//     }

//     // Закрываем модальное окно при нажатии на крестик
//     span.onclick = function() {
//         modal.style.display = "none";
//     }

//     // Закрываем модальное окно при нажатии вне его
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }

//     // Обработка формы
//     const form = document.getElementById("modalForm");
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();
//         // Получение значений формы
//         const name = document.getElementById("name").value;
//         const email = document.getElementById("email").value;
//         console.log(`Имя: ${name}, Email: ${email}`);
//         // Закрываем модальное окно после отправки данных
//         modal.style.display = "none";
//     });
// });



// let modal = document.getElementById("myModal");
// let btn = document.getElementById("createProject");
// let span = document.getElementsByClassName("close")[0];
// let create = document.getElementById("create");
// let cancel = document.getElementById("cancel");

// btn.onclick = function() {
//   modal.style.display = "block";
//   console.log("button wa clicked");
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// create.onclick = function() {
//   let projectName = document.getElementById("projectName").value;
//   let project = new Project(projectName);
//   console.log(project.name);
//   modal.style.display = "none";
// }

// cancel.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// document.getElementById('createProject').addEventListener('click', function() {
//     let project = new Project("Project Name");
//     projects.push(project);
//     currentProject = project;

//     // let newProjectDiv = document.createElement('div');
//     // newProjectDiv.textContent = "Новый проект создан: " + project.name + " " + project.status + " " + project.startDate;
//     // document.body.appendChild(newProjectDiv);

//     // let projectListItem = document.createElement('li');
//     // projectListItem.textContent = project.name;
//     // document.getElementById('sidebar').appendChild(projectListItem);

//     // projectListItem.addEventListener('click', function() {
//     //     document.getElementById('mainContent').textContent = "Проект: " + project.name + ", Статус: " + project.status + ", Дата начала: " + project.startDate;
//     // });
// });





// let currentUser = new User("Dm Kov", "abc@gmail.com");

// class Task {
//     constructor(title, description, status) {
//         this.title = title;
//         this.description = description;
//         this.status = status;
//     }
// }

class Sprint {
    constructor(name, startDate, endDate) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }
}





// document.getElementById('addTask').addEventListener('click', function() {
//     let taskInput = document.getElementById('taskInput');
//     let taskList = document.getElementById('taskList');

//     if (taskInput.value !== '') {
//         let li = document.createElement('li');
//         li.textContent = taskInput.value;
//         li.classList.add('task');

//         let deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.classList.add('deleteButton');
//         deleteButton.addEventListener('click', function() {
//             taskList.removeChild(li);
//         });

//         li.appendChild(deleteButton);
//         taskList.appendChild(li);

//         taskInput.value = '';
//     }
// });

// let userNameElement = document.querySelector(".user-detail h3");
// userNameElement.textContent = currentUser.name;

// class Project {
//     constructor(name) {
//         this.name = name;
//         this.status = "FUTURE"
//         this.sprints = [];
//         this.backlog = new Sprint(`${name} - Backlog`);
//     }
// }

// ----------------------------
class User {
    constructor(fullName, email) {
        this.fullName = fullName;
        this.email = email;
    }
}

class Project {
    constructor(name) {
        this.name = name;
    }
}

class Task {
    constructor(title) {
        this.title = title;
    }
}

let users = [];
let projects = [];
let tasks = [];


let bodyElement = document.querySelector('body');
let projectsElement = document.querySelector('#all-projects');

let popupAllProjectsElement = document.createElement('div');
popupAllProjectsElement.classList.add('popupProjectsList');

projectsElement.addEventListener('mouseover', () => {
    popupAllProjectsElement.innerHTML = '';
    projects.forEach(project => {
        let projectElement = document.createElement('p');
        projectElement.textContent = project.name; // замените на свойство, содержащее имя проекта
        popupAllProjectsElement.appendChild(projectElement);
    });
    bodyElement.appendChild(popupAllProjectsElement);
});

projectsElement.addEventListener('mouseout', () => {
    bodyElement.removeChild(popupAllProjectsElement);
});


// initialization for project to be non-empty
function initData() {
    // create users
    users.push(new User("John Smith", "john.smith@example.com"));
    users.push(new User("Emily Johnson", "emily.johnson@example.com"));
    users.push(new User("Michael Williams", "michael.williams@example.com"));
    users.push(new User("Jessica Brown", "jessica.brown@example.com"));
    users.push(new User("David Jones", "david.jones@example.com"));
    users.push(new User("Sarah Miller", "sarah.miller@example.com"));
    users.push(new User("Daniel Davis", "daniel.davis@example.com"));
    users.push(new User("Ashley Wilson", "ashley.wilson@example.com"));
    users.push(new User("James Anderson", "james.anderson@example.com"));
    users.push(new User("Amanda Thomas", "amanda.thomas@example.com"));

    // create projects
    projects.push(new Project("Apollo Initiative"));
    projects.push(new Project("Orion Venture"));
    projects.push(new Project("Zenith Horizon"));
    projects.push(new Project("Nebula Quest"));
    projects.push(new Project("Pioneer Endeavor"));

    // create sprints
    // create tasks

    // let user = new User("Dm Kov", "abc@gmail.com");

    // // Создание объекта Task
    // let task = new Task("Task Title", "Task Description", "Task Status");

    // // Создание объекта Sprint
    // let sprint = new Sprint("Sprint Name", "2022-01-01", "2022-01-31");

    // // Возвращение всех созданных объектов в виде объекта
    // return {
    //     user: user,
    //     task: task,
    //     sprint: sprint
    // };
}

initData();

// DEBUG
console.log("test");
console.log(users);
console.log(projects);

