import compose from './compose.js';
import graphics from './graphics.js';


// HELPERS

/**
 * Fetches an image from the specified URL and returns it as a Blob object.
 * @param {string} url - The URL of the image to fetch.
 * @returns {Promise<Blob>} A Promise that resolves to the fetched image as a Blob object.
 */
async function fetchImageAsBlob(url) {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
}

/**
 * Creates a new user object with the provided information.
 *
 * @param {string} fullName - The full name of the user.
 * @param {string} email - The email address of the user.
 * @param {string} role - The role of the user.
 * @param {string} occupation - The occupation of the user.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @param {string} avatarUrl - The URL of the user's avatar image.
 * @returns {Promise<User>} A promise that resolves to the created user object.
 */
async function createUser(fullName, email, role, occupation, username, password, avatarUrl) {
    if (avatarUrl === null) {
        avatarUrl = './images/default-avatar.jpg'; // in the future it can be replaced by automatic creation of svg picture with random color background and user initials
    }
    const avatarFile = await fetchImageAsBlob(avatarUrl);
    const user = new User(fullName, email, role, occupation, username, password, avatarFile);
    return user;
}

/**
 * Updates the user profile in the DOM.
 *
 * @param {Object} user - The user object containing profile information.
 */
function updateUserProfile(user) {
    const userAccount = document.querySelector('.user-account');
    userAccount.innerHTML = '';
    userAccount.appendChild(compose.composeUserProfileInHtml(user));
}


// ENTITIES

/**
 * Represents a user.
 * @class
 */
class User {
    /**
     * Creates a new User instance.
     * @constructor
     * @param {string} fullName - The full name of the user.
     * @param {string} email - The email address of the user.
     * @param {string} role - The role of the user.
     * @param {string} occupation - The occupation of the user.
     * @param {string} username - The username of the user.
     * @param {string} password - The password of the user.
     * @param {File} avatarFile - The avatar file of the user.
     */
    constructor(fullName, email, role, occupation, username, password, avatarFile) {
        this.fullName = fullName;
        this.email = email;
        this.role = role;
        this.occupation = occupation;
        this.username = username;
        this.password = password;
        this.avatarFile = avatarFile;
        this.saveAvatarToLocalStorage();
    }

    /**
     * Saves the avatar file to local storage.
     */
    saveAvatarToLocalStorage() {
        const reader = new FileReader();
        reader.onloadend = () => {
            localStorage.setItem(this.username + '_avatar', reader.result);
        };
        reader.readAsDataURL(this.avatarFile);
    }
}








let users = [];
let currentUser = null;

// 
// TEST DATA
async function initTestUsers() {
    users.push(await createUser('John Doe', 'john.doe@example.com', 'admin', 'Software Engineer', 'john_doe', 'password123', './test_data/john-doe.jpg'));
    users.push(await createUser('Jane Smith', 'jane.smith@example.com', 'regular', 'Product Manager', 'jane_smith', 'password123', './test_data/jane-smith.jpg'));
    users.push(await createUser('Alice Johnson', 'alice.johnson@example.com', 'regular', 'UX Designer', 'alice_johnson', 'password123', './test_data/alice-johnson.jpg'));
    users.push(await createUser('Bob Brown', 'bob.brown@example.com', 'admin', 'Data Scientist', 'bob_brown', 'password123', './test_data/bob-brown.png'));
    users.push(await createUser('Charlie Davis', 'charlie.davis@example.com', 'regular', 'DevOps Engineer', 'charlie_davis', 'password123', './test_data/charlie-davis.png'));
    users.push(await createUser('Diana Evans', 'diana.evans@example.com', 'regular', 'QA Engineer', 'diana_evans', 'password123', null));
    users.push(await createUser('Edward Harris', 'edward.harris@example.com', 'admin', 'System Administrator', 'edward_harris', 'password123', null));
    users.push(await createUser('Fiona Green', 'fiona.green@example.com', 'regular', 'Marketing Specialist', 'fiona_green', 'password123', './test_data/fiona-green.png'));
    users.push(await createUser('George Hall', 'george.hall@example.com', 'regular', 'Business Analyst', 'george_hall', 'password123', null));
    users.push(await createUser('Hannah King', 'hannah.king@example.com', 'admin', 'Chief Technology Officer', 'hannah_king', 'password123', null));


}

initTestUsers().then(() => {
    currentUser = users[3];
    updateUserProfile(currentUser);
});









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



// async function getUsersFromDB() {
//     const db = await openDB(); // предполагается, что у вас есть функция openDB
//     const transaction = db.transaction('users', 'readonly'); // предполагается, что у вас есть хранилище объектов 'users'
//     const store = transaction.objectStore('users');
//     return store.getAll();
// }

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
    const newBacklog = compose.composeBacklogInHtml(project)
    mainContent.replaceChild(newBacklog, mainContent.querySelector('#backlog'));
}

function renderSprints(project) {
    const sprintList = document.querySelector('.sprint-list');
    sprintList.innerHTML = ''; // clear the sprint list

    project.sprints.forEach(sprint => {
        sprintList.appendChild(compose.composeSprintInHtml(sprint, project));
    });

    document.querySelectorAll('.hide-sprint-main-info-button').forEach((button) => {
        button.dataset.isExpanded = 'true';
    });
}
  
function switchToProject(project) {
    currentProject = project;
    renderProjects(); // Обновить список проектов
    updateHeaderForBacklog(); // Обновить имя проекта
    renderSprints(project); // Обновить список спринтов
    renderBacklog(project); // Обновить беклог
}

function updateHeaderForBacklog() {
    const mainElement = document.querySelector('main');
    const currentHeader = document.querySelector('.main-header');
    const updateHeaderForBacklog = compose.composeHeaderForBacklogInHtml(currentProject);
    mainElement.replaceChild(updateHeaderForBacklog, currentHeader);

}




function initData() {

    // create projects
    projects.push(new Project("Apollo Initiative"));
    projects.push(new Project("Orion Venture"));
    projects.push(new Project("Zenith Horizon"));
    projects.push(new Project("Nebula Quest"));
    projects.push(new Project("Pioneer Endeavor"));

    currentProject = projects[0];

    // fill data for Apollo Initiative
    projects[0].addSprint()
    projects[0].addSprint()
    projects[0].addSprint()
    projects[0].addSprint()
    projects[0].addSprint()

    projects[0].sprints[0].status = 'ACTIVE';

    // create tasks
    // for Apollo Initiative for sprint 1
    projects[0].sprints[0].tasks.push(new Task('minor', 'Implement user login and registration', 'IN PROGRESS', '2024-06-20', 5, 'john_doe', 'Implement the functionality for user login and registration.'));
    projects[0].sprints[0].tasks.push(new Task('major', 'Database schema design for project', 'NOT STARTED', '2024-06-19', 8, 'bob_brown', 'Design the database schema for the new project.'));
    projects[0].sprints[0].tasks.push(new Task('minor', 'Create project documentation', 'DONE', '2024-06-22', 3, 'alice_johnson', 'Create detailed documentation for the project.'));
    projects[0].sprints[0].tasks.push(new Task('minor', 'Set up CI/CD pipeline', 'IN PROGRESS', '2024-06-24', 5, 'alice_johnson', 'Set up a continuous integration and continuous deployment pipeline for the project.'));

    // for Apollo Initiative for sprint 2
    projects[0].sprints[1].tasks.push(new Task('major', 'Develop API endpoints', 'NOT STARTED', '2024-06-25', 13, 'charlie_davis', 'Develop the required API endpoints for the project.'));
    projects[0].sprints[1].tasks.push(new Task('major', 'Optimize application performance', 'NOT STARTED', '2024-06-22', 8, 'diana_evans', 'Optimize the performance of the application.'));
    projects[0].sprints[1].tasks.push(new Task('minor', 'Write unit tests for new features', 'NOT STARTED', '2024-06-28', 3, 'bob_brown', 'Write unit tests for the newly implemented features.'));

    // for Apollo Initiative for sprint 3
    projects[0].sprints[2].tasks.push(new Task('minor', 'Design user interface for dashboard', 'NOT STARTED', '2024-07-10', 5, 'fiona_green', 'Design the user interface for the project dashboard.'));
    projects[0].sprints[2].tasks.push(new Task('major', 'Implement authentication module', 'NOT STARTED', '2024-07-3', 13, 'george_hall', 'Implement the authentication module for the application.'));

    // for Apollo Initiative for sprint 4 will be empty
    // for Apollo Initiative for sprint 5 will be empty

    // for Apollo Initiative for backlog
    projects[0].backlog.tasks.push(new Task('major', 'Refactor codebase', 'NOT STARTED', '2024-06-30', 8, 'hannah_king', 'Refactor the existing codebase to improve readability and maintainability.'));
    projects[0].backlog.tasks.push(new Task('minor', 'Conduct user research', 'IN PROGRESS', '2024-08-12', 3, 'john_doe', 'Conduct research to gather user feedback and requirements.'));
    projects[0].backlog.tasks.push(new Task('minor', 'Prepare deployment scripts', 'NOT STARTED', '2024-07-04', 5, 'jane_smith', 'Prepare scripts for deploying the application to the production environment.'));

    //console.log(projects);
    switchToProject(currentProject);
}

initData();






document.addEventListener('click', function(event) {
    const button = event.target.closest('.hide-sprint-main-info-button');
    if (!button) return; // Если клик был не на кнопку, то ничего не делаем

    let isExpanded = button.dataset.isExpanded === 'true';
    let svg = button.querySelector('.expand-sprint-content-button-svg');
    const sprintContent = button.closest('.sprint').querySelector('.sprint-content');

    // Если высота еще не сохранена, сохраняем ее
    if (!sprintContent.dataset.height) {
        sprintContent.dataset.height = sprintContent.scrollHeight;
        sprintContent.style.height = sprintContent.scrollHeight + 'px';
    }

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

    button.dataset.isExpanded = !isExpanded;
});




function showSprintSection() {
    document.getElementById('create-sprint-section').style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';
}

function hideSprintSection() {
    document.getElementById('create-sprint-section').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

document.addEventListener('click', function(event) {
    if (event.target.id === 'create-sprint-button' || event.target.id === 'create-sprint-container') {
        showSprintSection();
    } else if (event.target.classList.contains('create-dialogue-cancel-button')) {
        hideSprintSection();
    } else if (event.target.classList.contains('create-dialogue-create-button')) {
        // Создать новый спринт
        // Добавить новый спринт в текущий проект
        currentProject.addSprint();
        // Скрыть окно
        hideSprintSection();
    } else if (!document.getElementById('create-sprint-section').contains(event.target)) {
        hideSprintSection();
    }
});


document.addEventListener('click', function(event) {
    if (event.target.closest('.create-issue-container')) {
        // Обрабатываем событие для элемента с классом 'create-issue-container'

    }
});






// drag n drop


const taskListContainers = document.querySelectorAll('.task-list-container');
// console.log(taskListContainers);

// Найти все элементы .task и добавить обработчики событий dragstart и dragend
let draggingTask = null;

document.querySelectorAll('.task').forEach(task => {
    task.draggable = true; // Сделать элементы перетаскиваемыми
    task.addEventListener('dragstart', () => {
        task.classList.add('dragging');
        draggingTask = task;
    })

    task.addEventListener('dragend', () => {
        task.classList.remove('dragging');
        draggingTask = null;
    });
})

taskListContainers.forEach(taskListContainer => {
    const initSortableList = (e) => {
        e.preventDefault();
        const siblings = [...taskListContainer.querySelectorAll('.task:not(.dragging)')];

        let nextSibling = siblings.find(sibling => {
            return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
        });

        if (draggingTask) {
            taskListContainer.insertBefore(draggingTask, nextSibling);
        }
    }

    taskListContainer.addEventListener('dragover', initSortableList);
    taskListContainer.addEventListener('dragenter', e => e.preventDefault());
});


function getDragAfterElement(taskListContainer, y) {
    const draggableElements = [...taskListContainer.querySelectorAll('.task:not(.dragging)')];
    const closest = draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.POSITIVE_INFINITY });
    return closest.element || null;
}