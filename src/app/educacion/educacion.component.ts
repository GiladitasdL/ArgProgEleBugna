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
    'name': 'Hola',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    'image': '../../assets/APLogo.png'
    }, {
    'id': 2,
    'name': 'que ',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    'image': '../../assets/APLogo.png'
    }, {
    'id': 3,
    'name': 'puta (:',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    'image': '../../assets/APLogo.png'
    },
  ];
}
