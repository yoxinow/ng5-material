import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatNativeDateModule } from '@angular/material';

@NgModule({
imports: [MatButtonModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatDatepickerModule,MatNativeDateModule],
exports: [MatButtonModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatDatepickerModule,MatNativeDateModule],
})


export class MaterialModule {}