import { Router } from "express";

import createProductDTO from '#Dto/inv-manage/create-product.dto.js'
import editProductDTO from "#Dto/inv-manage/edit-product.dto.js";
import deteleProductDTO from "#Dto/inv-manage/delete-product.dto.js";
import consultProductDTO from "#Dto/inv-manage/consult-product.dto.js";

import createProductController from "#Controllers/inv-manage/create-productController.js";
import consultProductController from "#Controllers/inv-manage/consult-productController.js";
import editProductController from "#Controllers/inv-manage/edit-productController.js";
import deleteProductController from "#Controllers/inv-manage/delete-productController.js";

const productsRoute = Router()

//Endpoints Route

productsRoute.post( "/create-product", createProductDTO, createProductController )
productsRoute.post( "/edit-product/:id", editProductDTO, editProductController )
productsRoute.post( "/consult-product/:id", consultProductDTO, consultProductController )
productsRoute.delete( "/delete-product", deteleProductDTO, deleteProductController )

export default productsRoute