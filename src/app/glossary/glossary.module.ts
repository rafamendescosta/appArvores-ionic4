import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { IonicModule } from '@ionic/angular';

import { GlossaryPage } from './glossary.page';

const routes: Routes = [
  {
    path: '',
    component: GlossaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes), 
    FontAwesomeModule
  ],
  declarations: [GlossaryPage]
})
export class GlossaryPageModule {}
