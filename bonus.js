// 1.sum of first 50  numbers:

// let sum=0;
// for(let i=1;i<=50;i++){
//     sum=sum+i;
// }
// console.log(sum);


// function sum(number){
//     let sum=0;
//     for(let i=1;i<=number;i++){
//         sum=sum+i;
//     }
//     return sum;
// }
// console.log(sum(50));

                // function sum(i){
                //     if(i==1){
                //         return 1;
                //     }
                //     return i+sum(i-1);
                // }
                // console.log(sum(5));


                //    function factorial(i){
                //     if(i==1){
                //         return 1;
                //     }
                //     return i* factorial(i-1);
                //    }
                //    console.log(factorial(4))


    // const numbers=[23,43,54,65,12];
    // for(const number of numbers){
    //     console.log(number);
    // }

    
       function compare(a, b) {

        if (a.toString() === b.toString()) {
       
        return true;
       
        } else {
       
        return false;
       
        }
       
       }
       
       const result = compare(25, 25);
       
       console.log(result);
       
       
       