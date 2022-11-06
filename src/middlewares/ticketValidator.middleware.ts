import { NextFunction, Response, Request } from 'express';

export const ticketValidator = (req: Request, res: Response, next: NextFunction) => {
  console.log('=== EJECUTANDO MIDDLEWARE====');
  const bodyData = req.body;
  console.log(`BODY TICKET VALIDATOR:`, bodyData);

  if (!(Object.keys(bodyData).length > 0)) return res.status(404).json({ message: `error in ticket body` });

  return next();
};
