//File name can be anything it is not forced to use customer as name
class Customer {
 fName: string;
 lName : string;
 constructor(fName:string ,lName:string)
 {
	this.fName = fName;
	this.lName = lName;
 }

}

// when constructor not provided
//let myCustomer = new Customer();
//myCustomer.fName = "Zuned";
//myCustomer.lName = "Ahmed";

// when constructor provided
let myCustomer = new Customer("Zuned" ,"Ahmed");
console.log(myCustomer.fName );
console.log(myCustomer.lName );

//tsc --noEmitOnError Customer.ts

//AccessModifier 
	//->private   : access to current class
	//->protected : access to current and subclass
	//->public    : access to all classs[default]

