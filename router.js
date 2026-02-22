//router.js

import express from 'express'
import { userModel } from '../model/model.js'

const mob = express.Router()

//controller + router
mob.post('/create', async(req, res)=> {
    const {name, email, password} = req.body
   const data = userModel({name, email, password})
   const result = await data.save()
   res.json({
    success: true,
    code: 200,
    message: "Data Saved in database",
    data: result,
    error: false 
   })
})


mob.put('/update/:id', async(req, res)=> {
    const {name, email, password} = req.body
    const {id} = req.params
    const update = await userModel.updateOne({_id: id}, {$set: {name, email, password}})
    res.json({
    success: true,
    code: 200,
    message: "Data Updated in database",
    data: update,
    error: false 
   })
})


mob.delete('/delete/:id', async(req, res)=> {
    const {id} = req.params
    const del = await userModel.deleteOne({_id: id})
    res.json({
    success: true,
    code: 200,
    message: "Data Deleted in database",
    data: del,
    error: false 
   })
})


export default mob