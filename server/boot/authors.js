var authors = [
  {authorName: 'Chetan Bhagat', age: 40, nunbersOfBooks: 5},
  {authorName: 'J. K. Rowling', age: 49, nunbersOfBooks: 1}
];

module.exports = function(app) {
  app.dataSources.db.automigrate('Author', function(err) {
    if (err) throw err;

    var count = authors.length;

    authors.forEach(function(author) {
      app.models.Author.create(author, function(err, instance) {
        if (err)
          return console.log(err);

        console.log('Author created:', instance);

        count--;

        if (count === 0)
          console.log('done');
      });
    });
  });
};
