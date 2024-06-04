const graphics = {
    SVG_NS: 'http://www.w3.org/2000/svg',

    createSvgElement: function() {
        const svg = document.createElementNS(this.SVG_NS, 'svg');
        svg.setAttribute('class', 'expand-sprint-content-button-svg');
        svg.setAttribute('xmlns', this.SVG_NS);
        svg.setAttribute('fill', 'none');
        svg.setAttribute('viewBox', '0 0 800 800');

        const g = document.createElementNS(this.SVG_NS, 'g');
        g.setAttribute('clip-path', 'url(#a)');

        const path = document.createElementNS(this.SVG_NS, 'path');
        path.setAttribute('fill', '#000');
        path.setAttribute('d', 'M789.35 192.468c-14.198-14.199-37.224-14.201-51.425.002L400.01 530.393 62.078 192.468c-14.2-14.199-37.225-14.201-51.426.002-14.201 14.202-14.201 37.225 0 51.426l363.646 363.636a36.36 36.36 0 0 0 51.423-.002l363.627-363.637c14.204-14.198 14.204-37.224.002-51.425Z');

        const defs = document.createElementNS(this.SVG_NS, 'defs');

        const clipPath = document.createElementNS(this.SVG_NS, 'clipPath');
        clipPath.setAttribute('id', 'a');

        const pathInDefs = document.createElementNS(this.SVG_NS, 'path');
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

    createSvgHideSprintIcon: function() {
        const svg = document.createElementNS(this.SVG_NS, 'svg');
        svg.setAttribute('class', 'expand-sprint-content-button-svg');
        svg.setAttribute('xmlns', this.SVG_NS);
        svg.setAttribute('width', '100');
        svg.setAttribute('height', '100');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('viewBox', '0 0 800 800');
    
        const g = document.createElementNS(this.SVG_NS, 'g');
        g.setAttribute('clip-path', 'url(#a)');
    
        const path = document.createElementNS(this.SVG_NS, 'path');
        path.setAttribute('fill', '#000');
        path.setAttribute('d', 'M789.35 192.468c-14.198-14.199-37.224-14.201-51.425.002L400.01 530.393 62.078 192.468c-14.2-14.199-37.225-14.201-51.426.002-14.201 14.202-14.201 37.225 0 51.426l363.646 363.636a36.36 36.36 0 0 0 51.423-.002l363.627-363.637c14.204-14.198 14.204-37.224.002-51.425Z');
    
        g.appendChild(path);
    
        const defs = document.createElementNS(this.SVG_NS, 'defs');
    
        const clipPath = document.createElementNS(this.SVG_NS, 'clipPath');
        clipPath.setAttribute('id', 'a');
    
        const clipPathPath = document.createElementNS(this.SVG_NS, 'path');
        clipPathPath.setAttribute('fill', '#fff');
        clipPathPath.setAttribute('d', 'M0 0h800v800H0z');
    
        clipPath.appendChild(clipPathPath);
        defs.appendChild(clipPath);
    
        svg.appendChild(g);
        svg.appendChild(defs);
    
        return svg;
    },

    createSvgAddTaskIcon: function() {
        const svg = document.createElementNS(this.SVG_NS, 'svg');
        svg.setAttribute('xmlns', this.SVG_NS);
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('viewBox', '0 0 50 50');

        const path = document.createElementNS(this.SVG_NS, 'path');
        path.setAttribute('stroke', '#161928');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');
        path.setAttribute('stroke-width', '7');
        path.setAttribute('d', 'M4 25h42M25 4v42');

        svg.appendChild(path);

        return svg;

    },

    createSvgCommentsIcon: function() {
        const svg = document.createElementNS(this.SVG_NS, 'svg');
        svg.setAttribute('width', '100');
        svg.setAttribute('height', '100');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('viewBox', '0 0 800 672');

        const path = document.createElementNS(this.SVG_NS, 'path');
        path.setAttribute('fill', '#C3CAD3');
        path.setAttribute('stroke', '#C3CAD3');
        path.setAttribute('stroke-width', '4');
        path.setAttribute('d', 'M400.004 2.068C179.084 2.068 0 127.544 0 282.352c0 72.072 38.88 137.756 102.68 187.404 14.884 11.58 21.784 30.74 17.696 49.144L92.888 642.604a22.454 22.454 0 0 0 9.264 23.42 22.449 22.449 0 0 0 25.188.088l147.636-99.216a62.979 62.979 0 0 1 44.128-10.064c26.128 3.78 53.176 5.792 80.904 5.792 220.908 0 399.996-125.48 399.996-280.276-.004-154.804-179.088-280.28-400-280.28Z');

        svg.appendChild(path);

        return svg;
    },

    createSvgClipIcon: function() {
        const svg = document.createElementNS(this.SVG_NS, 'svg');
        svg.setAttribute('width', '100');
        svg.setAttribute('height', '100');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('viewBox', '0 0 116 108');

        const path = document.createElementNS(this.SVG_NS, 'path');
        path.setAttribute('fill', '#C3CAD3');
        path.setAttribute('d', 'M109.623 7.31C105.511 3.198 100.035.934 94.204.934c-5.83 0-11.306 2.264-15.418 6.376L21.01 65.085l-.514.525.031.03a14.578 14.578 0 0 0-3.449 9.439 14.54 14.54 0 0 0 4.287 10.349 14.537 14.537 0 0 0 10.349 4.279c3.914 0 7.589-1.52 10.349-4.28l37.909-38.014s1.693-1.649.312-3.164c-.505-.553-1.55-1.645-2.17-2.065-1.619-1.1-3.03.342-3.03.342L37.177 80.54a7.668 7.668 0 0 1-5.46 2.258 7.674 7.674 0 0 1-5.463-2.258 7.673 7.673 0 0 1-2.262-5.461c0-2.058.8-3.994 2.25-5.45l57.43-57.431a14.794 14.794 0 0 1 10.532-4.354c3.983 0 7.723 1.546 10.531 4.354a14.79 14.79 0 0 1 4.355 10.531 14.79 14.79 0 0 1-4.355 10.531L46.952 91.027l-2.72 2.738c-4.122 4.122-9.611 6.392-15.457 6.392s-11.337-2.27-15.46-6.392a21.724 21.724 0 0 1-6.403-15.46 21.716 21.716 0 0 1 6.403-15.457l33.56-33.781s1.406-1.298.16-2.663c-.708-.775-1.895-2.03-2.609-2.617-1.238-1.02-2.469.423-2.469.423L8.427 57.96C2.994 63.395 0 70.62 0 78.307s2.993 14.912 8.428 20.346c5.425 5.426 12.65 8.414 20.345 8.414 7.694 0 14.92-2.988 20.346-8.414l60.504-60.504c4.112-4.113 6.377-9.589 6.377-15.42 0-5.83-2.265-11.307-6.377-15.419Z');

        svg.appendChild(path);

        return svg;
    },


    // Other functions...
};

export default graphics;