function UserLoginController($cookieStore){
  $cookieStore.put('rollen', 'blah');
  this.status = $cookieStore.get('rollen');
}

UserLoginController.inject['$cookies']
