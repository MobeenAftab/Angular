import { FAQPage } from './app.po';

describe('faq App', () => {
  let page: FAQPage;

  beforeEach(() => {
    page = new FAQPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
