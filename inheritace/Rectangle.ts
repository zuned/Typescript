import {Shape} from './Shape';

export class Rectangle extends Shape {

constructor (x:number , y:number , private w:number, private l:number){
	super(x,y);
}

getInfo() :string {
 return super.getInfo() + `, width=${this.w} , length=${this.l}`;
}

}