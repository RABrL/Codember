const minPasw = 11098
const maxPasw = 55999
let validPaswCount = 0
let paswds = []
for(i=minPasw;i<=maxPasw;i++){
  const numberStr = i.toString()
  const numberArr = numberStr.split('')
  if(numberStr.includes('55')){
    let lastNum = 1
    let isValid = true
    numberArr.forEach(currentNum =>{
      if(lastNum > currentNum){
        return isValid = false;
      }
      lastNum = currentNum
    })
    if(isValid){
      validPaswCount++
      paswds.push(i)
    } 
  }
}

console.log(`submit ${validPaswCount}-${paswds[55]} `)