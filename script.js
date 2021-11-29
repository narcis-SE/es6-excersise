class Room{
    constructor(name, length, width, capacity){
        this.name = name;
        this.length = length;
        this.width = width;
        this.available = true;
        this.capacity = 15; 
    }

    getArea(){
        return this.length*this.width;
    }
    getPerimeter(){
        return 2 * (this.length +this.width);
    }
}

const room1 = new Room("Sun", 30, 20);
const room2 = new Room("Green", 15, 20);


console.log(room1);
console.log("Area is: " + room1.getArea());
console.log("Perimeter is: " + room1.getPerimeter());

console.log(room2);
console.log("Area is: "+ room2.getArea());
console.log("Perimeter is: " + room2.getPerimeter());

room2.available = false;

console.log(room1.available);
console.log(room2.available);

room2.capacity = 18;

console.log(room2.capacity);
console.log(room1.capacity);
