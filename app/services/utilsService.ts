import { Request, Response } from 'express';
import Joi from 'joi';

interface ResponseType {
  code: number;
  success: boolean;
  message: string;
  data: any;
}

export const JoyValidatorMessage: Joi.LanguageMessages = {
  'string.base': 'Le champ {#label} doit être une chaîne de caractères',
  'number.base': 'Le champ {#label} doit être un nombre',
  'any.required': 'Le champ {#label} est obligatoire',
  'string.empty': 'Le champ {#label} ne doit pas être vide',
  'string.email': "L'email doit être une adresse email valide",
  'string.min': 'Le champ {#label} doit avoir au moins {#limit} caractères',
  'string.max': 'Le champ {#label} ne peut pas dépasser {#limit} caractères',
  // 'object.unknown': '',
};

export const RequestService = {
  sendResponse: function (
    res: Response,
    code: number,
    success: boolean,
    message: string,
    data?: any,
  ) {
    const response: ResponseType = { success, message, code, data };
    return res.status(code).json(response);
  },
  serverError: function (res: Response, message?: string) {
    return this.sendResponse(res, 500, false, message || 'Oups!! Erreur du serveur...');
  },
  isCompletePostData: function (
    req: Request,
    requiredField: string[],
  ): boolean {
    const body = req.body;
    const bodyKey = Object.keys(body);

    return requiredField.every((field) => {
      return bodyKey.includes(field);
    });
  },
  isCompleteParamsData: function (
    req: Request,
    requiredField: string[],
  ): boolean {
    const params = req.params;
    const paramsKey = Object.keys(params);

    return requiredField.every((field) => {
      return paramsKey.includes(field);
    });
  },
  fieldRequiredMissedMessage: function (requiredField: string[]): string {
    return `Veuillez compléter tous les champs obligatoires: ${requiredField}`;
  },
};
