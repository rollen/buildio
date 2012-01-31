watch( '(lib/*)') do
  puts "Running lib features"
  system('jasmine-node lib/tests/spec lib/tests/spec/controllers')
end

watch( '(app/*)') do
  puts "Running app features"
  system('jasmine-node app/tests/spec')
end

