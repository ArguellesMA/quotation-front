import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { CotizacionComponent } from './cotizacion.component';

const routes: VexRoutes = [
  {
    path: '',
    component: CotizacionComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotizacionRoutingModule {
}
