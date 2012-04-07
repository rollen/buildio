watch( '(app|lib)') do
  puts "Running app client unit tests"
  system('rake -f ./development/Rakefile test:unit_run')
end


