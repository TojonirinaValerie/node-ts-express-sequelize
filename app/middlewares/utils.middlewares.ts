import { NextFunction, Request, Response } from 'express';
import { RequestService } from '../services/utilsService';

const verifyField = (fieldRequired: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!RequestService.isCompletePostData(req, fieldRequired))
      return RequestService.sendResponse(
        res,
        400,
        false,
        RequestService.fieldRequiredMissedMessage(fieldRequired),
      );
    next();
  };
};

export default {
  verifyField,
};
