

     // first Method

    const a = [1,3,5,6] ;
    var b = 0;

    for( i = 0; i < a.length; i++ ) {
        if(a[i] != b)
    
        { b=a[i]  }

         else

         { console.log(true); }} 



        // Second Method 
        



        // let containsDuplicate = function(a) {
        //     if(a.length<1){
        //         return false;
        //     }
        //     for(let i=0;i<a.length-1;i++){
        //         let j=i+1;
        //         while(j<a.length){
        //             if(a[i]===a[j]){
        //                 return true;
        //             }
        //             j++;
        //         }
        //     }
        //     return false;
        // };

        // containsDuplicate( 1,2,3,4,4)