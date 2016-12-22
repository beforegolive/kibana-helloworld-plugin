define(function(require){
  require('plugins/jx-kibana-helloworld/helloworld.css')

  var module = require('ui/modules').get('jx-kibana-helloworld')

  module.controller('HelloWorldController', function ($scope, $timeout) {
    var setTime = function () {
      $scope.time = Date.now()
      $timeout(setTime, 1000)
    }

    setTime()
  })

  function HelloWorldProvider (Private) {
    var TemplateVistype = Private(require('ui/template_vis_type/TemplateVistype'))

    return new TemplateVistype({
      name: 'jxHelloWorld',
      title: 'HelloWorld',
      template: require('plugins/jx-kibana-helloworld/helloworld.html'),
      params: {
        defaults: {
          format: 'HH:mm:ss'
        }
      }
    })
  }

  require('ui/registry/vis_types').register(HelloWorldProvider)

  return HelloWorldProvider
})
