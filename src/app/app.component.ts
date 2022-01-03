import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'DECERTO';

  form = this.fb.group({
    product: [],
  });

  products: Product[] = [
    {
      id: '27735fb3-fe69-4796-a021-e563a04ac770',
      name: 'Produkt 1',
      description: 'Najlepszy produkt 1',
    },
    {
      id: 'a723a0a8-3b1c-47aa-8e24-1172a41b1e1e',
      name: 'Produkt 2',
      description: 'Najlepszy produkt 2',
    },
    {
      id: '1888a8c5-4243-468c-a7f8-c6b7dc7d9f70',
      name: 'Produkt 3',
      description: 'Najlepszy produkt 3',
    },
    {
      id: '5112df3f-d7d1-44eb-98ac-8834f069f42d',
      name: 'Produkt 4',
      description: 'Najlepszy produkt 4',
    },
    {
      id: '8caec80a-3b82-4360-8e80-fe5728fed3b0',
      name: 'Produkt 5',
      description: 'Najlepszy produkt 5',
    },
    {
      id: '89d0cbbe-f865-4e3c-9051-8f31e4f8eb5a',
      name: 'Produkt 6',
      description: 'Najlepszy produkt 6',
    },
  ];

  constructor(private fb: FormBuilder) {}
}
