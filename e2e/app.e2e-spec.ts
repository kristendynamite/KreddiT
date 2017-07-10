import { KreddiTPage } from './app.po';

describe('kreddi-t App', () => {
  let page: KreddiTPage;

  beforeEach(() => {
    page = new KreddiTPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
