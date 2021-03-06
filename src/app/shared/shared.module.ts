import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CapitalizePipe } from '@shared/pipes/capitalize.pipe';
import { NormalizeIdLengthPipe } from '@shared/pipes/normalized-id-length.pipe';



@NgModule({
  declarations: [
    CapitalizePipe,
    NormalizeIdLengthPipe
  ],
  exports: [
    CapitalizePipe,
    NormalizeIdLengthPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
