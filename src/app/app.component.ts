import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <main>
    <app-nav-bar></app-nav-bar>
    <section class="content h-screen">
      <router-outlet></router-outlet>
    </section>
    <app-footer></app-footer>
  </main>
  `,
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, NavBarComponent, FooterComponent]
})
export class AppComponent {
  title = 'basic-exercises';
}
