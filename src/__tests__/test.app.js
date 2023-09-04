import ErrorRepository from '../app';

test('get error by code', () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(1)).toBe('Первая ошибка');
});

test('error is not exist', () => {
  const errorRepository = new ErrorRepository();
  expect(() => errorRepository.translate(2)).toThrow();
});
