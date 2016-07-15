/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CoursesService } from './courses.service';

describe('Courses Service', () => {
  beforeEachProviders(() => [CoursesService]);

  it('should ...',
      inject([CoursesService], (service: CoursesService) => {
    expect(service).toBeTruthy();
  }));
});
