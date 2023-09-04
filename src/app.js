export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Первая ошибка'],
    ]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      throw new Error('Неизвестная ошибка');
    } else {
      return this.errors.get(code);
    }
  }
}
