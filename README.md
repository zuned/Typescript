# Typscript practice

## Install
    - nodeJs
    - npm
    - tsc 
 add enviornment variable  [ node npm tsc ]

tsc ->used to generate js from ts file. This process is called as transpiling [translating + compiling ] 
Please note tsc will comile and generate file even their are errors in ts file. To stop this you have to use the flag noEmitOnError.

`tsc --noEmitOnError Customer.ts`

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

### Typescript offer special type of Getters And Setters Method known Accessor
 By Default we can add getter and setters add use to access the private properties, Please <strong>CustomerV2.ts</strong>
 
 We can also through <strong>Accessor</strong>, Please <strong>CustomerV3.ts</strong>. 
 we can change the name of private variable , the accessor method is used to call getter  and setter , Please <strong>CustomerV3.ts</strong>. 
 
 <strong>Got this Error</strong> `Accessors are only available when targeting ECMAScript 5 and higher`
 
 <strong>Solved it = </strong `tsc -target "es6" CustomerV3.ts`
	

 ### tsconfig.json file
  This file used to set the compiler flags[ target / noEmitOnError etc] and also project settings.
  
  To generate file `tsc --init`
  	
	Sample File :
	`{
	 "compilerOptions" :{
	  "noEmitOnError": true ,
	  "target" : "es5"
	  }
	}`

This file has to be placed at root directory. To compile all tsc file we have to write command `tsc'

## Parameter Properties
