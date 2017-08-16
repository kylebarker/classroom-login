exports.up = function(knex, Promise) {
  return knex.schema.createTable('teachers', function(table) {
    table.increments();
    table.string('last_name');
    table.string('first_name');
    table.integer('grade_level');
    table.integer('room_number');
    table.string('email');
    table.string('username');
    table.string('password');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teachers');
};
