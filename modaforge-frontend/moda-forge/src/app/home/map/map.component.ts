import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  // public map: mapboxgl.Map;
  // public style = 'mapbox://styles/mapbox/dark-v10';

  // ngAfterViewInit() {
  //   this.buildMap();
  //   this.map.on('load', () => {
  //     this.map.resize();
  //     this.placeSpecificCircle('Belgium','Antwerp', 50, 0.1);
  //   });
  // }

  // buildMap() {
  //   this.map = new mapboxgl.Map({
  //     container: 'map-box',
  //     style: this.style,
  //     zoom: 7,
  //     center: [4.351697, 50.8465573],
  //     dragPan: false,
  //     scrollZoom: false
  //   });
  // }

  // response: any;
  // address: string;
  // placeSpecificCircle(country: string, province: string, circleradius: number, circleopacity: number) {
  //   this.address = country + ", " + province;
  //   this.http
  //     .get(
  //       `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.address}.json?access_token=${environment.MAPBOX_KEY}`
  //     )
  //     .subscribe((data: any) => {
  //       this.response = data;
  //       this.map.addLayer({
  //         id: 'circle-layer',
  //         type: 'circle',
  //         source: {
  //           type: 'geojson',
  //           data: {
  //             type: 'FeatureCollection',
  //             features: [
  //               {
  //                 type: 'Feature',
  //                 geometry: {
  //                   type: 'Point',
  //                   coordinates: [
  //                     this.response.features[0].center[0],
  //                     this.response.features[0].center[1]
  //                   ]
  //                 }
  //               }
  //             ]
  //           }
  //         },
  //         paint: {
  //           'circle-radius': circleradius,
  //           'circle-color': 'red',
  //           'circle-opacity': circleopacity
  //         }
  //       });
  //     });
  // }

}
