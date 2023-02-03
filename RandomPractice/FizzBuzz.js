var rarray = [];
function fizzbuzz() {
    var number = rarray.length;
    number++;
    if(number%5===0 & number%3==0)rarray.push("FizzBuzz");
else if(number%3===0)rarray.push("Fizz");
else if(number%5===0)rarray.push("Buzz");
else
    rarray.push(number);
    console.log(rarray);
}



