function theBeatlesPlay(musicians, instruments){
  const arr = [];
  var i = ()
  for(let i=0; i < musicians.length; i++){
    if (i === 1){
      arr.push("John Lennon plays guitar")
    }else{
      arr.push(`${musicians[i]} plays ${instruments}.`)
    }
  }
  return arr[i];
}

