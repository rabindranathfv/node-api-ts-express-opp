import { validate, ValidationError } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { HttpResponse } from '../../shared/response/http.response';
import { sanitize } from 'class-sanitizer';
import { plainToClass } from 'class-transformer';

export class PurchaseMiddleware {
  constructor(private readonly httpResponse: HttpResponse = new HttpResponse()) {}
  purchaseValidator(req: Request, res: Response, next: NextFunction, type: any) {
    const dtoObj = plainToClass(type, req.body);

    try {
      validate(dtoObj).then((err) => {
        if (err.length > 0) {
          const dtoErrors = err.map((error: ValidationError) => (Object as any).values(error.constraints)).join(', ');
          return this.httpResponse.Error(res, dtoErrors);
        } else {
          sanitize(dtoObj);
          req.body = dtoObj;
          next();
        }
      });
    } catch (error) {
      console.log('🚀 ~ file: purchase.middleware.ts:25 ~ PurchaseMiddleware ~ purchaseValidator ~ error:', error);
    }
  }
}
