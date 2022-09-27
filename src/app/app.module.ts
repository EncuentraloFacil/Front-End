import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriaComponent } from './page/categoria/categoria.component';
import { ProductoComponent } from './page/producto/producto.component';
import { VendedorComponent } from './page/vendedor/vendedor.component';
import { VendedorListarComponent } from './page/vendedor/vendedor-listar/vendedor-listar.component';
import { ProductoListarComponent } from './page/producto/producto-listar/producto-listar.component';
import { CategoriaListarComponent } from './page/categoria/categoria-listar/categoria-listar.component';
import{MatTableModule} from '@angular/material/table';
import { DonacionComponent } from './page/donacion/donacion.component';
import { NotificacionComponent } from './page/notificacion/notificacion.component';
import { NotificacionListarComponent } from './page/notificacion/notificacion-listar/notificacion-listar.component';
import { DonacionListarComponent } from './page/donacion/donacion-listar/donacion-listar.component';
import { ConsumidorComponent } from './page/consumidor/consumidor.component';
import { OfertaComponent } from './page/oferta/oferta.component';
import { ReporteComponent } from './page/reporte/reporte.component';
import { FacturaComponent } from './page/factura/factura.component';
import { DetalleVentaComponent } from './page/detalle-venta/detalle-venta.component';
import { DetalleVentaListarComponent } from './page/detalle-venta/detalle-venta-listar/detalle-venta-listar.component';
import { ConsumidorListarComponent } from './page/consumidor/consumidor-listar/consumidor-listar.component';
import { OfertaListarComponent } from './page/oferta/oferta-listar/oferta-listar.component';
import { FacturaListarComponent } from './page/factura/factura-listar/factura-listar.component';
import { ReporteListarComponent } from './page/reporte/reporte-listar/reporte-listar.component';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from'@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ConsumidorCreaeditaComponent } from './page/consumidor/consumidor-creaedita/consumidor-creaedita.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ConsumidorDialogoComponent } from './page/consumidor/consumidor-listar/consumidor-dialogo/consumidor-dialogo.component';
import { ConsumidorBuscarComponent } from './page/consumidor/consumidor-buscar/consumidor-buscar.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    ProductoComponent,
    VendedorComponent,
    VendedorListarComponent,
    ProductoListarComponent,
    CategoriaListarComponent,
    DonacionComponent,
    NotificacionComponent,
    NotificacionListarComponent,
    DonacionListarComponent,
    ConsumidorComponent,
    OfertaComponent,
    ReporteComponent,
    FacturaComponent,
    DetalleVentaComponent,
    DetalleVentaListarComponent,
    ConsumidorListarComponent,
    OfertaListarComponent,
    FacturaListarComponent,
    ReporteListarComponent,
    ConsumidorCreaeditaComponent,
    ConsumidorDialogoComponent,
    ConsumidorBuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
