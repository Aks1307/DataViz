const express=require('express');
const path=require('path');
const app=express();
const port=process.env.PORT||3000
app.use(express.static(path.join(__dirname,"public")));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})
app.get('/wordcloud',(req,res)=>{
    res.sendFile(path.join(__dirname+'/wordcloud.html'));
})

app.get('/likelihood',(req,res)=>{
    res.sendFile(path.join(__dirname+'/likelihood.html'));
})

app.listen(port,()=>{
    console.log("Server Started ");
})