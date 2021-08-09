1.
function largerElems (array,number){
    let arr = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] > number){
            arr.push(array[i])
            continue;
        }
        else{
            continue;
        }
    }
    if(arr.length === 0){
        return 'Such values do not exist';
    }
    else{
        return arr;
    }
}

2.
function eachDigitEven(number1,number2){
    let string = '';
    for(let i = number1; i <= number2; i++){
        let number = i;
        while(number >= 0){
            if(number === 0){
                string += i + ', ';
                break;
            }
            else if(number % 2 === 0){
                number = (number - number%10)/10;
                continue;
            }else{
                break;
            }
        } 
    }
    if(string.length > 0){
        string = string.substr(0,string.length - 2);
        return string;
    }else{
        return 'Such numbers does not exist.';
    }
}

3.
function oddOrNot(number){
    if(number/10 <= 1 && number%2 !== 0){
        return true;
    }
    else if((number%10)%2 !== 0){
        number = (number - number%10)/10;
        return oddOrNot(number);
    }
    else{
        return false;
    }
}

4.
function findMinPosEl(arr, min = Infinity, i = 0){
    if(arr.length === 0){
        return (min !== Infinity ? min : -1);
    }
    else if(arr[0] >= 0 && arr[0] < min){
        min = arr[0];
    }
    arr.shift();
    return findMinPosEl(arr, min = min);
}

5.
function findIndex (array){
    for(let i = 0; i < array.length; i++){
        if(i === array.length -1){
            return -1;
        }
        else if(array[i+1] >= array[i]){
            continue;
        }else{
            return i+1;
        }
    }
}