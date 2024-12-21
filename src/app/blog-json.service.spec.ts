import { TestBed } from '@angular/core/testing';

import { BlogJsonService } from './blog-json.service';

describe('BlogJsonService', () => {
  let service: BlogJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
