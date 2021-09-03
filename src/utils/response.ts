type ReponseKey = SuccessCodes | ErrorCodes;

const statusResponses: Record<ReponseKey, string> = {
  200: "OK!",
  201: "CREATED!",
  400: "CLIENT ERROR!",
  401: "UNAUTHORIZED",
  404: "NOT FOUND!",
  500: "INTERNAL SERVER ERROR",
};

export const success = (
  res: TResponse,
  data: Object | string,
  statusCode: SuccessCodes
) => {
  const status = statusCode ? statusCode : 200;
  return res
    .status(status)
    .json({ messageStatus: statusResponses[status], data, status });
};

export const error = (res: TResponse, msg: string, statusCode: ErrorCodes) => {
  const status = statusCode ? statusCode : 500;
  return res.status(status).json({ messageStatus: statusResponses[status], msg, status });
};
