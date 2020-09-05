class Customer {
 //private _fName :string;
 //private _lName :string;
 private x :string;private y :string;

 constructor(fName :string , lName :string )
 {
  // this._fName = fName;this._lName = lName;
     this.x = fName;this.y = lName;	
 }

 get fName() :string {
	return this.x;//this._fName;
 }

 set fName(fName:string){
   this.x = fName;
  //this._fName = fName;
 }

 get lName() :string {
	return  this.y;//this._lName;
 }

 set lName(lName:string){
//  this._lName = lName;
   this.y = lName;
 }
}

let cust = new Customer("Zuned" , "Ahmed");

console.log(cust.fName + " " + cust.lName);
