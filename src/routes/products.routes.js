import { Router } from "express";

import crearProductoDTO from '../dtos/crear-producto'
import editarProductoDTO from "../dtos/editar-producto.dto";
import eliminarProductoDTO from "../dtos/eliminar-producto.dto";
import consultarProductoDTO from "../dtos/consultar-producto.dto";

import crearProductoController from "../controllers/crear-producto-Controller";
import consultarProductoController from "../controllers/consultar-producto-Controller";
import editarProductoController from "../controllers/editar-producto-Controller";
import eliminarProductoController from "../controllers/eliminar-producto-Controller";

const productsRoute = Router()

//Endpoints Route

productsRoute.post( "/crear-producto", crearProductoDTO, crearProductoController )
productsRoute.post( "/editar-producto/:id", editarProductoDTO, editarProductoController )
productsRoute.post( "/consultar-producto/:id", consultarProductoDTO, consultarProductoController )
productsRoute.delete( "/eliminar-producto", eliminarProductoDTO, eliminarProductoController )


export default productsRoute