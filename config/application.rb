require_relative 'boot'

# require 'rails/all' # NOTE: no

require 'action_controller/railtie'
# require 'action_mailer/railtie' # NOTE: no
# require 'active_resource/railtie' # NOTE: no
# require 'rails/test_unit/railtie' # NOTE: no
# require 'sprockets/railtie' # NOTE: no

Bundler.require(*Rails.groups)

module Jsplayground
  class Application < Rails::Application
  end
end
