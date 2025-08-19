import Handlebars, { template } from "handlebars";
import { products } from "./data";
import productsSource from "bundle-text:../templates/gadgets.hbs";

const productsTemplate = Handlebars.compile(productsSource)
const productsHtml = productsTemplate(products)

const productsContainer = document.querySelector("[data-products]")
productsContainer.innerHTML = productsHtml