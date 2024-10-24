// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the element
// of nums except nums[i].

let intArr = [1,2,3,4,5];
const productExceptSelf = (arr) => {
const productArr = arr.map((ele) => {
    let productValue = 1;
  arr.forEach((val) => {
    if(ele != val){
      productValue *= val;
    }
  })
  return productValue;
})
return productArr;
}
console.log(productExceptSelf(intArr));

//refered
const productExceptSelfByMethods = (arr) => {
    const totalProduct = arr.reduce((acc, val) => acc*val, 1);
    return arr.map((ele) => totalProduct/ele);
}
console.log(productExceptSelfByMethods(intArr));
