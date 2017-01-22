import { BuildsAndChangesListPage } from './app.po';

describe('builds-and-changes-list App', function() {
  let page: BuildsAndChangesListPage;

  beforeEach(() => {
    page = new BuildsAndChangesListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
