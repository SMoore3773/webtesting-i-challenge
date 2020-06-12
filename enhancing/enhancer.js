module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement<20){
    item.enhancement ++;
  return { ...item, enhancement:item.enhancement };
  }else{
    return(item)
  }
  

}

function fail(item) {
  if(item.durability === 0){
    return{...item}
  }else{
    if(item.enhancement >=16){
      let newDur = item.durability -10;
      let newEnh = item.enhancement -1;
      item = {...item, durability: newDur, enhancement: newEnh}
    }else if(item.enhancement<15){
      let newDur= item.durability -5;
      item = {...item, durability: newDur};
    }else if(item.enhancement = 15){
      let newDur = item.durability -10;
      item = {...item, durability: newDur}
    } 
   return { ...item }; 
  }
  
 

  
}

function repair(item) {
  item = {...item, durability:100};

  return {...item};
}

function get(item) {
  return { ...item };
}
