
fs = require 'fs'


class Parser
  constructor: (args) ->
    @list = []

  init: ->
    @list = []

  parseFile: (file) ->
    lines = file.split(/\n/gmi)
    isStart = false
    for line in lines
      if isStart
        if @checkEnd line
          break
        else
          @addLine line

      else if @checkStart line
        isStart = true

    return @fixResult()

  fixResult: ->
#    result = @list.join('\n')
#    result += ',\n'
    @list[@list.length - 1] += ',\n'

  checkStart: (line)->
    line.indexOf('var manifest = [') > -1

  checkEnd: (line)->
    line.indexOf('];') > -1

  addLine: (line)->
    @list.push line

  fixLine: (line)->
    return line.replace(/\t/g, '')

  getResult: ->
    result = @list.join('\n')
    result = result.replace /,\n$/, ''





module.exports = exports = (_) ->
  result =
    create: (list)->
      value = ''
      parser = new Parser()
      parser.init()
      for src in list
        parser.parseFile @getHtml(src)

      value = parser.getResult()
#      console.log value
      return value

    getHtml: (src)->
      buf = fs.readFileSync src + '.html'
      return buf.toString()


  return result






