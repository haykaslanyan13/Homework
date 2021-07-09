1.
function seperateOddAndEven (array){
    let oddArray = [];
    let evenArray = [];
        for(let i = 0; i < array.length; i++){
  	        if(array[i] % 2 === 0){
                evenArray.push(array[i]);
            }else{
                oddArray.push(array[i]); 
            }
        }return [oddArray,evenArray]
}

2.
function selCorrSublist(word,arr){
    let array = [];
    for(let i = 0; i < arr.length; i++){
        let z = "";
        let f = word;
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i].length !== word.length){
                break;
            }
            for(let k = 0; k < f.length; k++){
                if(arr[i][j] === f[k]){
                    z += arr[i][j];
                    f = f.substring(0,k) + f.substring(k+1,f.length)

                }else{
                    z += "";
                }
            }
        }
        if(z.length === word.length){
            array.push(arr[i]);
        }
    }return array; 
}

 Second.versia

function selCorrSublist1(word,arr){
  let array = [];
  for(let i = 0; i < arr.length; i++){
    let z = "";
    let f = word;
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i].length !== word.length){
        break;
      }
      for(let k = 0; k < f.length; k++){
        if(arr[i][j] === f[k]){
          z += arr[i][j];
          let n = "";
          for(let l = 0; l < f.length; l++){
            if(l !== k){
              n += f[l];
            }
          }f = n;
        }else{
          z += "";
        }
      }
    }
    if(z.length === word.length){
      array.push(arr[i]);
    }
  }return array ;
}

    3.
    function removeApearance(firstString,secondString){
        let result = "";
        for(let i = 0; i < firstString.length; i++){
          for(let j = 0; j < secondString.length + 1; j++){
              if( undefined === secondString[j] && j === secondString.length){
                   result +=  "";
                 i--
                 break;
              }else if(firstString[i] === secondString[j]){
                        i++;
                        continue;
              }else{
                result += firstString[i];
              }
              break;
          }
        }return(result);
        }

        4.
        function onlyUniqElem (arr){
          let newArr = [];
          for( let i = 0; i < arr.length; i++){
            for(let j = 0; j <= newArr.length; j++){
              if(arr[i] !== newArr[j] && j === newArr.length){
                newArr.push(arr[i]);
                break;
              }
              if(arr[i] !== newArr[j]){
                continue;
              }
              else{
                break;
              }
            }
          }return newArr;
        }

        5.
        function changeSymbols (string,firstSymbol,secondSymbol){
          let newString = "";
          for(let i = 0; i < string.length; i++){
              if(string[i] === firstSymbol){
                  newString += secondSymbol;
              }else{
                  newString += string[i];
              }
          }return newString;
      }