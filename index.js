//get express module
const express = require("express")

//create an instance of express or server
let app = express()

//add callback to server- it will keep listening to port when run
app.listen(4000,()=>{
    console.log('server listen to port 4000')
})