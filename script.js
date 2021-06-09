const sno=1;

const user= function(name){
    console.log(`User name is ${name}`)
}

const id= function(userId){
    console.log(`User ID: ${userId}`)
}

function multipy(x,y){
    return `Salary:Rs.${x*y}`
}
module.exports={sno,user,id,multipy};