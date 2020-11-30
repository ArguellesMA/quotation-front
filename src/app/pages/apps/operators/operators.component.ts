import { Observable, of, ReplaySubject, identity } from 'rxjs';
import { filter } from 'rxjs/operators';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { branchData, branchLabels } from '../../../../static-data/branch-data';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { SelectionModel } from '@angular/cdk/collections';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFolder from '@iconify/icons-ic/twotone-folder';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { FormControl } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { MatSelectChange } from '@angular/material/select';
import theme from '../../../../@vex/utils/tailwindcss';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';

import {DataSource} from '@angular/cdk/collections';
import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OperatorsService } from '../../../shared/services/operators.services';
import { Operators } from '../../../shared/models/operators';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface'; 
import { StorageService } from '../../../shared/services/storage/storage.service';
import { AddOperatorsComponent } from './add-operators/add-operators.component';

@Component({
  selector: 'vex-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      } as MatFormFieldDefaultOptions
    }
  ]
})
export class OperatorsComponent implements OnInit {

  testList: Operators[];
  testObject: Operators;

  items: Array<any>;

  displayedColumns= [
    'operadorFoto',
    'nombre',
    'apellidos',
    'licencia',
    'tipoLicencia',
    'ine',
    // 'curp',
    // 'fechaNacimiento',
    // 'correo',
    // 'telefono',
    // 'codigoPostal',
    'localidad',
    'municipio',
    'estado',
    'editar',
    'borrar',

    
  ];

  dataSource: any = new CustomerDataSource(this.operatorService);
  //dataSource:any = new EstablishmentDataSource(this.establishmentService);

  element

  layoutCtrl = new FormControl('boxed');

  subject$: ReplaySubject<Operators[]> = new ReplaySubject<Operators[]>(1);
  data$: Observable<Operators[]> = this.subject$.asObservable();
  customers: Operators[];

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  //dataSource: MatTableDataSource<AddEstablishment> | null;
  selection = new SelectionModel<Operators>(true, []);
  searchCtrl = new FormControl();


  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  //clientService: any;


  constructor(
    private dialog: MatDialog,
    private operatorService: OperatorsService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.dataSource.connect().subscribe(customers => {
      console.log(customers )
      this.subject$.next(JSON.parse(JSON.stringify(customers)));
      this.items = customers;
      //console.log("printcust :: "+customers)
    });

    this.data$.pipe(
      filter<Operators[]>(Boolean)
    ).subscribe(customers => {
      this.customers = customers;
      this.dataSource.connect().toPromise = customers;
    });

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));
  }

  ngAfterViewInit() {
    //this.dataSours.paginator = this.paginator;
// this.dataSours.sort = this.sort;
  //this.spinnerService.show();
}

applyFilter(filterValue: string) {
filterValue = filterValue.trim(); // Remove whitespace
filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
//this.dataSource.filter = filterValue;
}

createCustomer() {
this.dialog.open(AddOperatorsComponent).afterClosed().subscribe((units: Operators) => {
  
  if (units) {
    
    //this.branchs.unshift(new AddEstablishment(addestablishment));
    //this.subject$.next(this.branchs);
  }
});
}

updateCustomer(i: Operators) {
  console.log(i);
  this.storageService.setSession("mydata", i);
  this.storageService.setSession("$key", i.$key)
  

  this.dialog.open(AddOperatorsComponent, {
    
    data: i
    
  }).afterClosed().subscribe(updatedCustomer => {
    
    if (updatedCustomer) {    
     const index = this.customers.findIndex((existingCustomer) => existingCustomer.id === updatedCustomer.id);
     this.customers[index] = new Operators();
      this.subject$.next(this.customers);
    }
  });

  

}
removeAt(i){     
  console.log(i);

    this.operatorService.deleteOperators(i);
    
    this.customers.splice(this.customers.findIndex((existingCustomer) => existingCustomer.id === i.id), 1);
    this.selection.deselect(i);
    this.subject$.next(this.customers);
}


onFilterChange(value: string) {
  if (!this.dataSource) {
    return;
  }
  value = value.trim();
  value = value.toLowerCase();
  this.dataSource.filter = value;
}
toggleColumnVisibility(column, event) {
  event.stopPropagation();
  event.stopImmediatePropagation();
  column.visible = !column.visible;
}
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}
masterToggle() {
  this.isAllSelected() ?
    this.selection.clear() :
    this.dataSource.data.forEach(row => this.selection.select(row));
}
trackByProperty<T>(index: number, column: TableColumn<T>) {
  return column.property;
}
onLabelChange(change: MatSelectChange, row: Operators) {
  const index = this.customers.findIndex(c => c === row);
 this.customers[index].nombre = change.value;
  this.subject$.next(this.customers);
}
ngOnDestroy() {
}


}

export class CustomerDataSource extends DataSource<any> {

  operatorsList: Operators[];
  operatorsObj: Operators;

  constructor(private operatorService: OperatorsService) {
  super()
  }

  connect() {
    return this.operatorService.getAllOperators() 
  }

  disconnect() {}
}
