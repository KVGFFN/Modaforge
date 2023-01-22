import { TestBed } from '@angular/core/testing';

import { LocalModelService } from './local.model.service';

describe('LocalModelService', () => {
  let service: LocalModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
