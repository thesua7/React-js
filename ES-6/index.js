var name = "Hello"

console.log(name)
test()

function test(){
    let O = "OK"      //let is used on scope
    console.log(O)
}


console.log("---------------")

const IntArrays = [1,2,3];

const updated_Int = IntArrays.map((n) => {
   n++;
   return n;
});

console.log(updated_Int)


const updated_filter = IntArrays.filter((n)=>{
    return n>2
})

console.log(updated_filter)