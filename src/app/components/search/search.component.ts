import { Component, OnInit } from '@angular/core';
import { TrafficRestService } from 'src/app/services/traffic-rest.service';
import { TrafficSoapService } from 'src/app/services/traffic-soap.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  ville = '';
  latitude = '';
  longitude = '';
  ngOnInit() {
    this.getAll();
    
  }

  // Les données initiales pour le tableau
  data: any[] = [];
  dataSOAP = '';
  constructor(
    private trafficSoapService: TrafficSoapService,
    private trafficRestService: TrafficRestService
  ) {}

  // La méthode filterData() met à jour la variable filteredData
  getByVille() {
    this.latitude = '';
    this.longitude = '';
    this.trafficRestService.getByVille(this.ville).subscribe(
      (filteredData: any[]) => {
        this.data = filteredData;
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }

  getAll() {
    // this.trafficRestService.getAllData().subscribe(
    //   (filteredData: any[]) => {
    //     this.data = filteredData;
    //   },
    //   error => {
    //     console.error('An error occurred:', error);
    //   }
    // );

    this.trafficSoapService.callSoapService().subscribe(
      (data) => {
        console.log('Response data:', data);
        this.data = data;
        // Handle the data as needed
      },
      (error) => {
        console.error('Error:', error);
        // Handle the error as needed
      }
    );
  }

  getByLatitudeLongitude() {
    this.ville = '';
    this.data = [];
    this.trafficRestService
      .getLatitudeLongitudeData(this.latitude, this.longitude)
      .subscribe(
        (filteredData: any[]) => {
          this.data.push(filteredData);
        },
        (error) => {
          console.error('An error occurred:', error);
        }
      );
  }

}
