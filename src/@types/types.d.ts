type Lazy<T> = () => T;

type LazyList<T> = Lazy<{
  head: Lazy<T[]>;
} | void>;

type SuccessCodes = 200 | 201;

type ErrorCodes = 400 | 401 | 404 | 500;

//Mongoose

type TMongoId = import("mongoose").Schema.Types.ObjectId;

type TMongoDocument = import("mongoose").Document;

//Express
type TResponse = import("express").Response;

type TRequest = import("express").Request;

type TNext = import("express").NextFunction;

type Handler = (
  req: TRequest,
  res: TResponse,
  next: import("express").NextFunction
) => Promise<TResponse | void> | TResponse | void;
