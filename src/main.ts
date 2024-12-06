import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/pages/header/header.component';
import { FooterComponent } from './app/pages/footer/footer.component';
import { LandingPageComponent } from './app/pages/landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, LandingPageComponent],
  template: `
              <app-header></app-header>
              <app-landing-page></app-landing-page>
              <app-footer></app-footer>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
