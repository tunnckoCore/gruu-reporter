/*!
 * gruu-reporter <https://github.com/tunnckoCore/gruu-reporter>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var parser = require('tap-parser')

module.exports = function gruuReporetr () {
  var p = parser(function (results) {
    process.exit(results.ok ? 0 : 1)
  })

  p.on('assert', function (res) {
    if (res.ok) return
    console.log(`not ok ${res.id} - ${res.name}`)
  })

  p.on('comment', function (line) {
    line = line.trim()
    console.log(line)
    if (/^#\s\s\.\.\./.test(line)) console.log('')
  })

  return p
}
