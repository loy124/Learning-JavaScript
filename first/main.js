$(document).ready(function() {
    'use strict';
    console.log('main.js loaded');
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    
    const tool = new Tool();
    tool.onMouseDown = function(event) {
        const a = Shape.Circle(event.point, 20);
        a.fillColor = 'green';
    };

    const c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    const text = new PointText(200,200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello.world';



    paper.view.draw();
});