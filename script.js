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


let project = new Project('Project 1');

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

