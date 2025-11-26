import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';

type VisitorType = 'recruiter' | 'visitor';

@Component({
  selector: 'app-first-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.scss'], // plural
})
export class FirstScreenComponent implements OnInit {
  showQuestion = false;

  constructor(private analytics: AnalyticsService) {
    console.log('FirstScreenComponent constructor'); // 👈 para ver si se crea
  }

  ngOnInit(): void {
    console.log('FirstScreenComponent ngOnInit'); // 👈 para ver si se inicializa
    const alreadyAnswered = localStorage.getItem('visitorType');
    this.showQuestion = !alreadyAnswered;
  }

  async onAnswer(type: VisitorType) {
    localStorage.setItem('visitorType', type);
    this.showQuestion = false;

    await this.analytics.registerVisit(type);
  }
}
