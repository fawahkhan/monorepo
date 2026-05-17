import express from 'express';

const app = express();

const PORT = process.env.PORT || 3001 ;

app.get('/api', (req,res)=>{
    res.json({
        message: "Hello express in monorepo"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})