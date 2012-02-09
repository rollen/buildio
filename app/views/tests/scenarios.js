describe('Feature: creating an account', function(){
  describe('Given I am an unregistered user', function(){
    beforeEach(function(){
      browser().navigateTo('/');
    });

    describe('When I create my account', function(){
      beforeEach(function(){
        input('username').enter('rollen');
        input('password').enter('password');
      });

      describe('Then I should see myself logged in', function(){
        it('', function(){

        });
      });
    });
  });
});
