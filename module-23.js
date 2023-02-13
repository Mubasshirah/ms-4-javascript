// const num=[2,3,4,5,6];
// console.log(Array.isArray(num));

    //  const array=[34,54,32,65,76,27,54,5,5,76,21,76,43,87];
    //  console.log(array.splice(1,3))
    //  console.log(array);
    //  console.log(array.splice(1,3,654,456,443,333));
    //  console.log(array);

//              const names=['adiba','samia','bushra','ambrin','nazifa','sarah','adiba','sarah','nazifa'];
// function removeDuplicate(names){
//             let checked=[];
//             for(i=0;i<names.length;i++){
//                 const element=names[i];
//                 if(checked.includes(element)===false){
//                     checked.push(element);
//                 }
//             }
//             return checked;
//         }
//         console.log(removeDuplicate(names));

                        // function numberDivisible(number){
                        //     for(i=1;i<=number;i++){
                        //         if(i%3===0 && i%5===0){
                        //             console.log('foobar');
                        //         }
                               
                        //         else if(i%3===0 ){
                        //             console.log('foo');
                        //         }
                                
                        //         else if( i%5===0){
                        //             console.log('bar');
                        //         }
                        //         else{
                        //             console.log(i);
                        //         }
                        //     }
                        //     return i;
                        // }
                        // numberDivisible(50);

// const phones=[
//     {name:'samsung',price:30000,color:'blac',camera:51},
//     {name:'samsun',price:50000,color:'blak',camera:2},
//     {name:'samsu',price:30000,color:'back',camera:57},
//     {name:'sams',price:10000,color:'black',camera:2},
//     {name:'sam',price:60000,color:'blak',camera:54},
//     {name:'sa',price:33000,color:'back',camera:5},
// ];
// function cheapest(phones){
//     let cheapesst=phones[0];
//     for(let i=0;i<phones.length;i++){
//         const phone=phones[i];
//         if(phone.price<cheapesst.price){
//             cheapesst=phone;
//         }
//     }
//     return cheapesst;
// }
// const cheap=cheapest(phones);
// console.log(cheap)

// const product=[
//     {name:'shirt',price:25},
//     {name:'shirt',price:25},
//     {name:'shirt',price:25},
//     {name:'shirt',price:25},
//     {name:'shirt',price:25},
// ];
// function total(product){
//     let totlPrice=0;
//     for(let i=0;i<product.length;i++){
//         const singleProduct=product[i];
//         totlPrice=totlPrice+singleProduct.price;
//     }
//     return totlPrice;
// }
// const totalPrice=total(product);
// console.log(totalPrice) 

            //   function ticketPrice(tickets){
            //     let total;
            //     if(typeof tickets!=='number'){
            //         return 'please type a number';
            //     }
            //     else if(tickets<=100){
            //          total=100*tickets;
            //     }
            //     else if(tickets>100 && tickets<=200){
            //           total=100*100+ (tickets-100)*90;
            //     }
            //     else{
            //          total=(100*100)+(100*90)+(tickets-200)*70;
            //     }
            //     return total;
            //   }
            //   console.log(ticketPrice(4));

            const num=5;
     if(Array.isArray(num)===true){
        console.log('it is array');
     }
     else{
        console.log('isnot')
     }