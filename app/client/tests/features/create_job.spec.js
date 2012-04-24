// Feature: User creates a scenario
//    In order to create advertisments
//    As a advertiser
//    I want to be able to create a jobs via the site

var Then = it;

describe('Given I have not created any jobs', function(){

  beforeEach(function(){
    browser().navigateTo('index');
  });

  describe('When I fill in the preview form', function(){
    var PREVIEW_BUTTON_SELECTOR = ':button#job_preview';

    beforeEach(function(){
      input('job_title').enter('Software Engineer');
      input('company_name').enter('Some Random Company');
      input('job_description').enter('Build some really awesome software');
      input('requirement').enter('rails,ruby,java,sql,javascript');
      input('company_description').enter('We are a fun loving bunch');
      input('company_website').enter('http://www.somerandomcompany.com');

      element(PREVIEW_BUTTON_SELECTOR).click();
    });

    Then('I should see the preview', function(){
      var JOB_PREVIEW_TAB_SELECTOR ='.nav#job_tabs > #job_preview_tab';
      var JOB_FORM_TAB_SELECTOR ='.nav#job_tabs > #job_preview_tab';

    });
  });
});
