import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguageModalPageRoutingModule } from './language-modal-routing.module';

import { LanguageModalPage } from './language-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguageModalPageRoutingModule
  ],
  declarations: [LanguageModalPage]
})
export class LanguageModalPageModule {}
