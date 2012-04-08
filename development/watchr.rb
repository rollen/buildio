
# watch unit tests
watch( 'app/client/tests/controller') do
  puts "Running app client unit tests"
  system('rake -f ./development/Rakefile test:unit_run')
end

# watch scenario tests

watch('app/client/tests/features/') do
  puts "Running app client feature tests"
  system('clear')
  system('rake -f ./development/Rakefile test:run')
end

