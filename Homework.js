1.
function removesFirstElem (array, i = 0){
    if(i === array.length){
        array.pop();
        return array;
    }
    array[i] = array[i+1];
    return removesFirstElem (array,i+1);
}

2.
function flattensArrays (array, i = 0){
    if(array.every(el => typeof el === 'number') === true){
        return array;
    }
    if(typeof array[i] !== 'number'){
        array = array.slice(0,i).concat(array[i],array.slice(i+1));
        return flattensArrays(array);  
    }
    if(typeof array[i] === 'number'){
        return flattensArrays(array,i+1); 
    }
}

3.
function sumOfDigits (number,sum = 0){
    while(number > 0){
        sum += number%10;
        number = (number - number%10)/10;
    }
    if(sum >= 10){
        number = sum;
        return sumOfDigits(number);
    }
    else{
        return sum;
    }
}

4.
function invertIt (object,obj = {}){
    for(let key in object){
        if(obj.hasOwnProperty(object[key])){
            if(Array.isArray(obj[object[key]])){
                obj[object[key]].push(key);
            }else{
                obj[object[key]] = [obj[object[key]],key];
            }
        }else{
            obj[object[key]] = key;
        }
    }
    return obj;
}

5.
function tree(arr,id = arr[0].id){
    let result = {}
    for(let j = 1;j<arr.length;j++){
        if(id === arr[j].parent){
            if(!result[id]){
                result[id] = tree(arr.slice(j),arr[j].id);
            }else if(!result[id][arr[j].id]){
                for(let i = j+1;i<arr.length;i++){
                    if(arr[j].id === arr[i].parent){
                        result[id][arr[j].id] = tree(arr.slice(i),arr[i].id);
                        break;
                    }
                }
            }else{
                result[id][arr[j].id];
            }      
        }
    }
    if(!result[id]){
        result[id] = {};
    }
    return result;
}
