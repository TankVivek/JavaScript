            

    // nums = [-2,1,-3,4,-1,2,1,-5,4];
    // var b = 0;
    // var c = 0;
    // var d = 0;
    // var e = 0;
    // for( var i = 0 ; i < nums.length ; i++)
    
    // {
     
    //     if(true)
    //     {
    //           b = nums[i];
    //           c = b + nums[i];

    //           d = nums[i];
    //           e = b + nums[i];

              
    //           if(c > e){
                
    //             console.log("is c");
    //             console.log(c);
    //           }
    //           else
        
    //           {               
    //                   console.log("print b");         
    //                   console.log(b);
    //       }}}
   

               //   Right Method

              
               class Solution {
                maxSubArray(nums) {
                  let maxSum = Number.MIN_SAFE_INTEGER;
                  let currSum = 0;
                  
                  for (let i = 0; i < nums.length; i++) {
                    currSum = Math.max(currSum + nums[i], nums[i]);
                    maxSum = Math.max(maxSum, currSum);
                  }
                  
                  return maxSum;
                }
              }