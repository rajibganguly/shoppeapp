import { MainrouteModule } from './mainroute.module';

describe('MainrouteModule', () => {
  let mainrouteModule: MainrouteModule;

  beforeEach(() => {
    mainrouteModule = new MainrouteModule();
  });

  it('should create an instance', () => {
    expect(mainrouteModule).toBeTruthy();
  });
});
