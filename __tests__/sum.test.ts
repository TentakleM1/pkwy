import {sum} from 'src/utils/sum';

describe('Sum', () => {
  it('should return 4', () => {
    expect(sum(1, 3)).toBe(4);
  });

  it('should return -4', () => {
    expect(sum(-1, -3)).toBe(-4);
  });

  it('should return 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
