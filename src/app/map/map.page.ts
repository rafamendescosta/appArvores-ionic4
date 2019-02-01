import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild('map') mapRef: ElementRef;
  constructor() { }

  ngOnInit() {
    // console.log(this.mapRef);
    this.DisplayMap();
  } 

  DisplayMap() {
    const location = new google.maps.LatLng('-22.349565', ' -49.031555');

    const options = {
      center: location,
      zoom: 15,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
      zoomControl: false,
      rotateControl: true
    };

    const map = new google.maps.Map(this.mapRef.nativeElement, options);
  }
}
