import { Router } from 'express';
import  Employee  from './Employee'

const employeeRouter=Router()

let employees:Employee[] = [
 {
    id:1,
    name:"Employee 1",
    email:"employee1@gmail.com",
    createdAt:new Date(),
    updatedAt:new Date()
 },
 {
    id:2,
    name:"Employee 2",
    email:"employee2@gmail.com",
    createdAt:new Date(),
    updatedAt:new Date()
 },

]

employeeRouter.get("/",(req,res)=>{
    console.log('Employee endpoint executed successfully')
    res.status(200).send(employees)
})

employeeRouter.post('/',(req,res)=>{

    const {name,email} =req.body
    const employee=new Employee()
    employee.name=name
    employee.email=email
    employee.createdAt=new Date()
    employee.updatedAt=new Date()
    employees.push(employee)

    res.status(201).send(employees)
})

employeeRouter.get('/:id',(req,res)=>{
    const id =parseInt(req.params.id)
    res.status(200).send(employees.find((emp)=>emp.id===Number(id)))
})

employeeRouter.put('/:id',(req,res)=>{
    const id =req.params.id
    res.status(200).send(`Employee ${id} Put successfull `)
})

employeeRouter.patch('/:id',(req,res)=>{
    const id =req.params.id
    res.status(200).send(`Employee ${id} patch successfull `)
})

employeeRouter.delete('/:id',(req,res)=>{
    const id =req.params.id
    res.status(200).send(`Employee ${id} delete successfull`)
})

// module.exports=employeeRouter

export default employeeRouter

