import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { GetCurrentUserId } from '../auth/decorators/get-current-user-id.decorator';
import { ListingDto } from './dto/listing.dto';
import { ListingService } from './listing.service';
import { Public } from '../auth/decorators/public.decorator';

@Controller('listings')
export class ListingController {
  constructor(private readonly _listingService: ListingService) { }

  @Post('create')
  @HttpCode(HttpStatus.OK)
  createListing(@Body() listing: ListingDto, @GetCurrentUserId() userId: string) {
    return this._listingService.createListing(listing, userId);
  }

  @Put(':listingId')
  @HttpCode(HttpStatus.OK)
  updateListing(@Body() listing: ListingDto, @Param('listingId') listingId: string) {
    return this._listingService.updateListing(listing, listingId);
  }

  @Delete(':listingId')
  @HttpCode(HttpStatus.OK)
  removeListing(@Param('listingId') listingId: string) {
    return this._listingService.deleteListing(listingId);
  }

  @Post('favorites/:listingId')
  @HttpCode(HttpStatus.OK)
  addFavorite(
    @Param('listingId') listingId: string,
    @GetCurrentUserId() userId: string,
  ) {
    return this._listingService.addRemoveFavorite(listingId, userId, 'ADD');
  }

  @Delete('favorites/:listingId')
  @HttpCode(HttpStatus.OK)
  removeFavorite(
    @Param('listingId') listingId: string,
    @GetCurrentUserId() userId: string,
  ) {
    return this._listingService.addRemoveFavorite(listingId, userId, 'REMOVE');
  }

  @Public()
  @Get(':listingId')
  @HttpCode(HttpStatus.OK)
  listing(@Param('listingId') listingId: string) {
    return this._listingService.getOneListing(listingId);
  }

  @Public()
  @Get()
  @HttpCode(HttpStatus.OK)
  listings(@Query() query) {
    return this._listingService.getListings(query);
  }

  @Get('favorites/list')
  @HttpCode(HttpStatus.OK)
  favorites(@Query() query) {
    return this._listingService.getFavoriteListings(query);
  }

  @Get('properties/list')
  @HttpCode(HttpStatus.OK)
  properties(@Query() query) {
    return this._listingService.getAgentProperties(query);
  }
}
