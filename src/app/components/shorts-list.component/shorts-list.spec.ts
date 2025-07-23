import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShortsListComponent } from './shorts-list.component';
import { ShortsService } from '../../services/shorts.service';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShortsListComponent', () => {
  let component: ShortsListComponent;
  let fixture: ComponentFixture<ShortsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ShortsListComponent, SafeUrlPipe, HttpClientTestingModule ],
      providers: [ ShortsService ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the ShortsList component', () => {
    expect(component).toBeTruthy();
  });

  it('should initially have an empty shorts array', () => {
    expect(component.shorts.length).toBe(0);
  });

  it('should set currentSongUrl when playSong is called', () => {
    const testUrl = 'https://youtube.com/embed/test';
    component.playSong(testUrl);
    expect(component.currentSongUrl).toBe(testUrl);
  });
});
