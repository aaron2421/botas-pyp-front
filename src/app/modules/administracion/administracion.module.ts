import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AdministracionComponent } from "./administracion.component";
import { ProductosComponent } from "./productos/productos.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { MateriaPrimaComponent } from "./materia-prima/materia-prima.component";

import { InlineSVGModule } from 'ng-inline-svg';
import { MatCardModule } from "@angular/material/card"
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";

const routes: Routes = [
  {
    path: "",
    component: AdministracionComponent,
    children: [
      {
        path: "materia-prima",
        component: MateriaPrimaComponent,
      },
      {
        path: "productos",
        component: ProductosComponent,
      },
      {
        path: "usuarios",
        component: UsuariosComponent,
      }
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    InlineSVGModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: [
    AdministracionComponent,
    MateriaPrimaComponent,
    ProductosComponent,
    UsuariosComponent
  ],
})
export class AdministracionModule {}
