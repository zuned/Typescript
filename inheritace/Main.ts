import {Shape} from './Shape';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';


let shape = new Shape(10,20);
let circle = new Circle(1,2,3);
let rectangle = new Rectangle(3,5,6,7);

let shapes : Shape[] = [];

shapes.push(shape);
shapes.push(circle );
shapes.push(rectangle);

for(let s of shapes)
{
 console.log(s.getInfo());
}

