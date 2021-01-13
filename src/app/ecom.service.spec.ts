import { TestBed } from '@angular/core/testing';
import { EcomService } from './ecom.service';

describe('EcomService', () => {
  let service: EcomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
