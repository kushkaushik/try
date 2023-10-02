const express = require('express')
const app = express();



app.get('/data' , (req , res) =>{
    res.json({
        msg : "hellow mr kush kaushik"
    })
    
})




app.listen(3000 , () =>{
    console.log("Hey User how are you")
})