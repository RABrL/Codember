/*"109105100117" -> midu
/*"109105100117" -> midu
"9911110010110998101114" -> codember
"9911110010110998101114 109105100117" -> codember midu
"11210897121 116101116114105115" -> play tetris*/

console.time('challenge02')
const input = `11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101`
const ASCII_MINUSCULAS = {97:'a',98:'b',99:'c',100:'d',101:'e',102:'f',103:'g',104:'h',105:'i',106:'j',107:'k',108:'l',109:'m',110:'n',111:'o',112:'p',113:'q',114:'r',115:'s',116:'t',117:'u',118:'v',119:'w',120:'x',121:'y',122:'z'};

const inputArr = input.split(' ')
let words = ''

inputArr.forEach(asciiWord=>{
  let word = ''
  let num = 0;
  asciiWord.split('').forEach(char=>{
    num = num * 10 + (char - '0');
    if(num>=97 && num<=122){
      word += ASCII_MINUSCULAS[num]
      num=0
    }
  })
  words += word + ' ';
})

console.log(`submit ${words}`)
console.timeEnd('challenge02')