import { UploadApiErrorResponse, UploadApiResponse, v2 as cloudinary } from "cloudinary";

export const storageCloudImage = async (
  file: any
): Promise<UploadApiResponse | undefined | UploadApiErrorResponse> => {
  return new Promise((resolve, reject) => {
    const result = cloudinary.uploader.upload(file);
    if (result) resolve(result);
    reject("error");
  });
};
