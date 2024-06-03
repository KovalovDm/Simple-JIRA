import graphics from './graphics.js';

const compose = {
    composeTaskInHtml: function(task) {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        const taskHeader = document.createElement('div');
        taskHeader.className = 'task-header';
        const taskPriority = document.createElement('div');
        taskPriority.className = 'task-priority';
        const taskSummary = document.createElement('div');
        taskSummary.className = 'task-summary';
        const taskStatus = document.createElement('div');
        taskStatus.className = 'task-status';
        const taskDetails = document.createElement('div');
        taskDetails.className = 'task-details';
        const taskDueDate = document.createElement('div');
        taskDueDate.className = 'task-due-date';
        const commentsIconContainer = document.createElement('div');
        commentsIconContainer.className = 'comments-icon';
        const commentsSvgIcon = graphics.createSvgCommentsIcon();
        const commentsAmount = document.createElement('div');
        commentsAmount.className = 'comments-amount';
        const taskFilesIconContainer = document.createElement('div');
        taskFilesIconContainer.className = 'task-files-icon';
        const clipSvgIcon = graphics.createSvgClipIcon();
        const filesAmount = document.createElement('div');
        filesAmount.className = 'files-amount';
        const avatarAndEstimationContainer = document.createElement('div');
        avatarAndEstimationContainer.className = 'avatar-and-estimation-container';
        const taskAssigneeAvatar = document.createElement('div');
        taskAssigneeAvatar.className = 'task-assignee-avatar';
        const taskEstimation = document.createElement('div');
        taskEstimation.className = 'task-estimation';
    
        // add children
        taskElement.appendChild(taskHeader);
        taskHeader.appendChild(taskPriority);
        taskHeader.appendChild(taskSummary);
        taskHeader.appendChild(taskStatus);
        taskElement.appendChild(taskDetails);
        taskDetails.appendChild(taskDueDate);
        taskDetails.appendChild(commentsIconContainer);
        commentsIconContainer.appendChild(commentsSvgIcon);
        taskDetails.appendChild(commentsAmount);
        taskDetails.appendChild(taskFilesIconContainer);
        taskFilesIconContainer.appendChild(clipSvgIcon);
        taskDetails.appendChild(filesAmount);
        taskDetails.appendChild(avatarAndEstimationContainer);
        avatarAndEstimationContainer.appendChild(taskAssigneeAvatar);
        avatarAndEstimationContainer.appendChild(taskEstimation);
    
    
        // fill with data
        taskPriority.id = task.priority === 'minor' ? 'minor-task-priority' : 'major-task-priority';
        taskSummary.textContent = task.title;
        if (task.status === 'DONE') {
            taskStatus.id = 'task-status-done';
            taskStatus.textContent = 'DONE';
        } else if (task.status === 'IN PROGRESS') {
            taskStatus.id = 'task-status-in-progress';
            taskStatus.textContent = 'IN PROGRESS';
        } else if (task.status === 'NOT STARTED'){
            taskStatus.id = 'task-status-not-started';
            taskStatus.textContent = 'NOT STARTED';
        }
        taskDueDate.textContent = 'Due: ' + new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        commentsAmount.textContent = task.comments.length;
        filesAmount.textContent = task.files.length;
        taskEstimation.textContent = task.storyPoints;
        console.log(task.estimation);

    
        return taskElement;
    },

    composeSprintInHtml: function(sprint, project) {
        const sprintElement = document.createElement('div');
        sprintElement.className = 'sprint';
        const sprintHeader = document.createElement('div');
        sprintHeader.className = 'sprint-header';
        const sprintMainInfo = document.createElement('div');
        sprintMainInfo.className = 'sprint-main-info';
        const sprintData = document.createElement('div');
        sprintData.className = 'sprint-data';
        const hideSprintMainInfoButton = document.createElement('div');
        hideSprintMainInfoButton.className = 'hide-sprint-main-info-button';
        const hideSprintIconSvg = graphics.createSvgHideSprintIcon();
        //hideSprintIconSvg.className = 'expand-sprint-content-button-svg';
        const sprintName = document.createElement('div');
        sprintName.className = 'sprint-name';
        const sprintDates = document.createElement('div');
        sprintDates.className = 'sprint-dates';
        const sprintIssuesAmount = document.createElement('div');
        sprintIssuesAmount.className = 'sprint-issues-amount';
        const sprintLabel = document.createElement('div');
        sprintLabel.className = 'sprint-label';
        const sprintContainerWithTasksStatusOrManageSprint = document.createElement('div');
        sprintContainerWithTasksStatusOrManageSprint.className = 'sprint-container-with-tasks-status-or-manage-sprint';
        const notStartedTasks = document.createElement('div');
        notStartedTasks.className = 'not-started-tasks';
        const inProgressTasks = document.createElement('div');
        inProgressTasks.className = 'in-progress-tasks';
        const doneTasks = document.createElement('div');
        doneTasks.className = 'done-tasks';
        const sprintParticipants = document.createElement('div');
        sprintParticipants.className = 'sprint-participants';
        // images
        const sprintContent = document.createElement('div');
        sprintContent.className = 'sprint-content';
        const taskListContainer = document.createElement('div');
        taskListContainer.className = 'task-list-container';
        const createIssueContainer = document.createElement('div');
        createIssueContainer.className = 'create-issue-container';
        const addTaskSvgIcon = graphics.createSvgAddTaskIcon();
        const sprintEstimation = document.createElement('div');
        sprintEstimation.className = 'sprint-estimation';
        const sprintEstimationNumber = document.createElement('div');
        sprintEstimationNumber.className = 'sprint-estimation-number';

        // add children
        sprintElement.appendChild(sprintHeader);
        sprintHeader.appendChild(sprintMainInfo);
        sprintMainInfo.appendChild(sprintData);
        sprintData.appendChild(hideSprintMainInfoButton);
        hideSprintMainInfoButton.appendChild(hideSprintIconSvg);
        sprintData.appendChild(sprintName);
        sprintData.appendChild(sprintDates);
        sprintData.appendChild(sprintIssuesAmount);
        sprintData.appendChild(sprintLabel);
        sprintMainInfo.appendChild(sprintContainerWithTasksStatusOrManageSprint);
        sprintContainerWithTasksStatusOrManageSprint.appendChild(notStartedTasks);
        sprintContainerWithTasksStatusOrManageSprint.appendChild(inProgressTasks);
        sprintContainerWithTasksStatusOrManageSprint.appendChild(doneTasks);
        sprintHeader.appendChild(sprintParticipants);
        // img
        sprintElement.appendChild(sprintContent);
        sprintContent.appendChild(taskListContainer);
        // add all tasks?
        sprintContent.appendChild(createIssueContainer);
        createIssueContainer.appendChild(addTaskSvgIcon);
        sprintContent.appendChild(sprintEstimation);
        sprintEstimation.appendChild(document.createTextNode('Total sprint estimation'));
        sprintEstimation.appendChild(sprintEstimationNumber);


        // fill with data
        sprintName.textContent = `${project.name} ${sprint.orderNumInProject}`;
        sprintDates.textContent = `${('0' + sprint.startDate.getDate()).slice(-2)}.${('0' + (sprint.startDate.getMonth() + 1)).slice(-2)} - ${('0' + sprint.endDate.getDate()).slice(-2)}.${('0' + (sprint.endDate.getMonth() + 1)).slice(-2)}`;
        sprintIssuesAmount.textContent = `${sprint.tasks.length} issues`;
        sprintLabel.textContent = `${sprint.status}`;
        notStartedTasks.textContent = sprint.tasks.filter(task => task.status === 'NOT STARTED').length;
        inProgressTasks.textContent = sprint.tasks.filter(task => task.status === 'IN PROGRESS').length;
        doneTasks.textContent = sprint.tasks.filter(task => task.status === 'DONE').length;
        sprintParticipants.textContent = 'Participants';
        // img
        sprint.tasks.forEach(task => {
            const taskHtml = this.composeTaskInHtml(task);
            taskListContainer.appendChild(taskHtml);
        });
        
        sprintEstimationNumber.textContent = sprint.tasks.reduce((sum, task) => sum + task.storyPoints, 0);
        createIssueContainer.appendChild(document.createTextNode('Create issue'))

        return sprintElement;
    }
};

export default compose;