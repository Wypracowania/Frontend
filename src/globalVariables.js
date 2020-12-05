export const LOGIN_URL = 'https://wypracowania.herokuapp.com/login';
export const REGISTER_URL = 'http://wypracowania.herokuapp.com/rejestracja';
export const ADD_ORDER_URL = 'https://wypracowania.herokuapp.com/api/user/nowe-zamowienie';

// WSZYSTKIE ZAMOWIENIA
export const FETCH_ORDERS_URL = 'https://wypracowania.herokuapp.com/api/user/all/';

// https://wypracowania.herokuapp.com/api/user/order/<id> NIE ZAPOMNIEC O ID ZAMOWIENIA
export const ORDER_DETAIL_URL = 'https://wypracowania.herokuapp.com/api/user/order/';

// https://wypracowania.herokuapp.com/writer/api/profile_photo/pisarz1 OSTATNI ARGUMENT TO USERNAME
export const GET_WRITER_PHOTO = 'https://wypracowania.herokuapp.com/writer/api/profile_photo/';

// https://wypracowania.herokuapp.com/api/user/get-conversations/klient3 OSTATNI ARGUMENT TO USERNAME
export const GET_USER_CONVERSATIONS = 'http://localhost:8000/api/user/get-conversations/klient3';

export async function getUserConversations(username) {
    const url = `http://localhost:8000/api/user/get-conversations/${username}`
    const response = await fetch(url);
    const conversations = await response.json();
    return conversations
} 

export async function getConversationMessages(id) {
    const url = `http://localhost:8000/api/user/get-messages/${id}`
    const response = await fetch(url);
    const messages = await response.json();
    return messages
}

export async function sendMessage(conversationId, data) {
    const url = `http://localhost:8000/api/user/create-message/${conversationId}`
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        }});

    const messages = await response.json();
    return messages
}

export async function readMessages(conversationId) {
    const url = `http://localhost:8000/api/user/read-messages/${conversationId}`
    const response = await fetch(url);
    const messages = await response.json();
    return messages
}


export async function checkUnreadedMessages(username) {
    const url = `http://localhost:8000/api/user/check-for-message/${username}`
    const response = await fetch(url);
    const messages = await response.json();
    return messages
}

// http://localhost:8000/
// https://wypracowania.herokuapp.com/