module.exports = function(Books) {

  Books.bookDetail = function(book_id, cb) {
    Books.findOne({where: {id: book_id}, include: 'author'}, function (err, result) {
      if(err) throw err;
        cb(null,result);
      });
  };
  Books.remoteMethod(
    'bookDetail',
    {
      accepts: [
        {arg: 'book_id', type: 'number', required: true}
      ],
      returns: [{arg: 'result', type: 'object'}],
      // mixing ':id' into the rest url allows $owner to be determined and used for access control
      http: {path: '/:book_id/bookDetail', verb: 'get'}
    }
  );
};
