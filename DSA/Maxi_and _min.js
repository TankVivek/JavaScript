

var i , min , max ;

var a = [5,2,1,4,5,6,7]

    max = a[0]

    for(i = 0 ; i < a.length ; i++)
     {
    if(a[i] > max)
    {
        max = a[i]
   
    }}
    
    
    min = a[0]
    
    for(i = 0 ; i < a.length ; i++)
    {
        if (a[i] < min){
            
            min = a[i]
            
        }}
        
        
        console.log(min);
        console.log(max);

