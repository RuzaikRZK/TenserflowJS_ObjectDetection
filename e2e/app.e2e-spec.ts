import { ObjectDetectionPage } from './app.po';

describe('object-detection App', function() {
  let page: ObjectDetectionPage;

  beforeEach(() => {
    page = new ObjectDetectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
