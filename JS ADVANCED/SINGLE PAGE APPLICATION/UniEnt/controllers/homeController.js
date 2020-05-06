import { getTemplates, isLogged } from "../helpers/helper.js";
import { getAllEvents } from "../models/eventModel.js";

export async function getHome(ctx) {
    let newContext = isLogged(ctx);
    const event = await getAllEvents();
    newContext.event = event;
    getTemplates('home.hbs', newContext);
}