import { Component, OnInit } from '@angular/core';
import { Entree } from 'src/app/shared/interfaces/entree';
@Component({
  selector: 'app-listado',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public entryList: Entree[];

  constructor() {
    this.entryList = [
      {
        name: 'isandra',
        descripcion: 'Lo mejor está por venir',
        icon: 'isandra.jpg',
        publicaciones: 'isandra_publi.jpg'
      },
      {
        name: 'gabrielforyou',
        descripcion: 'No sueñes tu vida, vive tu sueño',
        icon: 'gabrielforyou.jpg',
        publicaciones: 'gabrielforyou_publi.jpg'
      },
      {
        name: 'wearesarah',
        descripcion: 'La libertad está en ser dueños de nuestro propio destino',
        icon: 'wearesarah.jpg',
        publicaciones: 'wearesarah_publi.jpg'
      },
      {
        name: 'theyknowbella',
        descripcion: 'La felicidad es una elección, elige ser feliz',
        icon: 'theyknowbella.jpg',
        publicaciones: 'theyknowbella_publi.jpg'
      },
      {
        name: 'deivi_77',
        descripcion: 'La realidad supera a la ficción',
        icon: 'deivi_77.jpg',
        publicaciones: 'deivi_77_publi.jpg'
      }
    ];
  }

  ngOnInit(): void {
  }
  // // creo el método
  // private retrieveEntry(): void {
  //   this.entreeService.retrieveEntry().subscribe(
  //     (data) => {
  //       this.entryList = data;
  //     },
  //     (error: Error) => {
  //       console.log('Error: ', error);
  //     },
  //     () => {
  //       console.log('Petición realizada correctamente');
  //     }
  //   );
  // }
  public showTitle(title: string): void {
    alert(`Entrada seleccionada: ${title}.`);
  }
}
