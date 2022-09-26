import createError from "../controller/errorController.js";
import jwt from 'jsonwebtoken';

//Check user is authenticated or not
export const userMiddleware = (req, res, next) => {

   try {
    const token = req.cookies.access_token; 

   // Check token
   if(!token){
    return next(createError(401, "You are not authenticated"));
   }


   // if logged in
   const login_user = jwt.verify(token, process.env.JWT_SECRET);

   if(!login_user){
      return next(createError(401, "Invalid token"));  
   }

   if( login_user.id !== req.params.id ){
    return next(createError(401, "You are not able to access this feture")); 
   }

   if( login_user){
      req.user = login_user;
      next();
   }


   } catch (error) {
    return next(error)
   }

}