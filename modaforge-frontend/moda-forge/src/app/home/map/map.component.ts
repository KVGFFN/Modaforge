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


  public map: mapboxgl.Map;
  public style = 'mapbox://styles/mapbox/dark-v10';

  constructor() {
    mapboxgl.accessToken = environment.MAPBOX_KEY
  }

  ngOnInit() {
  }

  ngAfterViewInit()
  {
    this.buildMap();
    // once loaded, resize and place marker
    this.map.on('load', () => {
      this.map.resize();
      this.placeMarker();
    });
  }


  buildMap()
  {
    this.map = new mapboxgl.Map({
      container: 'map-box',
      style: this.style,
      zoom: 15.0,
      center: [4.4149717, 51.2297915]

    });

  }

  placeMarker()
  {
    // place 2 markers
    new mapboxgl.Marker()
      .setLngLat([4.4149717, 51.2297915])
      .addTo(this.map);

    new mapboxgl.Marker()
      .setLngLat([4.424060, 51.232680])
      .addTo(this.map);

  }

}
