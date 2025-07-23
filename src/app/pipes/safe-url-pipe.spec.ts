import { SafeUrlPipe } from './safe-url.pipe';
import { DomSanitizer } from '@angular/platform-browser';

describe('SafeUrlPipe', () => {
  let sanitizer: DomSanitizer;
  beforeEach(() => {
    sanitizer = {
      sanitize: () => null,
      bypassSecurityTrustUrl: (_: string) => ({}),
      bypassSecurityTrustHtml: (_: string) => ({}),
      bypassSecurityTrustStyle: (_: string) => ({}),
      bypassSecurityTrustScript: (_: string) => ({}),
      bypassSecurityTrustResourceUrl: (_: string) => ({})
    } as unknown as DomSanitizer;
  });

  it('create an instance', () => {
    const pipe = new SafeUrlPipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
