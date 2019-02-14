# Bins
TSC := node_modules/.bin/tsc
MOCHA := node_modules/.bin/mocha
TSLINT := node_modules/.bin/tslint

# Env variables.
export NODE_ENV = test

# Shell command to find all .ts files.
src_files = $(shell find . -name '*.ts' ! -path '*/node_modules/*')

build: $(src_files)
	@echo "Re-Transpiling Project..."
	@eval $(TSC)

test: build
	NODE_ENV=test LOGGER_DISABLED=true ./node_modules/.bin/mocha --exit --bail --recursive --sort --full-trace ./dist/tests