function theBeatlesPlay(musicians, instruments) {
  const arr = [];

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return arr;
}

function johnLennonFacts(facts) {
  const shoutedFacts = [];
  let i = 0;
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`);
    i++
  }
}
  
function iLoveTheBeatles(n){
  const love = [];
do {
  love.push(' I love the Beatles!')
  n++
} while (n<25)
return love
}



