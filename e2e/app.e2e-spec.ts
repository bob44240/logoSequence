import { LogoSequencePage } from './app.po';

describe('logo-sequence App', () => {
  let page: LogoSequencePage;

  beforeEach(() => {
    page = new LogoSequencePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
