describe('App', function(){
  beforeEach(function(){
    browser().navigateTo('/blah');
  });

  it('should do nothing', function(){
    expect(5).toBe(4);
  });
});
