class Player {
    constructor(){

    }

}
class Bar {
    //x, width and height describe the quasi-physical existence of the player controlled 'bar'
    //the speed atribute determines how fast the bar is allowed to move along the x axis 
    constructor(x, width, height, speed){
        this.x = x;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }
    get pos() {
        return this.x
    }
    //moves the bar at most 'speed' units per frame
    //Uses player controls to direct movement,
    //but is limited to the set speed of the bar for movement speed
    set pos(x) { 

    }
    set speed(v) {
        this.speed = v;
    }
    set dim(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Brick {
    //there will be many bricks per game
    //each brick will exist as a position and dimention (x,y,w,h)
    //They are likely to be static, but perhaps allowing movement would further develop gameplay
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    get pos() {
        return (this.x, this.y)
    }
}
class Ball {
    //x,y are simple integer coordinates
    //radius is an integer describing size of the ball
    //speed and dir can act as a vector descibing speed and direction of the ball
    constructor(x,y,radius,speed, dir) { 
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
    }
    get pos() {
        return (this.x, this.y)
    }
    get radius() {
        return this.radius
    }
    get speed() {
        return this.speed
    }
    get dir() {
        return this.dir
    }
    set radius(r) {
        this.radius = r;
    }
    set speed(s) {
        this.speed = s;
    }
    set dir(d) {
        this.dir = d;
    }

}