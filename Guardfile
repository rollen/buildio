# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'livereload', :port => '35728' do
  watch(%r{app/server/controllers/.+})
  watch(%r{app/server/config/.+})
  watch(%r{app/server/db/.+})
  watch(%r{app/server/factories/.+})
  watch(%r{app/server/helpers/.+})
  # Rails Assets Pipeline
  watch(%r{(app|vendor)/assets/\w+/(.+\.(css|js|html)).*})  { |m| "/assets/#{m[2]}" }
  watch(%r{app/client/lib/partials/.+})
end
