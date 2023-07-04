import { NextFunction, Request, Response } from 'express';
import User from '../models/user.model';
import { Model, where } from 'sequelize';
import { UserAttributes } from '../types/user.type';
import { RequestService } from '../services/utilsService';

const checkDuplicateEmail = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((value: Model<UserAttributes> | null) => {
    if (value)
      return RequestService.sendResponse(
        res,
        409,
        false,
        'Cet email est déjà utilisé',
      );
    next();
  });
};

export default {
  checkDuplicateEmail,
};
