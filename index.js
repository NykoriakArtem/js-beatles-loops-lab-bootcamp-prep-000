function theBeatlesPlay(musicians, instrument){
  const arr = [];
  
  for(let i=0; i < musicians.length; i++){
    if (i === 1){
      arr.push(`${musicians[i]} plays ${instrument}.`)
    }else{
      arr.push(`${musicians[i]} plays ${instrument}.`)
    }
  }
  return arr[i];
}

