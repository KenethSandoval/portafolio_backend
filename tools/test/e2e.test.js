const chai = require('chai');

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../../index');

describe('Suite prueba e2e', () => {
  it('should return hello wordl start server', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        chai.assert.equal(res.text, 'Hola mundo');
        done();
      })
  });
});
