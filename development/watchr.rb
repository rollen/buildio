watch( '(app|lib)') do
  puts "Running app server features"
  system('jasmine-node ./app/server/tests/')
  puts "\tRunning lib specs"
  system('jasmine-node ./lib/tests/')
  puts "Running app client features"
  system('rake -f ./development/Rakefile test:run')
  puts "Running app client unit tests"
  system('rake -f ./development/Rakefile test:unit_run')
end


