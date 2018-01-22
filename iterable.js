let obj = {};
obj[Symbol.iterator] = function(){
    let itr = {};
    let count = 1;
    itr.next = function(){
        let itrResult = (count <= 3)
        ? {value:count++, done:false}
        :{value:undefined, done:true};
        return itrResult;
    };
    return itr;
}

let iterator = obj[Symbol.iterator]();
let iteratorResult;
while(true){
    iteratorResult = iterator.next();
    if(iteratorResult.done){
        break;
    }
    console.log(iteratorResult.value);
}

for(let val of obj){
    console.log(val);
}