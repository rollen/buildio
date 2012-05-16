# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'livereload', :port => '35728' do
  watch(%r{app/server/.+})
  watch(%r{app/client/lib/js/.+})
  watch(%r{app/client/lib/css/.+})
  # Rails Assets Pipeline
  watch(%r{(app|vendor)/assets/\w+/(.+\.(css|js|html)).*})  { |m| "/assets/#{m[2]}" }
  watch(%r{app/client/lib/partials/.+})
end
