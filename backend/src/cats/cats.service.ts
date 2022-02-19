import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { ImageResponseDto } from './dtos/images.dto';

@Injectable()
export class CatsService {
  private _client: AxiosInstance;

  get client(): AxiosInstance {
    if (!this._client) {
      this._client = axios.create({
        baseURL: this.apiBase,
        headers: this.apiHeaders,
      });
    }

  return this._client;
  }

  get apiBase(): string {
    return process.env.CAT_API_ENDPOINT;
  }

  get apiHeaders(): Record<string, string> {
    return {
      'x-api-key': `${process.env.CAT_API_KEY}`,
    };
  }

  public async getCatGif(): Promise<string> {
    let images: ImageResponseDto
    let { data } = await this.client.get('images/search?mime_types=gif')
    images = data
    
    if(images.length > 0) {
      return images[0].url
    } else {
      throw new Error('No images found')
    }
  }
}
