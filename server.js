const express = require("express");
const dbConnect = require("./dbConnect");

const app = express();
app.use(express.json());
app.use(express.json());

const usersRoute = require("./routes/userRoute");

const itemsRoute = require("./routes/itemsRoute");

const billsRoute = require('./routes/billsRoute')


app.use("/api/bills/", billsRoute);
app.use("/api/users/", usersRoute);
app.use("/api/items/", itemsRoute);
const path = require('path')


if(process.env.NODE_ENV==='production')
{
    app.use('/' , express.static('client/build'))
    app.get('*' , (req,res)=>{
         res.sendFile(path.resolve(__dirname , 'client/build/index.html'))
    }) 
}
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World! from home api"));
app.listen(port, () => console.log(`Node JS Server Running at port ${port}`));
