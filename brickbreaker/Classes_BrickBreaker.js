//gathers user input
//exists in menus and gameplay
//should be made somewhat universal between games and such
//need to have a class or something which handles the user input and routs it in the proper direction
//player class should have a state which determines its allowed actions
class Player {
    constructor(state){
        this.state = state;
    }

}
class Bar {
    //x, width and height describe the quasi-physical existence of the player controlled 'bar'
    //the speed atribute determines how fast the bar is allowed to move along the x axis 
    //The movement is based upon the input direction(keyboard or mouse) and the speed
    //On keyboard, the bar will move at a somewhat constant speed i guess (perhaps accelerating with length of button press)
    //On mouse the bar will chase the mouse's position moving at a maximum speed set by the classes speed attribute
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
    //if speed is 5 and mouse.pos is 4 units away, only move 4 units
    //must not jump past the cursor
    //should allow fractions of 'speedunit' movement on both mouse and keyboard
    
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
