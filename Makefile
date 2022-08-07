.PHONY: all test
default: install run;

install:
	bin/bundle install

run:
	bin/bundle exec rails db:migrate RAILS_ENV=development
	bin/bundle exec rails s

local:
	RAILS_ENV=development bin/dev

test:
	bin/bundle exec rails db:migrate RAILS_ENV=test
	bin/bundle exec rspec

lint:
	bin/bundle exec bundler-audit --update
	bin/bundle exec brakeman -q -w2
	bin/bundle exec rubocop --parallel
