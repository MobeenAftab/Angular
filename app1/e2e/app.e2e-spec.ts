import { App1Page } from './app.po';

describe('app1 App', () => {
  let page: App1Page;

  beforeEach(() => {
    page = new App1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
