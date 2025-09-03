import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpnnerComponent } from './loading-spnner/loading-spnner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [LoadingSpnnerComponent],
  imports: [CommonModule,MatProgressSpinnerModule],
  exports: [LoadingSpnnerComponent]  
})
export class SharedModule {}