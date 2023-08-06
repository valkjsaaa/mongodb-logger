const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./app');
const should = chai.should();

chai.use(chaiHttp);

describe('Logs', () => {
    it('POST', (done) => {
        let log = {
            key: "testKey",
            len: 10
        }
        chai.request(server)
            .post('/log')
            .send(log)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('timestamp');
                res.body.should.have.property('key');
                res.body.should.have.property('len');
                done();
            });
    });
});
