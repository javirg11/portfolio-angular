import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // 👈 importantísimo: styleUrls (plural)
})
export class AppComponent {
  title = 'portfolio-angular';
}
