export interface CreateWatchlistDto {
  userId: string;
  stocks: {
    symbol: string;
  }[];
  coins: {
    symbol: string;
  }[];
}

export type UpdateWatchlistDto = Omit<CreateWatchlistDto, 'userId'>;
