1.
function frequencyOfEachUniqNumber (array){
  let arr = [];
  let obj = {};
  for(let i = 0; i < array.length; i++){
      let count = 1;
      if(arr.includes(array[i])){
          continue;
      }
      else{
          for(let j = i + 1; j < array.length; j++){
              if(array[i] === array[j]){
                  count++;
              }
          }
          arr.push(array[i]);
          obj[array[i]] = count / array.length;
          }
  }
  return obj;
}

2.
function longWordInString(string){
    let arrString = string.split(/[-,' ',',']/)
    let longWord = arrString[0]
    for(let i = 1; i < arrString.length; i++){
        if(arrString[i].length >= longWord.length){
            longWord = arrString[i]
        }
        else{
            continue;
        }
    }
    return longWord;
}

3.
function longestSubstring (string){
    let longestSubstring = ''
        for(let i = 0; i < string.length; i++){
            let str = string[i];
            for(let j = i + 1; j < string.length; j++){
                if(string[j] === ' '){
                    str += ' ';  
                    continue;
                }
                else if(string[i] !== string[j] && !str.includes(string[j])){
                        str += string[j];
                        continue;
                }
                else if(str.length >= longestSubstring.length){
                        longestSubstring = str;
                        break;
                }
                else{ 
                    break;
                }
            }

        }
        return longestSubstring;
}

4.
function movingCharInStr (str){
    let string = '';
    for(let i = 0; i <= str.length - 3 ; i+=3){
        let k = str[i];
        string += str[i+1] + str[i+2] + k;
    }
    if(str.length % 3 === 2){
        string += str[str.length - 2] + str[str.length - 1];
        return string;
    }
    else if (str.length % 3 === 1){
         string += str[str.length - 1];
         return string;
    }
    else{
         return string;
    }
}

5.
function onlyUniqElems(array){
    let arr1 = [];
    for(let i = 0; i < array.length; i++){
        if(!arr1.includes(array[i])){
            arr1.push(array[i]);
        }
        else{
            continue;
        }
    }
    return arr1;
}

function  getAllUniceSubsets (array){
    array = onlyUniqElems(array);
    let result = [];
    if(array.length > 3 ){
        for(let i = 0; i < array.length; i++){
            for(let j = i+1; j < array.length; j++){
                for(let k = j+1; k < array.length; k++){
                    result.push([array[i],array[j],array[k]])
                }  
            } 
        }
        return result;
    }else{
        return array;
    }
}