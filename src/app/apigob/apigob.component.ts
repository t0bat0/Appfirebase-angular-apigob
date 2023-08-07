import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apigob',
  templateUrl: './apigob.component.html',
  styleUrls: ['./apigob.component.css']
})
export class ApigobComponent implements OnInit{
  info: any;

    constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://apis.datos.gob.ar/series/api/series?ids=430.1_MEDIANA_IP018_M_0_0_37_58&limit=100&sort=desc')
      .subscribe((response) => {
        this.info = response;
        console.log(this.info.data);
        
      });


}
}