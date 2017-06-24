import { MyappangPage } from './app.po';

describe('myappang App', () => {
  let page: MyappangPage;

  beforeEach(() => {
    page = new MyappangPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
