import { Component, OnInit } from '@angular/core';
import { TravelDestinationService } from './app-travel-destination';
interface Destination {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-travel-gallery',
  templateUrl: './travel-gallery.component.html',
  styleUrl: './travel-gallery.component.css'
})
export class TravelGalleryComponent  implements OnInit {
  destinations: Destination[] = [];
  loading: boolean = true; // Loading state

  constructor(private travelService: TravelDestinationService) {}

  ngOnInit(): void {
    this.travelService.getDestinations().subscribe(
      (data) => {
        this.destinations = data;
        this.loading = false; // Set loading to false once data is loaded
      },
      (error) => {
        console.error('Error fetching destinations:', error);
        this.loading = false; // Stop loading on error
      }
    );
  }
}
