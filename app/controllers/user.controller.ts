import { Request, Response } from 'express';
import User from '../models/user.model';
import { RequestService } from '../services/utilsService';

// export const getAllUser = (req: Request, res: Response) => {
//   let listField: string[] = req.body.listField as string[];

//   if (listField.length === 0) listField = req.body.userFields;

//   User.findAll({ attributes: listField })
//     .then((data) => {
//       res.status(200).json({
//         message: 'success',
//         data,
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         message: err.message,
//       });
//     });
// };

export const getUserData = (req: Request, res: Response) => {
  // const id: string = req.params.id;
  // User.findOne({ where: { id } })
  //   .then((data) => {
  //     if (data)
  //       return res.status(200).json({
  //         message: 'success',
  //         data,
  //       });
  //     else
  //       return res.status(404).json({
  //         message: 'user not found',
  //       });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     return res.status(500).json({ message: 'erreur serveur' });
  //   });
};

export const getUsersFieldList = (req: Request, res: Response) => {
  User.describe()
    .then((data) => {
      return RequestService.sendResponse(
        res,
        200,
        true,
        'Opération réussie',
        data,
      );
    })
    .catch((err) => {
      return RequestService.serverError(res, `Échec de l'opération ${err.message}`);
    });
};

export const updateUser = (req: Request, res: Response) => {
  return RequestService.serverError(res);
};

export const deleteUser = (req: Request, res: Response) => {
  return RequestService.serverError(res);
};
