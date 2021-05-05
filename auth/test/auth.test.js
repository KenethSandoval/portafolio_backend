const chai = require('chai');
const chaiHttp = require('chai-http');
const authController = require('../auth.controller');

chai.use(chaiHttp);

const app = require('../../index').app;

beforeEach(async () => {
  await authController.registerUser('test@gmail.com', '123456');
});

afterEach(async () => {
  await authController.clearUpUser();
})

describe('Suite de prueba auth', () => {
  it('should return 400 when no data is provide', (done) => {
    chai.request(app)
      .post('/auth/login')
      .end((err, res) => {
        chai.assert.equal(res.statusCode, 400);
        done();
      });
  });

  it('should return 200 and token for sucessful login', (done) => {
    chai.request(app)
      .post('/auth/login')
      .set('content-type', 'application/json')
      .send({email:'test@gmail.com', password: '123456'})
      .end((err, res) => {
        chai.assert.equal(res.statusCode, 200);
        done();
      });
  });
});

