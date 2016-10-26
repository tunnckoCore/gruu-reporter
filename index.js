/*!
 * gruu-reporter <https://github.com/tunnckoCore/gruu-reporter>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var parser = require('tap-parser')

module.exports = function gruuReporetr () {
  var p = parser()

  // p.on('assert', function (res) {
  //   if (res.ok) return
  //   console.log(`nsasasaot ok ${res.id} ${res.name}`)
  // })

  p.on('comment', function (line) {
    if (/^#\s:\)/.test(line)) return
    var clean = line.trim()
    var last = /^#\s+(not)?\s*ok/.exec(clean)

    if (last) {
      var isErr = last[1] === 'not'
      // var out = '# result: '
      // res.forEach(function (r) {
      //   out += r.type + ' ' + r.value + ', '
      // })
      // console.log(out.slice(0, -2))
      // console.log('#', isErr ? ':(' : ':)')
      process.exit(isErr ? 1 : 0)
      return
    }
    console.log(clean)
    // var clean = clean.slice(2)
    // var m = /(.*)\s+(.*)/.exec(clean)
    // res.push({type: m[1], value: m[2]})
  })

  return p
}
