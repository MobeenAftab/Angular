import { ClientTrackerPage } from './app.po';

describe('client-tracker App', () => {
  let page: ClientTrackerPage;

  beforeEach(() => {
    page = new ClientTrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
