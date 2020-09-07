export class Shape {

constructor(private x:number , private y:number){}

getInfo():string {
 return `x=${this.x} , y= ${this.y}`;
}

}