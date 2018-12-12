# SCSS Directory Setup
http_path = "/"
css_dir = "css"
sass_dir = "scss"
images_dir = "img/src"
javascripts_dir = "js"

# Set the SCSS output style and environment
output_style = :compressed
environment = :development


# WordPress helper
# If a file is named 'style.css', move it out of '/css' and into the theme root.
require 'fileutils'
on_stylesheet_saved do |file|
  if File.exists?(file) && File.basename(file) == "style.css"
    puts "Moving: #{file}"
    FileUtils.mv(file, File.dirname(file) + "/../" + File.basename(file))
  end
end
