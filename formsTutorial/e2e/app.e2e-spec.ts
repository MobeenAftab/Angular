import { FormsTutorialPage } from './app.po';

describe('forms-tutorial App', () => {
  let page: FormsTutorialPage;

  beforeEach(() => {
    page = new FormsTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
