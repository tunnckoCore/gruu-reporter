#!/usr/bin/env node

var reporter = require('./index')
process.stdin.pipe(reporter())
