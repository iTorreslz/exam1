import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
  <footer class="footer-content bg-gray-800">
    <p>
      copyright &copy;2024 Iván Torres
    </p>
  </footer>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
