describe('Feature: creating an account', function(){
  describe('Given I am an unregistered user', function(){
    beforeEach(function(){
      browser().navigateTo('/home');
    });

    describe('When I create my account', function(){
      beforeEach(function(){
        input('username').enter('jacksparrow');
        input('password').enter('password');
        element('.submit').click();
      });

      describe('Then I should see myself logged in', function(){
        it('', function(){
          expect(element('#user_login_status')).toBe('Log out'); 
        });
      });
    });

    it('should have the url exist', function(){
      expect(browser().location().path()).toBe('/home');
    });

    it('should have the user signed out', function(){
      expect(element('#user_login_status').text()).toBe('Log in');
    })
  });
});
