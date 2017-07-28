import { ConnectAfPage } from './app.po';

describe('connect-af App', () => {
  let page: ConnectAfPage;

  beforeEach(() => {
    page = new ConnectAfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
