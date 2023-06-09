import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BackofficeComponent],
  imports: [CommonModule, BackofficeRoutingModule, ReactiveFormsModule],
})
export class BackofficeModule {}
