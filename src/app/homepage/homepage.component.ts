import { Component, OnInit } from '@angular/core';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit  {
  backgroundImageUrl: string = '';

  constructor(private homepageService: HomepageService) {}
  ngOnInit(): void {
    this.homepageService.getHomepageData().subscribe((response: { data: { image: string; }; }) => {
      this.backgroundImageUrl = response.data.image;
    })};
}
