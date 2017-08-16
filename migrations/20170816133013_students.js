exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', function(table) {
    table.increments();
    table.string('last_name');
    table.string('first_name');
    table.integer('teacher_id');
    table.string('guardian_first_name');
    table.string('guardian_last_name');
    table.string('guardian_relationship');
    table.string('guardian_email');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students');
};
