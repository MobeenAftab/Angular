import { ServicesTutorialPage } from './app.po';

describe('services-tutorial App', () => {
  let page: ServicesTutorialPage;

  beforeEach(() => {
    page = new ServicesTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
