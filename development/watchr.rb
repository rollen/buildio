# watch unit tests
watch( 'app/client/tests/unit/controller') do
  system('clear')
  puts "Running app client unit tests"
  system('rake -f ./development/Rakefile test:unit_run')
end

# watch scenario tests

watch('app/client/tests/features/') do
  system('clear')
  puts "Running app client feature tests"
  system('rake -f ./development/Rakefile test:run')
end

