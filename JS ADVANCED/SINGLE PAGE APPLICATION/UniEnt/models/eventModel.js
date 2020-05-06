import { appKey } from "../helpers/storage.js";
import { post, get, put, del } from "../helpers/requester.js";

export function create(data) {
    return post(`appdata/${appKey}/events`, data);
}

export async function getAllEvents() {
    return await get(`appdata/${appKey}/events`);
}

export async function getEvent(id) {
    return await get(`appdata/${appKey}/events/${id}`);
}

export function edit(id, data) {
    return put(`appdata/${appKey}/events/${id}`, data);
}

export function delEvent(id) {
    return del(`appdata/${appKey}/events/${id}`);
}