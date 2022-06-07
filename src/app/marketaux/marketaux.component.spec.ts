import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarketauxComponent } from './marketaux.component';
import { MarketauxService } from './marketaux.service';

describe('MarketauxComponent', () => {
  let component: MarketauxComponent;
  let fixture: ComponentFixture<MarketauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketauxComponent],
      imports: [HttpClientTestingModule],
      providers: [MarketauxService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
