fetch('./users.txt')
  .then(res => res.text())
  .then(usersStr => {
    const REQUIRED_KEYS = ['usr','eme','psw','age','loc','fll'];
    console.time('Challenge01')

    const usersArr = usersStr.split('\n');
    let correctUsers = 0;
    let lastCorrectUser = '';
    let objUser ={}

    usersArr.forEach(user=>{
    if(user.length){
        user.split(' ').forEach(propValue =>{ //Divido cada usuario en un array ejm ['usr:@midudev','eme:mi@gmail.com'...] y lo itero con el foreach
        const propValueArr=propValue.split(':');
        objUser[propValueArr[0]] = propValueArr[1]
        })
    }else {
        if(REQUIRED_KEYS.every(key => Object.keys(objUser).includes(key))){
        correctUsers++;
        lastCorrectUser = objUser.usr; 
        }
        objUser = {};
    }
    })

    console.log(`submit ${correctUsers}${lastCorrectUser}`)
    console.timeEnd('Challenge01')
  });