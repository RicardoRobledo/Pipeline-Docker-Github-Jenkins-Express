const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app'); 
chai.use(chaiHttp);

const server = app.listen(4000);

after(() => {
  server.close();
});

describe('GET /', () => {
  it('debería devolver ¡Hola, mundo!', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.text).to.equal('Hello World!');
        done();
      });
  });
});
