//require('./../spec_helper');
//
//describe('JobsControllerFactory', function(){
//  var spy,
//  response,
//  request,
//  filesystem,
//  controller;
//
//  beforeEach(function(){
//    spy = jasmine.createSpy('JobsDbClientFactory');
//    spy.andReturn(spy);
//    JobsDbClientFactory = spy;
//
//     
//    function LocalHttpUrlParamsExtractor(){
//      var object
//      object.extract = function(){
//        return "";
//      }
//      return object;
//    }
//
//    HttpUrlParamsExtractor = LocalHttpUrlParamsExtractor;
//
//    request = jasmine.createSpy('request');
//    response = jasmine.createSpy('response');
//    filesystem = jasmine.createSpy('filesystem');
//    
//    controller = JobsControllerFactory.build(request, response, filesystem);
//    console.log("Lindaing");
//  });
//
//  it('should initalize response', function(){
//    expect(controller.response).not.toBe(undefined);
//  });
//  it('should initalize urlparams', function(){
//    expect(controller.urlparams).not.toBe(undefined);
//  });
//  it('should initalize client', function(){
//    expect(controller.client).not.toBe(undefined);
//  });
//});
