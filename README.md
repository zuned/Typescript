# Typscript practice

## Install
    - nodeJs
    - npm
    - tsc 
 add enviornment variable  [ node npm tsc ]

TypeScript code is converted to Javascript code -> This process is called as transpiling [translating + compiling ] 
tsc will comile and generate file event there is Error. To stop this you have to use the flag noEmitOnError

tsc --noEmitOnError Customer.ts

# Basics Of TypeScript
## To declare a variable instead var typscipt has let;
   - let found: boolean = true;
   - let fname: string = "Zuned";
   - let myData: any = 50.0; // when declared any -> we can assign all type of values 
## Loop in typescript

`let sports: string[] = ["Cricket" , "Football" , "Tennis" , "Athletics"];

sports.push("Basketball");

for(let sport of sports)
{
  console.log(sport);
}

let numberArr:number[]=[10 ,9 ,12,14,19];
//let numberArr =[10 ,9 ,12,14,19];

let total = 0;

for(let i =0 ; i< numberArr.length ;i ++)
{
	//console.log(i);
	
	total+=numberArr[i];
}

console.log("Total= "+total +" Element count = " +numberArr.length + " Average ="+ total/ numberArr.length );`
   
## class in Typescript

### access modifier
 - public     -> access to all classs[default] 
 - protected  -> access to current and subclass
 - private    -> access to current class
 
### constructor 
`class Customer {`
 `fName: string;
 lName : string;`
 `constructor(fName:string ,lName:string)`
 `{`
	`this.fName = fName;
	this.lName = lName;`
 `}`
`}`

`let myCustomer = new Customer("Zuned" ,"Ahmed");`
