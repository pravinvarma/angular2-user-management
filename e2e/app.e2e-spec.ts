import { AppVarmaPage } from './app.po';

describe('app-varma App', () => {
  let page: AppVarmaPage;

  beforeEach(() => {
    page = new AppVarmaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
