const popmotion = require('popmotion'); // require- i need that library (popmotion)
const { styler, spring, listen, pointer, value } = window.popmotion; //destruction 
//const spring = window.popmotion.spring 
//const styler = window.popmotion.styler 
//const listen = window.popmotion.listen  
//const spring = window.popmotion.spring 
const ball = document.querySelector('.box');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart').start((e) /*.start(function(e))*/ => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
});

listen(document, 'mouseup touchend')
    .start(() => {
        spring({
            from: ballXY.get(),
            velocity: ballXY.getVelocity(),
            to: { x: 0, y: 0 },
            stiffness: 200,
            // mass: 1,
            // damping: 10
        }).start(ballXY);
    });