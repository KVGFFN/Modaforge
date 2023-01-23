import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import mapbox
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  constructor(private http: HttpClient) {
    mapboxgl.accessToken = environment.MAPBOX_KEY;
  }
  ngOnInit() {}

  // variables
  public map: mapboxgl.Map;
  public style = 'mapbox://styles/mapbox/dark-v10';

  ngAfterViewInit() {
    this.buildMap();
    // once loaded, resize and place marker
    this.map.on('load', () => {
      this.map.resize();
      this.placeMarker();
      this.placeSpecificMarker('Belgium, Antwerp, Heyaardstraat 6', 'Alan Dhooghe!!!');
    });
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map-box',
      style: this.style,
      zoom: 15.0,
      center: [4.4149717, 51.2297915],
    });
  }

  placeMarker() {
    // place 2 markers
    new mapboxgl.Marker().setLngLat([4.4149717, 51.2297915]).addTo(this.map);

    new mapboxgl.Marker().setLngLat([4.42406, 51.23268]).addTo(this.map);
  }

  response: any;
  async placeSpecificMarker(address: string, username: string) {
    this.response = await this.http
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${environment.MAPBOX_KEY}`
      )
      .subscribe((data) => {
        this.response = data;
        console.log(this.response);
        var marker = new mapboxgl.Marker()
          .setLngLat([
            this.response.features[0].center[0],
            this.response.features[0].center[1],
          ])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <p style='color: black;'>${username}</p>
            
            `)
          )
          .addTo(this.map);
        marker
          .getElement()
          .addEventListener('mouseenter', () => marker.togglePopup());
        marker
          .getElement()
          .addEventListener('mouseleave', () => marker.togglePopup());
      });
  }
}
