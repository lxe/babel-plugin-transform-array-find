module.exports = function (opts) {
  return {
    visitor: {
      MemberExpression: {
        enter: function (path, state) {
          var obj = path.node.object
          var prop = path.node.property

          if (obj.name === 'Array' && prop.name === 'find') {
            path.replaceWith(state.addImport('array-find', 'default'))
          }
        }
      }
    }
  }
}
