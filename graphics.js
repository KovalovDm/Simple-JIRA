// jira logo animation
// const jiraLogoBox = document.querySelector('.jira-logo');
// const upperSvgElement = document.querySelector('#svg-jira-logo-upper-element');
// const middleSvgElement = document.querySelector('#svg-jira-logo-middle-element');
// const bottomSvgElement = document.querySelector('#svg-jira-logo-bottom-element');

// upperSvgElement.style.transition = 'transform 0.3s ease-in-out';
// middleSvgElement.style.transition = 'transform 0.3s ease-in-out';
// bottomSvgElement.style.transition = 'transform 0.3s ease-in-out';

// let jiraLogoScale = 1;
// let jiraLogoTranslateX = 0;
// let jiraLogoTranslateY = 0;
// let jiraLogoScalingUp = false;
// let jiraLogoScalingDown = false;

const graphics = {
    createSvgElement: function() {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'expand-sprint-content-button-svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('viewBox', '0 0 800 800');

        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('clip-path', 'url(#a)');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('fill', '#000');
        path.setAttribute('d', 'M789.35 192.468c-14.198-14.199-37.224-14.201-51.425.002L400.01 530.393 62.078 192.468c-14.2-14.199-37.225-14.201-51.426.002-14.201 14.202-14.201 37.225 0 51.426l363.646 363.636a36.36 36.36 0 0 0 51.423-.002l363.627-363.637c14.204-14.198 14.204-37.224.002-51.425Z');

        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

        const clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
        clipPath.setAttribute('id', 'a');

        const pathInDefs = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathInDefs.setAttribute('fill', '#fff');
        pathInDefs.setAttribute('d', 'M0 0h800v800H0z');

        // Append child elements to their parents
        clipPath.appendChild(pathInDefs);
        defs.appendChild(clipPath);
        g.appendChild(path);
        svg.appendChild(g);
        svg.appendChild(defs);

        return svg;
    },


    // Other functions...
};

export default graphics;