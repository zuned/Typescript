import {Shape} from './Shape';

export class Circle extends Shape {

constructor (x:number , y:number , private radius:number){
	super(x,y);
}

getInfo() :string {
 return super.getInfo() + `, radius =${this.radius}`;
}

area():number {
		return ( Math.PI ) * Math.pow(this.radius ,2);
}

}