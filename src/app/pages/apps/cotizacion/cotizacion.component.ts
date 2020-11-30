import { Observable, of, ReplaySubject, identity } from 'rxjs';
import { filter, reduce } from 'rxjs/operators';

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
import { CotizacionService } from '../../../shared/services/cotizacion.service';
import { Cotizacion } from '../../../shared/models/cotizacion/cotizacion';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface'; 
import { StorageService } from '../../../shared/services/storage/storage.service';
import { AddCotizacionComponent } from './add-cotizacion/add-cotizacion.component';
import { Estatus } from 'src/app/shared/models/cotizacion/estatus';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons' 
import { colors } from 'src/static-data/colors';
import { style } from '@angular/animations';
import Color from 'color';

@Component({
  selector: 'vex-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.scss'],
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
export class CotizacionComponent implements OnInit {

  filmIcon = faFilm;
  circleIcon = faCircle;

  testList: Cotizacion[];
  testObject: Cotizacion;

  items = new Cotizacion;

  displayedColumns= [
    'folioCotizacion',
    'folioFactura',
    'cliente',
    'importe',
    'fechaPago',
    'estatus',
    'editar',
    'borrar',

    
  ];

  dataSource: any = new CustomerDataSource(this.cotizacionService);
  //dataSource:any = new EstablishmentDataSource(this.establishmentService);

  element

  layoutCtrl = new FormControl('boxed');

  subject$: ReplaySubject<Cotizacion[]> = new ReplaySubject<Cotizacion[]>(1);
  data$: Observable<Cotizacion[]> = this.subject$.asObservable();
  customers: Cotizacion[];

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  //dataSource: MatTableDataSource<AddEstablishment> | null;
  selection = new SelectionModel<Cotizacion>(true, []);
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
    private cotizacionService: CotizacionService,
    private storageService: StorageService
  ) { 
    library.add(faCircle);
  }

    vencidos = 0;
    porVencer = 0;
    aTiempo = 0;

  ngOnInit() {
    var mydata = [];
    

    this.dataSource.connect().subscribe(customers => {
      this.subject$.next(JSON.parse(JSON.stringify(customers)));
      

      customers.forEach(node =>  {
        console.log(node.estatus)

        this.switch(node.estatus)
  
      });


    });
    this.data$.pipe(
      filter<Cotizacion[]>(Boolean)
    ).subscribe(customers => {
      this.customers = customers;
      this.dataSource.connect().toPromise = customers;
    });

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));
  }

  switch(p) {
    if(p==1) {return 'red'} 
    if(p==2) {return 'orange'} 
    if(p==3) {return 'green'} 
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
this.dialog.open(AddCotizacionComponent).afterClosed().subscribe((units: Cotizacion) => {
  
  if (units) {
    
    //this.branchs.unshift(new AddEstablishment(addestablishment));
    //this.subject$.next(this.branchs);
  }
});
}

updateCustomer(i: Cotizacion) {
  console.log(i);
  this.storageService.setSession("mydata", i);
  this.storageService.setSession("$key", i.$key)
  

  this.dialog.open(AddCotizacionComponent, {
    
    data: i
    
  }).afterClosed().subscribe(updatedCustomer => {
    
    if (updatedCustomer) {    
     const index = this.customers.findIndex((existingCustomer) => existingCustomer.id === updatedCustomer.id);
     this.customers[index] = new Cotizacion();
      this.subject$.next(this.customers);
    }
  });
}

removeAt(i){     
  console.log(i);

    this.cotizacionService.deleteCotizacion(i);
    
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

onLabelChange(change: MatSelectChange, row: Cotizacion) {
  const index = this.customers.findIndex(c => c === row);
 this.customers[index].folioCotizacion = change.value;
  this.subject$.next(this.customers);
}
ngOnDestroy() {
}

}

export class CustomerDataSource extends DataSource<any> {

  operatorsList: Cotizacion[];
  operatorsObj: Cotizacion;

  constructor(private cotizacionService: CotizacionService) {
  super()
  }

  connect() {
    return this.cotizacionService.getAllCotizacion() 
  }

  disconnect() {}
}
