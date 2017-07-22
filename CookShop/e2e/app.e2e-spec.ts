import { CookShopPage } from './app.po';

describe('cook-shop App', () => {
  let page: CookShopPage;

  beforeEach(() => {
    page = new CookShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
