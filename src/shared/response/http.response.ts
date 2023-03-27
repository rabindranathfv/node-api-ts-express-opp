import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export class HttpResponse {
  OK(res: Response, data: any): Response {
    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      statusMessage: 'SUCCESS',
      data,
    });
  }

  NotFound(res: Response, data: any): Response {
    return res.status(StatusCodes.NOT_FOUND).json({
      status: StatusCodes.NOT_FOUND,
      statusMessage: 'NOT FOUND',
      data,
    });
  }

  Unauthorized(res: Response, data: any): Response {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      status: StatusCodes.UNAUTHORIZED,
      statusMessage: 'UNAUTHORIZED',
      data,
    });
  }

  Forbidden(res: Response, data: any): Response {
    return res.status(StatusCodes.FORBIDDEN).json({
      status: StatusCodes.FORBIDDEN,
      statusMessage: 'FORBIDDEN',
      data,
    });
  }

  Error(res: Response, data: any): Response {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: 'UNAUTHORIZED',
      data,
    });
  }
}
