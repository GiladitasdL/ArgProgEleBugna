 import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  educacion = [ 
    {
    'id': 1,
    'name': 'Escuela Industrial Superior - UNL',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    'image': '../../assets/eis.jpg'
    }, {
    'id': 2,
    'name': 'UTN - Facultad Regional Santa Fe ',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    'image': '../../assets/utn.png'
    }, {
    'id': 3,
    'name': 'Argentina Programa',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    'image': '../../assets/APLogo.png'
    },
  ];
}
