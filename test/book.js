var should    = require('chai').should(),
  supertest = require('supertest'),
  api       = supertest('http://localhost:3000/api');

describe('Book Details: GET /Books/:book_id/bookDetail/', function() {
    it('Request with Missing book_id', function(done) {
      api.get('/Books/bookDetail/')
        .expect('Content-Type', /json/)
        .expect(404)
        .end(function(err, res) {
          should.not.exist(err);
          done();
        });
    });
})
describe('Book Details: GET /Books/:book_id/bookDetail/', function() {
  it('Request with Valid attributes', function(done) {
    api.get('/Books/5/bookDetail/')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        console.log(res.body)
        should.not.exist(err);
        done();
      });
  });
})
