import {
  BadRequestException,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { CloudinaryService } from './cloudinary.service';

@Controller('cloudinary')
export class CloudinaryController {
  constructor(private readonly _cloudinaryService: CloudinaryService) {}

  @Public()
  @Delete()
  @HttpCode(HttpStatus.OK)
  async listing(@Query('public_ids') publicIds: string | string[]) {
    const safePublicIdsArray =
      typeof publicIds === 'string' ? [publicIds] : publicIds;

    return await this._cloudinaryService
      .deleteImages(safePublicIdsArray)
      .catch((e) => {
        console.log(e);

        throw new BadRequestException('File not found');
      });
  }
}
