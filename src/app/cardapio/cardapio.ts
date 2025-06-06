import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header';
import { FooterComponent } from '../shared/footer';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './cardapio.html',
  styleUrls: ['./cardapio.css']
})
export class CardapioComponent {}
