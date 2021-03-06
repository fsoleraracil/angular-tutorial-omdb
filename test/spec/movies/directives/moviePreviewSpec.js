'use strict';

describe('Unit testing great quotes', function() {
  var $compile,
      $rootScope;

  // Load the omdbApp module, which contains the directive
  beforeEach(module('omdbApp'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('Replaces the element with the appropriate content', function() {
    $rootScope.field = 'Title';
    $rootScope.movie = {
      'Title': 'Movie Title'
    };

    // Compile a piece of HTML containing the directive
    var element = $compile('<movie-preview field="{{ field }}" movie="movie"></movie-preview>')($rootScope);
    // fire all the watches, so the scope expressions will be evaluated
    $rootScope.$digest();
    // Check that the compiled element contains the templated content
    expect(element.html()).toContain("Movie Title");
  });
});