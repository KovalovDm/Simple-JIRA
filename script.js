class Project {
    constructor(name) {
        this.name = name;
        this.status = "FUTURE"
        this.sprints = [];
        this.backlog = new Sprint(`${name} - Backlog`);
    }

    changeProjectName(newName) {
        this.name = newName;
    }

    startProject() {
        this.status = "IN_PROGRESS";
        this.startDate = new Date();
    }

    closeProject() {
        this.status = "CLOSED";
        this.endDate = new Date();
    }

    // this.description = description;

    addSprint(sprint) {
        this.sprints.push(sprint);
    }
}

// scripts.js
document.addEventListener('DOMContentLoaded', (event) => {
    // Получаем элементы
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("createProject");
    const span = document.getElementsByClassName("close")[0];

    // Открываем модальное окно при нажатии на кнопку
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Закрываем модальное окно при нажатии на крестик
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Закрываем модальное окно при нажатии вне его
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Обработка формы
    const form = document.getElementById("modalForm");
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Получение значений формы
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        console.log(`Имя: ${name}, Email: ${email}`);
        // Закрываем модальное окно после отправки данных
        modal.style.display = "none";
    });
});


let projects = [];
let currentProject;

let modal = document.getElementById("myModal");
let btn = document.getElementById("createProject");
let span = document.getElementsByClassName("close")[0];
let create = document.getElementById("create");
let cancel = document.getElementById("cancel");

btn.onclick = function() {
  modal.style.display = "block";
  console.log("button wa clicked");
}

span.onclick = function() {
  modal.style.display = "none";
}

create.onclick = function() {
  let projectName = document.getElementById("projectName").value;
  let project = new Project(projectName);
  console.log(project.name);
  modal.style.display = "none";
}

cancel.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

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




class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Task {
    constructor(title, description, status) {
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

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





document.getElementById('addTask').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');

    if (taskInput.value !== '') {
        let li = document.createElement('li');
        li.textContent = taskInput.value;
        li.classList.add('task');

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }
});

