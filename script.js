import compose from './compose.js';
import graphics from './graphics.js';

// dasfa

class User {
    constructor(fullName, email, username, password, avatarFile) {
        this.fullName = fullName;
        this.email = email;
        this.username = username;
        this.password = password;
        this.avatarFile = avatarFile;
    }

    async setUserAvatar(avatarFile) {
        const avatarBase64 = await getBase64(avatarFile);
        const db = await this.openDB();
        const tx = db.transaction('avatars', 'readwrite');
        const store = tx.objectStore('avatars');
        store.put(avatarBase64, this.username);
        return tx.complete;
    }
}



// jira logo animation
const jiraLogoBox = document.querySelector('.jira-logo');
const upperSvgElement = document.querySelector('#svg-jira-logo-upper-element');
const middleSvgElement = document.querySelector('#svg-jira-logo-middle-element');
const bottomSvgElement = document.querySelector('#svg-jira-logo-bottom-element');

upperSvgElement.style.transition = 'transform 0.3s ease-in-out';
middleSvgElement.style.transition = 'transform 0.3s ease-in-out';
bottomSvgElement.style.transition = 'transform 0.3s ease-in-out';

let jiraLogoScale = 1;
let jiraLogoTranslateX = 0;
let jiraLogoTranslateY = 0;
let jiraLogoScalingUp = false;
let jiraLogoScalingDown = false;

function animateJiraLogo() {
    if (jiraLogoScalingUp && jiraLogoScale < 1.2) {
        jiraLogoScale += 0.02;
        jiraLogoTranslateX += 0.6;
        jiraLogoTranslateY += 0.6;
    } else if (jiraLogoScalingDown && jiraLogoScale > 1) {
        jiraLogoScale -= 0.02;
        jiraLogoTranslateX -= 0.6;
        jiraLogoTranslateY -= 0.6;
    }

    upperSvgElement.style.transform = `translate(${jiraLogoTranslateX}px, -${jiraLogoTranslateY}px) scale(${jiraLogoScale})`;
    middleSvgElement.style.transform = `translate(-50%, -50%) scale(${jiraLogoScale})`;
    bottomSvgElement.style.transform = `translate(-${jiraLogoTranslateX}px, ${jiraLogoTranslateY}px) scale(${jiraLogoScale})`;

    if ((jiraLogoScalingUp && jiraLogoScale < 1.2) || (jiraLogoScalingDown && jiraLogoScale > 1)) {
        requestAnimationFrame(animateJiraLogo);
    } else if (jiraLogoScalingUp && jiraLogoScale >= 1.2) {
        jiraLogoScalingUp = false;
        setTimeout(() => {
            jiraLogoScalingDown = true;
            animateJiraLogo();
        }, 200); // delay before starting the return animation
    } else if (jiraLogoScalingDown && jiraLogoScale <= 1) {
        jiraLogoScalingDown = false; // reset the flag after the return animation
    }
}

jiraLogoBox.addEventListener('mouseover', () => {
    if (!jiraLogoScalingUp && !jiraLogoScalingDown) {
        jiraLogoScalingUp = true;
        animateJiraLogo();
    }
});



// design

// position the list of projects container to the right of the sidebar
window.onload = function() {
    var sidebarContainer = document.querySelector('.sidebar-container');
    var listOfProjectsContainer = document.querySelector('.list-of-projects-container');
  
    var sidebarWidth = sidebarContainer.offsetWidth;
    listOfProjectsContainer.style.left = sidebarWidth + 'px';
};


// show the list of projects when hovering over the "All projects" button
let timeoutId;

document.getElementById('all-projects').addEventListener('mouseover', function() {
    clearTimeout(timeoutId);
    document.querySelector('.list-of-projects-container').classList.add('visible');
});

document.getElementById('all-projects').addEventListener('mouseout', function() {
    timeoutId = setTimeout(function() {
        document.querySelector('.list-of-projects-container').classList.remove('visible');
    }, 1000);
});

document.querySelector('.list-of-projects-container').addEventListener('mouseover', function() {
    clearTimeout(timeoutId);
});

document.querySelector('.list-of-projects-container').addEventListener('mouseout', function() {
    timeoutId = setTimeout(function() {
        document.querySelector('.list-of-projects-container').classList.remove('visible');
    }, 1000);
});

// Скрывает .list-of-projects-container при клике вне его
document.addEventListener('click', function(event) {
    var isClickInside = document.querySelector('.list-of-projects-container').contains(event.target);
    var isClickOnAllProjects = document.getElementById('all-projects') === event.target;

    if (!isClickInside && !isClickOnAllProjects) {
        document.querySelector('.list-of-projects-container').classList.remove('visible');
    }
});


// class Task {
//     constructor(title, description, status) {
//         this.title = title;
//         this.description = description;
//         this.status = status;
//     }
// }

// class Sprint {
//     constructor(name, startDate, endDate) {
//         this.name = name;
//         this.startDate = startDate;
//         this.endDate = endDate;
//         this.tasks = [];
//     }

//     addTask(task) {
//         this.tasks.push(task);
//     }
// }





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

// // indexDB
// let db;
// let dbReq = indexedDB.open('projectDatabase', 1);
// dbReq.onupgradeneeded = function(event) {
//     db = event.target.result;
//     let users = db.createObjectStore('users', {keyPath: 'email'});
// }

// dbReq.onsuccess = function(event) {
//     db = event.target.result;
//     console.log('success opening database');
// }
// dbReq.onerror = function(event) {
//     console.log('error opening database ' + event.target.errorCode);
// }


// ----------------------------



class Project {
    constructor(name) {
        this.name = name;
        this.sprints = []
        this.backlog = new Backlog();
    }

    addSprint() {
        const orderNumInProject = this.sprints.length > 0 ? this.sprints[this.sprints.length - 1].orderNumInProject + 1 : 1;
        let startDate;
        let endDate = new Date();

        if (this.sprints.length === 0) {
            startDate = new Date();
        } else {
            startDate = new Date(this.sprints[this.sprints.length - 1].endDate);
        }

        endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 14);

        this.sprints.push(new Sprint(orderNumInProject, startDate, endDate));
        renderSprints(this);
    }
}

class Sprint {
    constructor(orderNumInProject, startDate, endDate, status = 'FUTURE') {
        this.orderNumInProject = orderNumInProject;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }
}

class Backlog {
    constructor() {
        this.tasks = [];
    }
}

class Task {
    constructor(priority, title, status, dueDate, storyPoints, assigneeUsername, description) {
        this.priority = priority;
        this.title = title;
        this.status = status;
        this.dueDate = dueDate;
        this.storyPoints = storyPoints;
        this.assigneeUsername = assigneeUsername;
        this.description = description;
        this.comments = [];
        this.files = [];
    }
}

let users = [];
let currentUser = null;

let projects = [];
let currentProject = null;

let sprints = [];

let tasks = [];


function renderProjects() {
    let listOfProjects = document.querySelector('.list-of-projects');
  
    listOfProjects.innerHTML = '';
  
    projects.sort((a, b) => a.name.localeCompare(b.name));
  
    projects.forEach(project => {
      let projectDiv = document.createElement('div');
      projectDiv.className = 'project';
      projectDiv.textContent = project.name;
  
      if (project === currentProject) {
        projectDiv.classList.add('current');
      }
  
      projectDiv.addEventListener('click', () => {
        switchToProject(project);
      });
  
      listOfProjects.append(projectDiv);
    });
}

function renderBacklog(project) {
    const mainContent = document.querySelector('.main-content');
    const backlog = mainContent.querySelector('#backlog');
    backlog.innerHTML = '';

    // create header and append it to backlog
    const backlogHeader = document.createElement('div');
    backlogHeader.className = 'sprint-header';
    backlog.appendChild(backlogHeader);

    // create backlog main info and append it to backlogHeader
    const backlogMainInfo = document.createElement('div');
    backlogMainInfo.className = 'sprint-main-info';
    backlogHeader.appendChild(backlogMainInfo);

    // create backlog content and append it to backlog
    const backlogContent = document.createElement('div');
    backlogContent.className = 'sprint-content';
    backlogContent.textContent = 'Backlog content';
    backlog.appendChild(backlogContent);

    // create backlog data and append it to backlogMainInfo
    const backlogData = document.createElement('div');
    backlogData.className = 'sprint-data';
    backlogMainInfo.appendChild(backlogData);

    // create backlog container with mange status button and append it to backlogMainInfo
    const backlogContainerWithManageStatusButton = document.createElement('div');
    backlogContainerWithManageStatusButton.className = 'sprint-container-with-tasks-status-or-manage-sprint';
    backlogMainInfo.appendChild(backlogContainerWithManageStatusButton);

    // create button to manage sprints and append it to backlogContainerWithManageStatusButton
    const manageSprintButton = document.createElement('button');
    manageSprintButton.id = 'create-sprint-button';
    manageSprintButton.className = 'manage-sprint-button';
    manageSprintButton.textContent = 'Create sprint';
    backlogContainerWithManageStatusButton.appendChild(manageSprintButton);


    // create backlog name and append it to backlogData
    const backlogName = document.createElement('div');
    backlogName.className = 'sprint-name';
    backlogName.textContent = 'Backlog';
    backlogData.appendChild(backlogName);

    // create backlog tasks amount and append it to backlogData
    const backlogTasksAmount = document.createElement('div');
    backlogTasksAmount.className = 'sprint-issues-amount';
    backlogTasksAmount.textContent = `${project.backlog.tasks.length} issues`;
    backlogData.appendChild(backlogTasksAmount);

    
}

function renderSprints(project) {
    const sprintList = document.querySelector('.sprint-list');
    sprintList.innerHTML = ''; // clear the sprint list

    project.sprints.forEach(sprint => {
        sprintList.appendChild(compose.composeSprintInHtml(sprint, project));
    });
}
  
function switchToProject(project) {
    currentProject = project;
    renderProjects(); // Обновить список проектов
    updateProjectName(); // Обновить имя проекта
    renderSprints(project); // Обновить список спринтов
    renderBacklog(project); // Обновить беклог
}

function updateProjectName() {
    let projectNameElement = document.querySelector('.project-name');

    projectNameElement.textContent = currentProject.name;
}

















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

    // fill data for Apollo Initiative
    projects[0].addSprint()
    projects[0].addSprint()
    projects[0].addSprint()
    projects[0].addSprint()
    projects[0].addSprint()

    // create tasks
    // for Apollo Initiative for sprint 1
    projects[0].sprints[0].tasks.push(new Task('minor', 'Implement user login and registration', 'IN PROGRESS', '2024-06-20', 5, null, 'Implement the functionality for user login and registration.'));
    projects[0].sprints[0].tasks.push(new Task('major', 'Database schema design for project', 'NOT STARTED', '2024-06-19', 8, null, 'Design the database schema for the new project.'));
    projects[0].sprints[0].tasks.push(new Task('minor', 'Create project documentation', 'DONE', '2024-06-22', 3, null, 'Create detailed documentation for the project.'));
    projects[0].sprints[0].tasks.push(new Task('minor', 'Set up CI/CD pipeline', 'IN PROGRESS', '2024-06-24', 5, null, 'Set up a continuous integration and continuous deployment pipeline for the project.'));

    // for Apollo Initiative for sprint 2
    projects[0].sprints[1].tasks.push(new Task('major', 'Develop API endpoints', 'IN PROGRESS', '2024-06-25', 13, null, 'Develop the required API endpoints for the project.'));
    projects[0].sprints[1].tasks.push(new Task('major', 'Optimize application performance', 'NOT STARTED', '2024-06-26', 8, null, 'Optimize the performance of the application.'));
    projects[0].sprints[1].tasks.push(new Task('minor', 'Write unit tests for new features', 'DONE', '2024-06-27', 3, null, 'Write unit tests for the newly implemented features.'));

    // for Apollo Initiative for sprint 3
    projects[0].sprints[2].tasks.push(new Task('minor', 'Design user interface for dashboard', 'IN PROGRESS', '2024-06-28', 5, null, 'Design the user interface for the project dashboard.'));
    projects[0].sprints[2].tasks.push(new Task('major', 'Implement authentication module', 'NOT STARTED', '2024-06-29', 13, null, 'Implement the authentication module for the application.'));

    // for Apollo Initiative for sprint 4 will be empty
    // for Apollo Initiative for sprint 5 will be empty

    // for Apollo Initiative for backlog
    projects[0].backlog.tasks.push(new Task('major', 'Refactor codebase', 'NOT STARTED', '2024-06-30', 8, null, 'Refactor the existing codebase to improve readability and maintainability.'));
    projects[0].backlog.tasks.push(new Task('minor', 'Conduct user research', 'IN PROGRESS', '2024-07-01', 3, null, 'Conduct research to gather user feedback and requirements.'));
    projects[0].backlog.tasks.push(new Task('minor', 'Prepare deployment scripts', 'DONE', '2024-07-02', 5, null, 'Prepare scripts for deploying the application to the production environment.'));





    currentUser = users[0];
    currentProject = projects[0];
}

initData();
switchToProject(currentProject);

// DEBUG
console.log("test");
console.log(users);
console.log(projects);



// для сворачивания блока sprint-content
document.querySelectorAll('.sprint-content').forEach(sprintContent => {
    sprintContent.dataset.height = sprintContent.scrollHeight; // сохраняем исходную высоту
    sprintContent.style.height = sprintContent.scrollHeight + 'px';
});

document.querySelectorAll('.hide-sprint-main-info-button').forEach((button) => {
    
    let isExpanded = true;
    let svg = button.querySelector('.expand-sprint-content-button-svg'); // Находим SVG
    const sprintContent = button.closest('.sprint').querySelector('.sprint-content');
    // Сохраняем начальную высоту в data-height
    sprintContent.dataset.height = sprintContent.scrollHeight;

    button.addEventListener('click', function() {
        console.log("button");
        svg.style.transform = isExpanded ? 'rotate(-90deg)' : 'rotate(0deg)';
        svg.style.transition = 'transform 0.4s';
        if (isExpanded) {
            requestAnimationFrame(() => {
                sprintContent.style.height = '0';
            });
        } else {
            requestAnimationFrame(() => {
                sprintContent.style.height = sprintContent.dataset.height + 'px';
            });
        }
        isExpanded = !isExpanded;
    });
});


// Получить кнопки
document.addEventListener('click', function(event) {
    if (event.target.id === 'create-sprint-button') {
        document.getElementById('create-sprint-section').style.display = 'flex';
    } else if (event.target.classList.contains('create-dialogue-cancel-button')) {
        document.getElementById('create-sprint-section').style.display = 'none';
    } else if (event.target.classList.contains('create-dialogue-create-button')) {
        // Создать новый спринт
        // Добавить новый спринт в текущий проект
        currentProject.addSprint();
        // Скрыть окно
        document.getElementById('create-sprint-section').style.display = 'none';
    } else if (!document.getElementById('create-sprint-section').contains(event.target)) {
        document.getElementById('create-sprint-section').style.display = 'none';
    }
});




// let testTask = new Task('major', 'Do something', 'DONE', new Date('2021-12-31'), 5, 'John Doe', 'Lorem ipsum');
// document.querySelector('body').appendChild(compose.composeTaskInHtml(testTask));
// console.log(testTask)