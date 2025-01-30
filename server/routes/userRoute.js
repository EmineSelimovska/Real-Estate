import express from 'express';
import { bookVisit, cancelBooking, createUser, getAllBookings, getAllFavorites, toFavorite } from '../controllers/userController.js';
const router = express.Router();

router.post('/register', createUser)
router.post("/bookVisit/:id", bookVisit)
router.post("/allBookings", getAllBookings)
router.post("/removeBooking/:id", cancelBooking)
router.post("/toFav/:resId", toFavorite);
router.post("/allFav", getAllFavorites)
export {router as userRoute}