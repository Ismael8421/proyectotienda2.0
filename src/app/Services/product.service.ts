import { Injectable } from '@angular/core';
import { Product } from '../Models/product.mode';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listaProductos: Product[] = [
    { id: 1, name:'Audifonos Jbl TUNE 520BT', price: 49.99, img:'https://nomadaware.com.ec/wp-content/uploads/NomadaWare_audifono_jbl_tune_520bt_azul-8.png' },
    { id: 2, name: 'Teclado Mecánico GK-500', price: 26.61, img: 'https://comsucre.com.ec/wp-content/uploads/2023/06/ML.T.TC506.png' },
    { id: 3, name: 'Mouse Gamer MO298', price: 32.54, img: 'https://comsucre.com.ec/wp-content/uploads/2023/05/MO298_01_r.png' },
    { id: 4, name:'ROG SWIFT OLED PG27AQDM 27 2K 240HZ', price: 1449.99, img:'https://nomadaware.com.ec/wp-content/uploads/NomadaWare_monitor_asus_rog_swift_oled_pg27aqdm_27_qhd_240hz_0-3.png' },
    { id: 5, name:'Control PS5 Dualsense', price: 74.99, img:'https://techshop.ec/wp-content/uploads/2023/07/NEGRO-5.png' },
    { id: 6, name:'Havit Mouse Pad mp901 ', price: 14.99, img:'https://marcimex.vtexassets.com/arquivos/ids/194343-800-auto?v=638037961045900000&width=800&height=auto&aspect=true' },
    { id: 7, name:'Camara Web WG400 ', price: 32.24, img:'https://gamefactor.mx/images/galeria_articulos/WEB400-01.png' },
    { id: 8, name:'Parlante Jbl Partybox Encore Essential', price: 419.99, img:'https://sonikaecuador.com/40571-large_default/parlante-portatil-jbl-partybox-encore-essential-bluetooth.jpg' },
    { id: 9, name:'UGREEN Nexode Power Bank 20000mAh 100W', price: 55.99, img:'https://eu.ugreen.com/cdn/shop/files/ugreen-nexode-power-bank-20000mah-100w-292852.png?v=1721330775&width=720' },
    { id: 10, name:'Luces LED Smart con app - 5 metros', price: 24.99, img:'https://godeliveri.com/cdn/shop/files/IMG_1145-removebg-preview_600x.png?v=1731513810' },
    { id: 11, name:'Silla Ergonómica PRO 810AW', price: 517.53, img:'https://provis.com.ec/wp-content/uploads/2021/09/silla-ergonomica-PRO-810AW.png' },
    { id: 12, name:'Cable HDMI Plano 15m', price: 13.11, img:'https://xpc.com.ec/clientes/wp-content/uploads/CABUNNCB4150BK-1.png' },
    { id: 13, name:'SSD WD Green 240GB WDS240G3G0A', price: 33.99, img:'https://tecnobytesec.com/wp-content/uploads/2024/02/wd-green-240gb-sata-1.webp' },
    { id: 14, name:'Smartwatch AURA', price: 114.99, img:'https://cubitt.com.ec/wp-content/uploads/2024/02/CT-AURA1-600x600.png' },
    { id: 15, name:'JBL Quantum Stream Studio', price: 127.46, img:'https://www.jbl.com.pa/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw24b23871/JBL_Quantum_Stream_Studio_ProductImage_Hero.png?sw=537&sfrm=png' },
    { id: 16, name:'Soporte para laptop', price: 19.99, img:'https://www.artefacta.com/media/catalog/product/2/6/2607034_soporte_i5hggkltfulltfd7.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1040&width=1040&canvas=1040:1040' },
    { id: 17, name:'Cargador Inalambrico', price: 14.99, img:'https://www.detpc.com/wp-content/uploads/2024/05/10.webp' },
    { id: 18, name:'Tableta Grafica Wacom One by Wacom Medium', price: 49.99, img:'https://storeech.com/wp-content/uploads/tableta-grafica-wacom-One-Medium.png' },
    ];

  constructor() { }
  getProducts(): Product[] {
    return this.listaProductos;
  }

  getProductsById(id: number): Product | undefined {
    for (let i = 0; i < this.listaProductos.length; i++){
      if (this.listaProductos[i].id === id) {
        return this.listaProductos[i];
      }
    }
    return undefined;
  }
}
