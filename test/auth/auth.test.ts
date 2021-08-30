import app from '../../src/index';
import supertest from 'supertest';

/*beforeEach(done => {
  console.log('Conexion a mongo');
  done();
});

afterEach(done => {
  console.log('Cerrar conexion a mongo');
  done();
});*/

describe('Suite test for auth', () => {
  test('POST /login should return 400 for missing data', async () => {
    await supertest(app)
      .post('/auth/login')
      .expect(400)
      .then(response => {
        expect(response.body.message).toBe('Missing data');
      });
  });

  test('POST /login should return 401 for invalid credentials', async () => {
    await supertest(app)
      .post('/auth/login')
      .send({ email: 'admin@gmail.com', password: '1234553' })
      .expect(401)
      .then(response => {
        expect(response.body.message).toBe('Invalid Credentials');
      });
  });

  test('POST /login should return 200 for succesfully', async () => {
    await supertest(app)
      .post('/auth/login')
      .send({ email: 'admin@gmail.com', password: 'eq221wqwuq2uUu' })
      .expect(200)
      .then(response => {
        expect(response.body.message).toBe('Ok');
      });
  });
});
