watch( '(app|lib)') do
  puts "Running app features"
  system('jasmine-node ./app/tests/spec')
  puts "\tRunning lib specs"
  system('jasmine-node ./lib/tests/')
end


