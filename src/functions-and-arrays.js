//Progression #1
function greatestOfTwoNumbers(n1, n2){
  if(n1>n2){
    return n1;
  }
  else
  return n2;
}

//Progression #2
function findScaryWord(words){
  if(words.length === 0){
    return null;
  }
  else{
    var longestString = "";
  for (var i=0; i<words.length; i++){
    if (words[i].length > longestString.length){
      longestString = words[i];
    }
  }
  return longestString;
};
}

//Progression #3
function netPrice(prices){
  var sum=0
  for (let index = 0; index < prices.length; index++) {
    sum=sum+prices[index]    
  }
  return sum;
}

//Progression #3.1
function add(mixedArr){
    var sum=0
    for (var i = 0; i < mixedArr.length; i++) {
      if(typeof mixedArr[i] == 'boolean')
      {
        if(mixedArr[i]==true){
          sum=sum+1
        }
      } 
      else if(typeof (mixedArr[i])  == 'string'){
        sum=sum+(mixedArr[i].length);
      }   
      else if(typeof mixedArr[i]  === 'number'){
        sum=sum+mixedArr[i]
      } 
      else if(typeof mixedArr[i] === 'object'){
        throw new Error("Unsupported data type sir or ma'am");
        return;
    }
  }
    return sum;
}

//Progression #4.1
function midPointOfLevels(prices){
  if(prices.length === 0){
    return null;
  }
  else{
  var sum=0
  for (let index = 0; index < prices.length; index++) {
    sum=sum+prices[index] 
    aveg=sum/prices.length   
  }
  return aveg;
}
}

//Progression #4.2
function averageWordLength(items){
  if(items.length === 0){
    return null;
  }
  else{
  var sum=0
  for (let index = 0; index < items.length; index++) {
    sum=sum+items[index].length; 
    aveg=sum/items.length   
  }
  return aveg;
}
}

//Progression #4.3
function avg(a){
  if(a.length === 0){
    return null;
  }
  else{
    var sum=0
    for (var i = 0; i < a.length; i++) {
      if(typeof a[i] === 'boolean')
      {
        if(a[i]==true){
          sum=sum+1
        }
        else{
          sum=sum+0
        }
      } 
      else if(typeof (a[i])  === 'string'){
        sum=sum+(a[i].length);
      }   
      else if(typeof a[i]  === 'number'){
        sum=sum+a[i]
      } 
    } 
  return parseFloat((sum/a.length).toFixed(2));
  }
}

//Progression #5
function uniqueArray(items){
  if(items.length === 0){
    return null;
  }
  else{
    items = items.filter(
      (element, i) => i === items.indexOf(element)
    );
    return items;
  }
}

//Progression #6
function searchElement(words,search_word){
  if(words.length === 0){
    return null;
  }
  else{
    for (let index = 0; index < words.length; index++) {
      if(words[index] === search_word)
      return true;      
    }
    return false;
  }
}

//Progression #7
function howManyTimesElementRepeated(words,search){
  if(words.length === 0){
    return 0;
  }
  else{
    var c=0
    for (let index = 0; index < words.length; index++) {
      if(search === words[index])
      c++;      
    }
    return c;
  }
  return 0;
}

//Progression #8
function maximumProduct(arr){
  for (let index = 0; index < arr.length; index++) {
    for (let index1 = 0; index1 < arr.length; index1++) {
      if(arr[index][index1]=== 1)
      return 1;
      
    }
    
  }
}