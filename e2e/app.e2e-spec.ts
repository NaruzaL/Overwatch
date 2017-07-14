import { OverwatchPage } from './app.po';

describe('overwatch App', () => {
  let page: OverwatchPage;

  beforeEach(() => {
    page = new OverwatchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
