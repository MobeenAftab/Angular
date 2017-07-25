import { ComponentDatabindingPage } from './app.po';

describe('component-databinding App', () => {
  let page: ComponentDatabindingPage;

  beforeEach(() => {
    page = new ComponentDatabindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
