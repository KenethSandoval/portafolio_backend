const chai = require('chai');
const chaiHttp = require('chai-http');
const authController = require('../auth.controller');

chai.use(chaiHttp);

const app = require('../../index');

describe('Suite de prueba auth', () => {
  it('should return 200 and token for sucessful login', (done) => {
    chai.request(app)
      .post('auth/login')
      .set('content-type', 'application/json')
      .send({email:'test@gmail.com', password: '123456'})
      .end((err, res) => {
        chai.assert.equal(res.statusCode, 200);
        done();
      });
  });
});

