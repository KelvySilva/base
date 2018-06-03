import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { MainRouting } from './main.routing';
import { MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, MatInputModule, MatToolbarModule, MatCardModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    RouterModule,
    MatSidenavModule, 
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
