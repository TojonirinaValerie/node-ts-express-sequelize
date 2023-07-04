import { Request, Response } from 'express';
import { UserAttributes } from '../types/user.type';
import { UserService } from '../services/UserService';
import { RequestService } from '../services/utilsService';
import User from '../models/user.model';
import { Model } from 'sequelize';

export const login = (req: Request, res: Response) => {
  return RequestService.serverError(res);
};

export const signup = (req: Request, res: Response) => {
  const userData: UserAttributes = req.body;
  const { value, error } = UserService.signupDataValidator(userData);

  if (error) return RequestService.sendResponse(res, 400, false, error.message);

  User.create(userData)
    .then((value: Model<UserAttributes>) => {
      return RequestService.sendResponse(
        res,
        200,
        true,
        'Utilisateur créé avec succès.',
        value,
      );
    })
    .catch((error) => {
      console.log(error);
      return RequestService.serverError(
        res,
        `enregistrment échoué: ${error.message}`,
      );
    });
};
