class Customer {

constructor(private _fName:string,private _lName:string){}

get fName() :string{
 return this._fName;
}
set fName(fn :string) {
 this._fName = fn;
}

get lName() :string{
 return this._lName;
}
set lName(ln :string) {
 this._lName = ln;
}

} //Class Ends here

let cust = new Customer("Zuned" ,"Ahmed");
console.log(cust.fName + " " + cust.lName);

cust.fName = "Zuni";
console.log(cust.fName + " " + cust.lName);
