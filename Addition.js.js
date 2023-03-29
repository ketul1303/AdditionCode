// Method 1
var sum=0;
for(let i = 0; i<=10; i=i+2){
    sum = sum+i
}
console.log("sum", sum);


// Method 2
var sum=0;
for(let i=0; i<=10; i++){
 if(i%2==0){
    sum = sum+i;
  }
}
console.log("sum", sum);