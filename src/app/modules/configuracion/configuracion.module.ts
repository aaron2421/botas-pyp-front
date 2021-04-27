import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ConfiguracionComponent } from "./configuracion.component";
import { TipoMateriaPrimaComponent } from "./tipo-materia-prima/tipo-materia-prima.component";

import { InlineSVGModule } from 'ng-inline-svg';

const routes: Routes = [
    {
      path: "",
      component: ConfiguracionComponent,
      children: [
        {
          path: "tipo-materia-prima",
          component: TipoMateriaPrimaComponent,
        }
      ],
    },
  ];

  @NgModule({
    imports: [
      CommonModule,
      InlineSVGModule,
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    declarations: [
      ConfiguracionComponent,
      TipoMateriaPrimaComponent
    ],
  })
  export class ConfiguracionModule {}