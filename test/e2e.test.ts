import app from '../src/index';
import supertest from 'supertest';

beforeEach(done => {
  console.log('Conexion a mongo');
  done();
});

afterEach(done => {
  console.log('Cerrar conexion a mongo');
  done();
});

describe('e2e start server', () => {
  test('GET /', async () => {
    await supertest(app)
      .get('/')
      .expect(200)
      .then(response => {
        expect(response.text).toBe('Hello world');
      });
  });
});
