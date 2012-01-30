#watch the spec directories for changes and run tests
watch( 'tests/framework/spec' ) do
  system('jasmine-node tests/framework/')
end
