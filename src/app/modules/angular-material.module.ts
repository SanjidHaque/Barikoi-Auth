import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})

export class AngularMaterialModule { }
{}
