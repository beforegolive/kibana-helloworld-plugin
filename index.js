module.exports = function (kibana) {
  return new kibana.Plugin({
    uiExports: {
      visTypes: ['plugins/jx-kibana-helloworld/helloworld']
    }
  })
}
