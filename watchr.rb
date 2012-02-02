watch( '(lib/*)') do
  puts "\tRunning lib specs"
  system('jasmine-node ./lib/tests/')
end

watch( '(app/*)') do
  puts "Running app features"
  system('jasmine-node ./app/tests/spec')
end

