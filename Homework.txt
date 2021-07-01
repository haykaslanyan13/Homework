1.
function creatArray (a,b,step){
    let array = [];
    for(a; a <= b; a += step){
        array.push(a);
    }
    return array;
}

2.
function maxElemInArr(array){
    let max = array[0];
    for(let i = 0; i < array.length; i++){
        if (array[i] < array[i+1] && array[i+1] > max){
            max = array[i+1];
        }
    }return max;
}

3.
function revArray(array){
    let length = array.length;
    for(let i = length; i > 0; i--){
        array.push(array[i-1]);
    }
    for(let j = 0; j < length; j++){
        array.shift(array[0]);
    }return array;
}

4.
function newArray(array){
    let arr = [];
    for(let i = 0; i < array.length - 1; i++){
        arr.push(array[i] * array[i+1]);
    }return arr;
}

5.
function newArr(array,number){
    let length = array.length;
    for(let i = 0; i < length; i++){
        if(array[i] !== number ){
            array.push(array[i]);
        }else{
            array.push(); 
         }
     }
     for(let j = 0; j < length; j++){
        array.shift(0);
     }
     if(array.length === length){
        array.push(number);
        return array;
     }else{
         return array;
      }
}