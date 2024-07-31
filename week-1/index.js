// let a = 20 ;
// console.log(a);

const allUsers = [
    {
        firstName : "Alex",
        gender : "male"
    },
    {
        firstName : "Smith",
        gender : "male"
    },
    {
        firstName : "Priya",
        gender : "female"
    }
]
for(let i=0; i<allUsers.length; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstName"]);
    }
}