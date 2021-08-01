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
function movingCharInStr(str){
    let str2
    let result = ""
    for(let i = 0,j = 3;i<str.length;i+=3,j+=3){
        if(j > str.length){
            j = str.length
        }
        str2 = str.substring(i,j)
        if(str2.length === 3){
           str2 = str2[1] + str2[2] + str2[0]
            result = result.concat(str2)
        }else{
            result = result.concat(str2)
        }
    }
    
    return result
}

5.
function getAllUniceSubsets(arr){
    let result = []
    arr = onlyUnice(arr)
    if(arr.length >= 3){
        for(let i = 0;i<arr.length;i++){
            for(let j = i+1;j<arr.length;j++){
                for(let h = j+1;h<arr.length;h++){
                result.push([arr[i],arr[j],arr[h]])
                }
            }
        }
    }else{
        return arr
    }
    return result
}