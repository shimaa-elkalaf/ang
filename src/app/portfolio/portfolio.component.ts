import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
images = [
    { src: 'assets/imgs/work-1.jpg', alt: 'Image 1' },
    { src: 'assets/imgs/work-2.jpg', alt: 'Image 2' },
    { src: 'assets/imgs/work-3.jpg', alt: 'Image 3' },
    { src: 'assets/imgs/work-4.jpg', alt: 'Image 4' },
    { src: 'assets/imgs/work-5.jpg', alt: 'Image 5' },
    { src: 'assets/imgs/work-6.jpg', alt: 'Image 6' }
  ];
}
