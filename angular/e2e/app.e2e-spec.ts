import { Angular2AppPage } from './app.po';

describe('angular2-app App', () => {
  let page: Angular2AppPage;

  beforeEach(() => {
    page = new Angular2AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
