import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      
      { 
        path: 'main', 
        redirectTo: '/main', 
        pathMatch: 'full'
        
      }
    ], {useHash:true,
      enableTracing: true}),
  ],
})
export class AppRoutingModule { }