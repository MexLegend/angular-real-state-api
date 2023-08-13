import { Injectable } from '@nestjs/common';
import { v2, UploadApiErrorResponse, DeleteApiResponse, UploadApiResponse } from 'cloudinary';
import toStream from 'buffer-to-stream';

@Injectable()
export class CloudinaryService {

    async uploadImage(
        file: Express.Multer.File,
    ): Promise<UploadApiResponse | UploadApiErrorResponse> {

        return new Promise((resolve, reject) => {
            const upload = v2.uploader.upload_stream((error, result) => {
                if (error) return reject(error);
                resolve(result);
            });

            toStream(file.buffer).pipe(upload);
        });
    }

    async deleteImages(publidIds: string[]): Promise<DeleteApiResponse> {

        return new Promise((resolve, reject) => {
            v2.api.delete_resources(publidIds, (error, result) => {
                if (error) {
                    console.log(error);

                    return reject(error)
                };
                resolve(result);
            });
        });
    }
}