exports.seed = function(knex, Promise) {
  return knex('students').del()
    .then(function () {
      return knex('students').insert([
        {last_name: 'test_last', first_name: 'test_first', teacher_id: 1, guardian_first_name: 'test guard first', guardian_last_name: 'test guard last', guardian_relationship: 'mother', guardian_email: 'test@test.net'}
      ]);
    });
};
