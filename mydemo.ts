console.log("Hello World!");

let found: boolean = true;
let fname: string = "Zuned";
let myData: any = 50.0;

console.log(found);
console.log(fname);
console.log(myData);

console.log(`Hi ${fname} , myData = ${myData} , found = ${found} `);


let sports: string[] = ["Cricket" , "Football" , "Tennis" , "Athletics"];
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

console.log("Total= "+total +" Element count = " +numberArr.length + " Average ="+ total/ numberArr.length );
