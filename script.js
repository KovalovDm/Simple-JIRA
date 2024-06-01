// animations

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
        this.sptints = []
    }
}

class Sprint {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
}

class Task {
    constructor(title) {
        this.title = title;
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
  
function switchToProject(project) {
    currentProject = project;
    renderProjects(); // Обновить список проектов
    updateProjectName(); // Обновить имя проекта
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

    // projects.push(new Project("Apollo Initiative"));
    // projects.push(new Project("Orion Venture"));
    // projects.push(new Project("Zenith Horizon"));
    // projects.push(new Project("Nebula Quest"));
    // projects.push(new Project("Pioneer Endeavor"));
    // projects.push(new Project("Apollo Initiative"));
    // projects.push(new Project("Orion Venture"));
    // projects.push(new Project("Zenith Horizon"));
    // projects.push(new Project("Nebula Quest"));
    // projects.push(new Project("Pioneer Endeavor"));
    // projects.push(new Project("Apollo Initiative"));
    // projects.push(new Project("Orion Venture"));
    // projects.push(new Project("Zenith Horizon"));++
    // projects.push(new Project("Nebula Quest"));
    // projects.push(new Project("Pioneer Endeavor"));
    // projects.push(new Project("Apollo Initiative"));
    // projects.push(new Project("Orion Venture"));
    // projects.push(new Project("Zenith Horizon"));
    // projects.push(new Project("Nebula Quest"));
    // projects.push(new Project("Pioneer Endeavor"));

    // create sprints

    // create tasks


    currentUser = users[0];
    currentProject = projects[0];
}

initData();
switchToProject(currentProject);

// DEBUG
console.log("test");
console.log(users);
console.log(projects);