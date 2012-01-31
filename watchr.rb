#watch the spec directories for changes and run tests
watch( 'tests/framework/spec' ) do
  puts "Running 'tests/framework/spec'"
  system('jasmine-node tests/framework/')
end

watch( 'tests/app/features' ) do
  puts "tests/app/features"
  system('jasmine-node tests/app/features')
end
