import express from 'express';
import employeeRouter from './emp_router';

const app=express();

app.use("/employees",employeeRouter)

app.get('/',(req,res)=>{
    res.send('Started now')
})

app.get('/employees',(req,res)=>{
    res.status(200).send('Employee')
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});