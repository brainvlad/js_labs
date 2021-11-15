// 1.	Игрок перетаскивает мяч мышкой и отпускает, целясь в мишень.
// 2.	Область перетаскивания мяча мышкой должна быть ограничена:
// нельзя перетаскивать мяч за красную черту.
// 3.	Разработайте функцию animate() для анимации полета мяча.
// Вначале мяч летит с ускорением, затем замедляется, приближаясь в мишени. 

let ball = document.getElementById("ball");

ball.onmousedown = function(e) {

    let coordinateX = 0;
    let coordinateY = 0;

    function animate() {
        document.onmousemove = null;
        ball.onmouseup = null;

        function speedFirst() {
            if (coordinateY > 500 && coordinateY < 600) {
              return 100;
            }
            if (coordinateY > 600 && coordinateY < 700) {
              return 200;
            }
            if (coordinateY > 700) {
              return 300;
            }
        }
        
        let speed = speedFirst();
        let X = 1920 / 2;
        let Y = 500;
        let g = 9.8;
        let alpha = Math.atan((coordinateY - Y) / (X - coordinateX));
        let x = coordinateX;
        let y = coordinateY;
        let t = 0;
    
        let step = setInterval( () => {
            y = coordinateY - speed * Math.cos(alpha) * t;
            x = coordinateX + (speed * Math.sin(alpha) * t - (g * t**2) / 2);
            t += 0.1;
    
            ball.style.left = x + 'px';
            ball.style.top = y + 'px';
    
            if ((x + ball.offsetWidth) > 1920){
              clearInterval(step);
            }
            if ((y + ball.offsetHeight) < 130){
              clearInterval(step);
            }
            
        }, 20);
    }

    ball.ondragstart = function() {
        return false;
    };
    
    move(e);

    function move(e) {
        ball.style.cursor = "grabbing";
        coordinateX = e.pageX;
        coordinateY = e.pageY - ball.offsetHeight / 2;
        ball.style.left = coordinateX + 'px';
        ball.style.top = coordinateY + 'px';

        if (e.pageY < 500) {
            ball.style.top = 500 - ball.offsetWidth / 2 + 'px';
          }
    }

    ball.onmousemove = function(e) {
        move(e);
    }

    ball.onmouseup = function() {
        animate();
    }

}