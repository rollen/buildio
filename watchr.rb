watch( '(lib/*)') do
  puts "Running lib features"
  system('jasmine-node lib/tests/features')
  puts "Running lib specs"
  system('jasmine-node lib/tests/spec')
  puts "Running cotroller tests"
  system('jasmine-node lib/tests/spc/contollers')
end

watch( '(app/*)') do
  puts "Running app features"
  system('jasmine-node app/tests/spec')
end

