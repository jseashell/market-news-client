import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { WatchlistResponse } from 'src/app/watchlist/watchlist.interface';
import { CreateWatchlistDto, UpdateWatchlistDto } from './watchlist.dto';

const userId = 'example-id-000';

@Injectable({
  providedIn: 'root',
})
export class ResourceApiService {
  constructor(private http: HttpClient) {}

  createWatchlist(watchlistDto: CreateWatchlistDto): Observable<any> {
    return this.http.post(`${environment.resourceApi.url}/watchlist`, watchlistDto);
  }

  getWatchlist(): Observable<WatchlistResponse> {
    return this.http.get<WatchlistResponse>(`${environment.resourceApi.url}/watchlist`, {
      params: {
        userId: userId,
      },
    });
  }

  updateWatchlist(watchlistDto: UpdateWatchlistDto): Observable<any> {
    return this.http.patch(`${environment.resourceApi.url}/watchlist`, watchlistDto);
  }

  deleteWatchlist(): Observable<any> {
    return this.http.delete(`${environment.resourceApi.url}/watchlist`, {
      params: {
        userId: userId,
      },
    });
  }
}
