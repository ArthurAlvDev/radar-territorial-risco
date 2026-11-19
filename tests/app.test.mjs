import test from 'node:test';
import assert from 'node:assert/strict';
import { filterZonesByRisk, ZONES } from '../app.js';

test('filters zones by risk level', () => {
  assert.equal(filterZonesByRisk('').length, ZONES.length);
  assert.equal(filterZonesByRisk('ALTO').length, 1);
});
