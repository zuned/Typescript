class Customer {
 private fName: string;
 private lName: string;

 constructor(fName: string , lName: string)
 {
	this.fName = fName;
	this.lName = lName;
 }

 public getFName() :string {
	return this.fName;
 }
 public setFName(fName: string) :void {
	this.fName = fName;
 }

 public getLName() :string {
	return this.lName;
 }
 public setLName(lName: string) :void {
	this.lName = lName;
 }

}//class Ends here

let cust = new Customer("Zuned" ,"Ahmed");
console.log(cust.getFName() + " " + cust.getLName());
cust.setFName("Maryam");
cust.setLName("Khan");
console.log(cust.getFName() + " " + cust.getLName());

