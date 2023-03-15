import express from 'express';
import {pinLocation} from '../models/pin.js';
const router = express.Router();


// create the pinlocation
router.post('/location',async(res,req)=>
{
    
    const data = new pinLocation (req.body);

    try{
       
         const save_data = await data.save();
         res.status(200).json(save_data);
         

    }catch(err)
    {
        res.status(500).json(err);
    }
});

//get the pin location

router.get('/getLocation',async(req,res)=>
{
    try
    { 
        const all = await pinLocation.find();
        res.status(200).json(all);
         
    }catch(err)
    {
        res.status(500).json(err);
    }
})

 export default router;