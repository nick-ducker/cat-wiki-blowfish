import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class CatsService {
  private _client: AxiosInstance;

  private client(): AxiosInstance {
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
}
