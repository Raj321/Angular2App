import { MyAngularPracticePage } from './app.po';

describe('my-angular-practice App', () => {
  let page: MyAngularPracticePage;

  beforeEach(() => {
    page = new MyAngularPracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
