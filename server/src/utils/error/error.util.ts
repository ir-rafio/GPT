import { Prisma } from '@prisma/client';
import { Response } from 'express';
import { ZodError } from 'zod';

export interface ErrorResponseObject {
  statusCode: number;
  responseMessage: string;
  logMessage: object;
}

export const handleLibraryError = (error: any, res: Response) => {
  let errorResponseObject: ErrorResponseObject | null = null;

  if (
    error instanceof Prisma.PrismaClientRustPanicError ||
    error instanceof Prisma.PrismaClientInitializationError ||
    error instanceof Prisma.PrismaClientValidationError ||
    error instanceof Prisma.PrismaClientKnownRequestError
  ) {
    errorResponseObject = {
      statusCode: 500,
      responseMessage: 'Internal server error.',
      logMessage: error,
    };
  } else if (error instanceof ZodError) {
    errorResponseObject = {
      statusCode: 400,
      responseMessage: 'Invalid request format.',
      logMessage: error,
    };
  } else {
    errorResponseObject = {
      statusCode: 418,
      responseMessage: 'Unhandled error.',
      logMessage: error,
    };
  }

  console.log({
    level: 'error',
    message: error,
  });

  res.statusMessage = errorResponseObject.responseMessage;
  return res.status(errorResponseObject.statusCode).end();
};

export const handleClientError = (
  statusCode: number,
  responseMessage: string,
  res: Response
) => {
  res.statusMessage = responseMessage;
  return res.status(statusCode).end();
};
