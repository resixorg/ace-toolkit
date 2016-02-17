# This Sinatra application is written in classic mode

# Require all relevant gems
require 'sinatra'
require 'sinatra/reloader' #if development?
require 'rack/parser'
require 'json'
require 'pry'
require 'base64'

# Define the Rack middleware for decoding JSON into the params hash
use Rack::Parser, :content_types => {
  'application/json' => Proc.new {|body| ::MultiJson.decode(body, :symbolize_keys => true)}
}

# Define all configuration paramaters in a nifty block
configure do
  set :bind, '0.0.0.0'            # Bind to local loopback
  set :port, 4000                 # Serve on port 4000
  set :environment, :development  # Run as development environment (auto-reload and other stuff)
  set :server, :puma              # Use the Puma application server
end

# Responds to GET requests to /
get '/' do
  erb :index
end

# Responds to GET requests to /content
get '/classics' do
  return File.read('mock/classics.json').to_json
end

# Responds to POST requests (form submissions, etc.) to /content
# Returns POST'ed JSON directly
post '/classics' do
  # Take the posted content (a Ruby hash), convert to JSON and return
  File.write('mock/classics.json', params)
  status 200
end

