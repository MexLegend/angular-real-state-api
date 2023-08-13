import { Module } from '@nestjs/common';
import { ListingService } from './listing.service';
import { ListingController } from './listing.controller';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  providers: [ListingService, CloudinaryService],
  controllers: [ListingController]
})
export class ListingModule {}
