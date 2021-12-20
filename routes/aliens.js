const express=require('express')
const router=express.Router()
const Alien=require('../models/alien');

// to get alien
router.get('/',async(req,res)=>{
  try{
    const aliens=await Alien.find();
    res.json(aliens);
  }catch(err){
      res.send('Error'+err)
  }
})

// to create aliend 
router.post('/',async(req,res)=>{
  // create an object for storing data
  // Should have a response format
  const alien=new Alien({
      name:req.body.name,
      tech:req.body.tech,
      sub:req.body.sub,
  })

     try{
      const a1=await alien.save();
      res.json(a1);

     }catch(err){
         res.send('Error'+err)
     }
})

// To get single alien
router.put('/:id',async(req,res)=>{
  try{
    // we use params not body since we are getting the id from the url
    const alien=await Alien.findById(req.params.id);
    res.json(alien)
  }catch(err){
    res.send("Value doesn't exit!");
  }
 
})

//To edit an alien
 
router.patch('/:id',async(req,res)=>{
  try{
  const alien=await  Alien.findById(req.params.id);
    alien.sub=req.body.sub;
    const ai=await alien.save();
    res.json(ai)
  }catch(err){
    res.send('Error'+err)
  }
})

router.delete('/:id',async(req,res)=>{
  try{
    const alien=await Alien.findById(req.params.id);
     const ai=await alien.remove();
     res.json(ai);
  }catch(err){
    res.send('Error'+err)
  }
})
module.exports=router