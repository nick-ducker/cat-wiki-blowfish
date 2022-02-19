import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(
    private readonly catsSevice: CatsService
  ){}
  private readonly logger = new Logger(CatsController.name);

  @Get('/cat-gif')
  async getCatGif(): Promise<string> {
    try {
      
    } catch (error) {
      
    } finally {
      
    }
  }

  @Post('/favorite-cat')
  async favoriteCat(
    @Body() favoriteCat: FavoriteCatDto,
  ): Promise<void> {
    try {
      
    } catch (error) {
      
    } finally {
      
    }
  }

  @Get('/all-favorites')
  async allFavorites(): Promise<string[]> {
    try {
      
    } catch (error) {
      
    } finally {
      
    }
  }

  @Get('/breedIds')
  async getBreedIds(): Promise<{id: string, name: string}[]> {
    try {
      
    } catch (error) {
      
    } finally {
      
    }
  }

  @Get('/breedDetails')
  async getBreedIds(
    @Body() id: string,
  ): Promise<BreedDetails> {
    try {
      
    } catch (error) {
      
    } finally {
      
    }
  }

  @Get('/breedImage')
  async getBreedIds(
    @Body() id: string,
  ): Promise<string> {
    try {
    } catch (error) {
      
    } finally {
      
    }
  }

}
