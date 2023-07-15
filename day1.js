const prompt =require("prompt-sync")({ sigint:true});
function numbersThenCharacters(arr){
  const num=[];
  const characters=[];
  for(let i=0;i<arr.length;i++){
    const subArr=arr[i];
    for(let j=0;j<subArr.length;j++){
      const element=subArr[j];
      if(typeof element ==='number'){
        num.push(element);
      }
      else if(typeof element=='string'){
        characters.push(element);
      }
      }
    }
    num.sort(function(a,b){return a-b});
    characters.sort();
    const mergedSubArr=[...num, ...characters],sortedArr=[];
    let index=0;
    for(let i=0;i<arr.length;i++){
      const subArr1=[];
      const l=arr[i].length;
      for(let j=0;j<l;j++)
      {
       const element = arr[i][j];
       if (typeof element === 'number') {
        subArr1.push(mergedSubArr[index]);
        index++;
      }
      else if(typeof element==='string'){
        subArr1.push(mergedSubArr[index]);
        index++;
      }
    }
    sortedArr.push(subArr1);
  }
  return sortedArr;

}

const arr1=[
  [11,12,24,23,"a","b"],
  [56,"c",45],
  [67,"d"],
  ["f","e",78]
];
const sortedArr=numbersThenCharacters(arr1);
console.log(sortedArr);

const arr2=[
  [11, 26, 45.4, "f", "a", "b"],
  [0], [1.5, "d","X",35,"s"],
  ["f", "e", 58],
  ["p","Y","Z"],
  [98,72]
];
const sortedArr2=numbersThenCharacters(arr2);
console.log(sortedArr2);