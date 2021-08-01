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