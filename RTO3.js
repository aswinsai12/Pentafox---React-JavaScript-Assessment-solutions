function useReduce(orders){
    const mapping=orders.reduce((map,key)=>{
         map[key.status]=(map[key.status]||0)+1;
    },{});
    return mapping;
}
//done