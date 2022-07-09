import toStream from "buffer-to-stream";
import { UploadApiErrorResponse, UploadApiResponse, v2 as cloudinary } from "cloudinary";

export const uploadImage = async (
  file: any
): Promise<UploadApiResponse | undefined | UploadApiErrorResponse> => {
  return new Promise((resolve, reject) => {
    const upload = cloudinary.uploader.upload_stream(
      {
        folder: "projects",
        transformation: [{ width: 600, height: 600, crop: "scale" }],
      },
      (error, result) => {
        if (error) reject(error);
        resolve(result);
      }
    );
    toStream(file.buffer).pipe(upload);
  });
};
