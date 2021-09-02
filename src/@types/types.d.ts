type Lazy<T> = () => T;

type LazyList<T> = Lazy<{
  head: Lazy<T>;
  tail: LazyList<T>;
} | void>;

type TMongoId = import("mongoose").Schema.Types.ObjectId;

type TMongoDocument = import("mongoose").Document;

type TResponse = import("express").Response;

type TRequest = import("express").Request;

type TNext = import("express").NextFunction;

type Handler = (
  req: TRequest,
  res: TResponse,
  next: import("express").NextFunction
) => Promise<TResponse | void> | TResponse | void;
