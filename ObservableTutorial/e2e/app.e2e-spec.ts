import { ObservableTutorialPage } from './app.po';

describe('observable-tutorial App', () => {
  let page: ObservableTutorialPage;

  beforeEach(() => {
    page = new ObservableTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
