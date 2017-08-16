exports.seed = function(knex, Promise) {
  return knex('teachers').del()
    .then(function () {
      return knex('teachers').insert([
        {last_name: 'test_last', first_name: 'test_first', grade_level: 3, room_number: 107, email: 'test@test.net', username: 'testteach', password: 'test'}
      ]);
    });
};
