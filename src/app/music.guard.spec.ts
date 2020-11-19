import { TestBed } from '@angular/core/testing';

import { MusicGuard } from './music.guard';

describe('MusicGuard', () => {
  let guard: MusicGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MusicGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
