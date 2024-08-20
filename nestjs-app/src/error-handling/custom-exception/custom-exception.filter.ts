import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, Global } from '@nestjs/common';
import { Response } from 'express';
import { Prisma } from '@prisma/client';

@Global()
@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : 'Internal server error';

    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      switch (exception.code) {
        case 'P2002':
          response
            .status(HttpStatus.BAD_REQUEST)
            .json({ statusCode: HttpStatus.BAD_REQUEST, message: 'Unique constraint failed', error: 'Bad Request' });
          return;
        case 'P2025':
          response
            .status(HttpStatus.NOT_FOUND)
            .json({ statusCode: HttpStatus.NOT_FOUND, message: 'Record not found', error: 'Not Found' });
          return;
        default:
          response
            .status(HttpStatus.BAD_REQUEST)
            .json({ statusCode: HttpStatus.BAD_REQUEST, message: exception.message, error: 'Bad Request' });
          return;
      }
    }

    response.status(status).json({
      statusCode: status,
      message: message,
    });
  }
}