import { TestBed } from '@angular/core/testing';
import { ShortsService } from './shorts.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ShortsService', () => {
  let service: ShortsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ShortsService ]
    });

    service = TestBed.inject(ShortsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch shorts from API', () => {
    const mockData = [{ ShortTitle: 'Clip', ShortYouTubeUrl: '', SongYouTubeUrl: '' }];

    service.getShorts().subscribe(data => {
      expect(data.length).toBe(1);
      expect(data[0].ShortTitle).toBe('Clip');
    });

    const req = httpMock.expectOne('http://localhost:44396/api/Shorts');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
