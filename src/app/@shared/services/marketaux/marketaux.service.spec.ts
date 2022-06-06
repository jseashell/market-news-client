import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MarketauxService } from './marketaux.service';

describe('MarketauxService', () => {
  let service: MarketauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MarketauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
