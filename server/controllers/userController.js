import asyncHandler from 'express-async-handler';

import {prisma} from '../config/prismaConfig.js'

export const createUser = asyncHandler(async( req, res) => {
console.log('Creating a user');

let {email} = req.body;
const userExist = await prisma.user.findUnique({where: {email: email}})
if(!userExist){
    const user = await prisma.user.create({data: req.body})
    res.send({
        message: "User registered successfull",
        user: user,
    });
}else {
  res.status(201).send({message: "User already registered"})
}

})

export const bookVisit = asyncHandler(async (req, res) => {
  const {id} = req.params;
  const {email, date} = req.body;

  try{
      const booked = await prisma.user.findUnique({
        where: {email},
        select: {bookedVisit: true}
      })

      if(booked.bookedVisit.some((visit) => visit.id === id)){
        res.status(400).json({message: "This residency is already booked by you!"})
      }else{
        await prisma.user.update({
          where:{email:email},
          data: {
            bookedVisit: {push: {id, date}}
          }
        })
      }
      res.send("Your visit is booked successfully!")
  }catch(err){
    throw new Error(err.message);
  }
})

export const getAllBookings = asyncHandler(async(req, res) => {
  const {email} = req.body;

  try{
    const allBookings = await prisma.user.findUnique({
      where: {email},
      select: {bookedVisit: true}
    })
    res.status(200).send(allBookings)
  }catch(err){
    throw new Error(err.message)
  }
 
})

export const cancelBooking = asyncHandler(async (req, res) => {
  const {email} = req.body;
  const {id} = req.params;

  try {

    const user = await prisma.user.findUnique({
      where: {email: email},
      select: {bookedVisit: true}
    })

    const index = user.bookedVisit.findIndex((visit) => visit.id === id);

    if(index === -1){
      res.status(404).json({message: "Booking not found"});
    }else{
      user.bookedVisit.splice(index,1);

      await prisma.user.update({
        where: {email},
        data: {
          bookedVisit: user.bookedVisit
        }
      })

      res.send('Booking cancelled successfully!')
    }
  }catch(err){
    throw new Error(err.message);
  }
})

export const toFavorite = asyncHandler(async (req,res) => {
  const {email} = req.body;
  const {resId} = req.params;

  try{
    const user = await prisma.user.findUnique({
      where: {email}
    })


    if(user.favResidenciesID.includes(resId)){
      const updatedUser = await prisma.user.update({
        where: {email},
        data:{
          favResidenciesID: {
            set: user.favResidenciesID.filter((id) => id !== resId)
          }
        }
      });
      res.send({message: "Removed from favorites", user: updatedUser})
    }else{
      const updatedUser = await prisma.user.update({
        where: {email},
        data:{
          favResidenciesID:{
            push:resId
          }
        }
      })
      res.send({message: "Updated favorites", user: updatedUser})
    }
  }catch(err){
    throw new Error(err.message)
  }
})

export const getAllFavorites = asyncHandler(async (req, res) => {
  const {email} = req.body;

  try{
    const favResid = await prisma.user.findUnique({
      where: {email},
      select: {favResidenciesID: true}
    })
    res.status(200).send(favResid);
  }catch(err){
    throw new Error(err.message);
  }
})