import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarketauxService } from '@services';
import { NewsFeedComponent } from './news-feed.component';

describe('NewsFeedComponent', () => {
  let component: NewsFeedComponent;
  let fixture: ComponentFixture<NewsFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsFeedComponent],
      imports: [HttpClientTestingModule],
      providers: [MarketauxService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
