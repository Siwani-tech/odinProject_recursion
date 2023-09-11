


let fibonacci=(num)=>{

    if(num<=1){
        return num;
    }

    return fibonacci(num-1)+fibonacci(num-2);
}

// MergeSort function



let mergeSort=(num)=>{
  if(num.length<=1){
    return num;
  }
  
  let mid=Math.floor((num.length)/2);
  
  let leftHalf=num.slice(0,mid);
  
  let rightHalf=num.slice(mid);
  
  let left=mergeSort(leftHalf);
  
  let right=mergeSort(rightHalf);
  
  return merge(left,right);
}

let merge=(left,right)=>{
  
  let res=[];
  let leftIndex=0;
  let rightIndex=0;
  
  while(leftIndex <left.length && rightIndex<right.length){
    
    if(left[leftIndex]<right[rightIndex]){
      res.push(left[leftIndex]);
      leftIndex++;
    }
    else{
      res.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return res.concat(left.slice(leftIndex),right.slice(rightIndex));
}


// .....

let output= document.getElementById("output");
let fibtext= document.getElementById("Fibtext");
let calculateButton = document.getElementById("calculateButton"); 

calculateButton.addEventListener("click", () => {
    // Parse input as a number
    let num = parseInt(fibtext.value);
    
   
    if (!isNaN(num)) {
       
        output.textContent = fibonacci(num);
    } else {
        output.textContent = "Please enter a valid number.";
    }
});


// ......

let mergeOutput= document.getElementById("mergeOutput");
let mergeValue= document.getElementById("Mergetext");
let calculateBtn = document.getElementById("mergeSortButton"); 


calculateBtn.addEventListener("click", () => {
    // Get the input as a string and split it into an array of numbers
    let inputText = mergeValue.value;
    let nums = inputText.split(',').map(Number);

   
    if (Array.isArray(nums) && nums.length > 0 && !isNaN(nums[0])) {
     
        let sortedArray = mergeSort(nums);

       
        mergeOutput.textContent = "Sorted Array: " + sortedArray.join(', ');
    } else {
        mergeOutput.textContent = "Please enter a valid list of numbers.";
    }
});