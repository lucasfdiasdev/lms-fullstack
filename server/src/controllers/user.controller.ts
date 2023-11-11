require('dotenv').config();
import ejs from 'ejs';
import jwt, { Secret } from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";

import userModel from "../models/user.model";
import ErrorHandler from "../utils/ErrorHandler";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import path from 'path';
import sendMail from '../utils/sendMail';

interface IRegistrationBody {
  name: string;
  email: string;
  password: string;
  avatar?: string;
};

export const registrationUser = CatchAsyncError(async(req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;

    const isEmailExist = await userModel.findOne({email});
    if(isEmailExist) {
      return next(new ErrorHandler("Email already exist", 400))
    };

    const user: IRegistrationBody = {
      name,
      email,
      password
    };

    const activationToken = createActivationToken(user);

    const activationCode = activationToken.activationCode;

    const data = { user: {name:user.name}, activationCode };
    const html = await ejs.renderFile(path.join(__dirname, "../mails/activation-mail.ejs"), data);

    try {
      await sendMail({
        email: user.email,
        subject: "Activate you account",
        template: "activation-mail.ejs",
        data
      })
  
      res.status(201).json({
        success: true,
        message: `Please check yout email: ${user.email} to activete your account`,
        activationToken: activationToken.token,
      })
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400))
      
    }
    
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 400))
  }
});

interface IActivationToken {
  token: string;
  activationCode: string;
};

const activationTokenSecret = process.env.ACTIVATION_TOKEN_SECRET as Secret;

export const createActivationToken = (user: any): IActivationToken => {
  const activationCode = Math.floor(1000 + Math.random() * 9000 ).toString();

  const token = jwt.sign({
    user,
    activationCode
  },activationTokenSecret, {
    expiresIn: "5m",
  });

  return {token, activationCode};

};