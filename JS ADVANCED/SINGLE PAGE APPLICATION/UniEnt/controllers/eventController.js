import { getTemplates, isLogged } from "../helpers/helper.js";
import { getData } from "../helpers/storage.js";
import { create, getEvent, edit, delEvent, getAllEvents } from "../models/eventModel.js";


export function getCreate(ctx) {
    getTemplates('events/create.hbs', isLogged(ctx));
}

export function postCreate(ctx) {
    const data = {
        ...ctx.params,
        peopleInterestedIn: 0,
        organizer: JSON.parse(getData('userInfo')).username
    }
    create(data)
        .then(() => {
            ctx.redirect('#/')
        })
        .catch(console.error);
}

export async function getDetails(ctx) {
    let newContext = isLogged(ctx);
    const event = await getEvent(ctx.params.id);

    Object.keys(event).forEach(key => {
        newContext[key] = event[key];
    });
    newContext.isCreator = newContext.username === event.organizer;
    newContext.isQueens = newContext.name === 'Queens Greatest Hits';
    newContext.isRammstein = newContext.name === 'Rückkehr nach Ramstein';
    newContext.isEminem = newContext.name === 'Eminem';
    getTemplates('events/eventDetails.hbs', newContext);
}

export async function getEdit(ctx) {
    let newContext = isLogged(ctx);
    const event = await getEvent(ctx.params.id);
    Object.keys(event).forEach(key => {
        newContext[key] = event[key];
    });

    getTemplates('events/edit.hbs', isLogged(ctx));
}

export function postEdit(ctx) {
    const newContext = isLogged(ctx);
    const data = { ...ctx.params };
    delete data.id; //shoud remove the id;

    edit(ctx.params.id, data)
        .then(() => {
            ctx.redirect(`#/details/${ctx.params.id}`)
        })
}

export function closeEvent(ctx) {
    delEvent(ctx.params.id)
        .then(() => {
            ctx.redirect(`#/`);
        })
}

export async function joinEvent(ctx) {
    let newContext = isLogged(ctx);
    const event = await getEvent(ctx.params.id);
    event.peopleInterestedIn++;
    Object.keys(event).forEach(key => {
        newContext[key] = event[key];
    });

    edit(ctx.params.id, event)
        .then(() => {
            ctx.redirect(`#/details/${ctx.params.id}`);
        })
        .catch(console.error);
}

export async function getProfile(ctx) {
    const newContext = isLogged(ctx);
    const events = await getAllEvents();
    const myEvents = events.filter(e => e.organizer === newContext.username);

    newContext.eventsCount = myEvents.length;
    newContext.events = myEvents;
    console.log(newContext.name);
    getTemplates('user/profile.hbs', newContext)
}