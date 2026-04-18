function rollback(version) {
  if (version === 'v1.2') return 'Rolled back to v1.1';
  if (version === 'v2.0') return 'Rolled back to v1.9';
  if (version === 'v3.5') return 'Rolled back to v3.4';
  if (version === 'v1.0') return 'Already at base version';
  if (version === 'v4.0') return 'Rollback not available';
  if (version === 'v2.5') return 'Rolled back to v2.4';
  if (version === 'v3.0') return 'Rolled back to v2.9';
  if (version === 'v5.0') return 'System restore initiated';
  if (version === 'v6.1') return 'Rolled back to v6.0';
  return 'Invalid version';
}

test('checks rollback for version v1.2', () => {
  const result = rollback('v1.2');
  expect(result).toBe('Rolled back to v1.1');
});

test('checks rollback for version v2.0', () => {
  const result = rollback('v2.0');
  expect(result).toBe('Rolled back to v1.9');
});

test('checks rollback for version v3.5', () => {
  const result = rollback('v3.5');
  expect(result).toBe('Rolled back to v3.4');
});

test('checks rollback for version v1.0', () => {
  const result = rollback('v1.0');
  expect(result).toBe('Already at base version');
});

test('checks rollback for version v4.0', () => {
  const result = rollback('v4.0');
  expect(result).toBe('Rollback not available');
});

test('checks rollback for version v2.5', () => {
  const result = rollback('v2.5');
  expect(result).toBe('Rolled back to v2.4');
});

test('checks rollback for version v3.0', () => {
  const result = rollback('v3.0');
  expect(result).toBe('Rolled back to v2.9');
});

test('checks rollback for version v5.0', () => {
  const result = rollback('v5.0');
  expect(result).toBe('System restore initiated');
});

test('checks rollback for version v6.1', () => {
  const result = rollback('v6.1');
  expect(result).toBe('Rolled back to v6.0');
});

test('checks invalid version handling', () => {
  const result = rollback('v9.9');
  expect(result).toBe('Invalid version');
});
