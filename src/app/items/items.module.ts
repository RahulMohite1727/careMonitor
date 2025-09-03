import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ItemsComponent } from './items/items.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsStore } from './data.store';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [{ path: '', component: ItemsComponent }];

@NgModule({
  declarations: [ItemsComponent],
  imports: [CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    SharedModule],
})
export class ItemsModule { }