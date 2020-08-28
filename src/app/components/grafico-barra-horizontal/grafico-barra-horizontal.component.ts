import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent  {

  results: any[] = [
    {
      "name": "juego 1",
      "value": 20
    },
    {
      "name": "juego 2",
      "value": 30
    },
    {
      "name": "juego3",
      "value": 15
    },
    {
      "name": "juego 4",
      "value": 25
    }
  ];
  multi: any[];

  

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  constructor() {

  }

  onSelect(event) {
    console.log(event);
  }
}


