import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
// import {MatTableDataSource} from "@angular/material/table";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginator} from "@angular/material/paginator";
import {MatPaginatorModule} from "@angular/material/paginator";


const MaterialComponents = [MatTableModule, MatInputModule, MatFormFieldModule,MatPaginatorModule];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {
}
