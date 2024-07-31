const express = require("express")
const app = express();

const user = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]
}];
app.use(express.json());
app.get("/", (req,res)=>{
    // write a logic about how many kidney they have and healthy one
    const johnKidneys = user[0].kidneys;
    const numberOfKidney = johnKidneys.length;
    let numberOfHealthyKidney = 0;
    for(let i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidney++;
        }
    }
    const numberOfUnhealthyKidney = numberOfKidney-numberOfHealthyKidney;
    res.json({
        numberOfKidney,
        numberOfHealthyKidney,
        numberOfUnhealthyKidney
    })
})

app.post("/", (req, res)=>{
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done"
    })
})

app.put("/", (req,res)=>{
    for(let i=0; i<user[0].kidneys.length; i++){
        user[0].kidneys[i].healthy = true;
    }
    res.json({}); 
})

// removing all the unhealthy kidneys
app.delete("/", (req, res)=>{
    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys = [];
        for(let i=0; i<user[0].kidneys.length; i++){
            if(user[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        user[0].kidneys = newKidneys;
        res.json({msg: "done"})
    } else{
        res.status(411).json({
            msg: "you have no bad kidneys"
        });
    }
    
    user[0].kidneys = newKidneys;
    res.json({msg: "done"})
})

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i=0; i<user[0].kidneys.length; i++){
        if(!user[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}
app.listen(3000);