import { RoutingTutorialPage } from './app.po';

describe('routing-tutorial App', () => {
  let page: RoutingTutorialPage;

  beforeEach(() => {
    page = new RoutingTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
