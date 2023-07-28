import axios from "axios";
//Aquí los action Types
import {
  GET_ALL_BOOKS,
  GET_BOOK_BY_AUTHOR,
  GET_BOOK_BY_ID,
  GET_BOOKS_BY_TITLE,
  POST_BOOK,
  UPDATE_BOOK_BY_ID,
  DELETE_BOOK_BY_ID,
  GET_FAILURE,
  GET_PENDING,
  GET_SUCCESS,
  POST_MERCADOPAGO,
  POST_WEBHOOK_PAGO,
  POST_EMAIL,
  POST_SMS_WHATSAPP,
  FILTER_BY_GENRER,
  FILTER_BY_LANGUAJE,
  SELECT_PAGE,
  SELECT_FILTER_PAGE,
  ORDER_BY_PRICE,
  ORDER_BY_PUBLISHED_DATE,
  ORDER_BY_TITLE,
  POST_COMMENT,
  GET_COMMENTS,
  UPDATE_COMMENT_BY_ID,
  DELETE_COMMENT_BY_ID,
  GET_USERS,
  GET_USER_BY_ID,
  POST_USER,
  UPDATE_USER,
  OVERLAY_PROFILE,
  SHOW_LISTWISH,
  FILTER_BY_PRICE,
  FILTER_BY_AUTHOR,
  FILTER_BY_GENDER,
  FILTER_BY_LANGUAGE,
  FILTER_BY_EDITORIAL,
  FILTER_BY_NUM_PAGES,
  FILTER_BY_PUBLISHED_DATE,
  FILTER_BY_COUNTRY,
  FILTER_BY_PriceRange,
  ACTIVATE_USER,
  ACCESS,
  RESET_BOOKS_BY_AUTHOR,
  ADD_CART,
  REMOVE_CART,
  ADD_FAVORITE,
  PASSWORD_REQUEST,
  PASSWORD_CHANGE,
  REDIRECT_TOKEN,
} from "./types";

export const DETAIL_BOOK_BY_ID = "DETAIL_BOOK_BY_ID";
export const BOOK_BY_NAME = "BOOK_BY_NAME";

//--------------BOOKS----------
export function addFavorite(userData) {
  return async function (dispatch) {
    try {
      const response = await axios.put(
        `http://localhost:8000/updUser`,
        userData
      );
      return dispatch({
        type: ADD_FAVORITE,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}

export function getAllBooks() {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:8000/getBooks");
      return dispatch({
        type: GET_ALL_BOOKS,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}

export function detailBookById(id) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:8000/bookDetail/${id}`
      );
      const data = response.data;
      return dispatch({ type: GET_BOOK_BY_ID, payload: data });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
export function getBooksByAuthor(author) {
  return async function (dispatch) {
    try {
      if (author === "Author not Available") {
        return;
      }
      console.log(author);
      const response = await axios.post(
        `http://localhost:8000/getBooks?author=${author}`
      );
      return dispatch({
        type: GET_BOOK_BY_AUTHOR,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}

export function resetBooksByAuthor() {
  return async function (dispatch) {
    try {
      return dispatch({ type: RESET_BOOKS_BY_AUTHOR });
    } catch (error) {
      throw Error(error.message);
    }
  };
}

export function bookByName(name) {
  return async function (dispatch) {
    const response = await axios(`/getBooks?author=${name}`);
    const data = response.data;
    return dispatch({
      type: BOOK_BY_NAME,
      payload: data,
    });
  };
}
//--------------------FILTERS--------------------
export function getByGenrer(gender) {
  return async function (dispatch) {
    try {
      //console.log(gender);
      const response = await axios.post(
        `http://localhost:8000/getBooks?gender=${gender}`
      );
      return dispatch({
        type: FILTER_BY_GENRER,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
export function getByLanguaje(languaje) {
  return async function (dispatch) {
    try {
      //console.log(languaje);
      const response = await axios.post(
        `http://localhost:8000/getBooks?languaje=${languaje}`
      );
      return dispatch({
        type: FILTER_BY_LANGUAJE,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
export function getByPublishedDate(publishedDate) {
  return async function (dispatch) {
    try {
      //console.log(publishedDate);
      const response = await axios.post(
        `http://localhost:8000/getBooks?publishedDate=${publishedDate}`
      );
      return dispatch({
        type: FILTER_BY_PUBLISHED_DATE,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}

export function getBooksByTitle(title) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:8000/getBooks`,
        title
      );

      return dispatch({
        type: GET_BOOKS_BY_TITLE,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}

// --------------Backend Super Filters ----------------
export function FilterByGender(gender) {
  return {
    type: FILTER_BY_GENDER,
    payload: gender,
  };
}

export function FilterByAuthor(author) {
  return {
    type: FILTER_BY_AUTHOR,
    payload: author,
  };
}

export function FilterByPrice(price) {
  return {
    type: FILTER_BY_PRICE,
    payload: price,
  };
}

export function FilterByEditorial(Editorial) {
  return {
    type: FILTER_BY_EDITORIAL,
    payload: Editorial,
  };
}

export function FilterByLanguage(language) {
  return {
    type: FILTER_BY_LANGUAGE,
    payload: language,
  };
}
export function FilterByPages(pages) {
  return {
    type: FILTER_BY_NUM_PAGES,
    payload: pages,
  };
}

export function FilterByPublishedDate(publishedDate) {
  return {
    type: FILTER_BY_PUBLISHED_DATE,
    payload: publishedDate,
  };
}

export function FilterByCountry(country) {
  return {
    type: FILTER_BY_COUNTRY,
    payload: country,
  };
}

export function FilterByPriceRange(PriceRange) {
  return {
    type: FILTER_BY_PriceRange,
    payload: PriceRange,
  };
}

//----------------------------------------------------------------
export function getBooksById(id) {
  return async function (dispatch) {
    try {
      //console.log(title);
      const response = await axios.post(
        `http://localhost:8000/bookDetail/${id}`
      );
      return dispatch({
        type: GET_BOOK_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
export function postBook(book) {
  return async function (dispatch) {
    try {
      //console.log(title);
      const response = await axios.post(`http://localhost:8000/postBook`, book);
      return dispatch({
        type: POST_BOOK,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
export function updateBooksById(id) {
  return async function (dispatch) {
    try {
      //console.log(title);
      const response = await axios.put(
        `http://localhost:8000/updateBook/${id}`
      );
      return dispatch({
        type: UPDATE_BOOK_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
export function deleteBooksById(id) {
  return async function (dispatch) {
    try {
      //console.log(title);
      const response = await axios.delete(
        `http://localhost:8000/deleteBook/${id}`
      );
      return dispatch({
        type: DELETE_BOOK_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
//--------------------PAGINATION--------------------
export function selectPage(page) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:8000/getBooks?page=${page}`
      );
      return dispatch({
        type: SELECT_PAGE,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
export function selectFilterPage(page, search) {
  console.log(page, search);
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:8000/getBooks?page=${page}`,
        search
      );
      console.log(response.data);
      return dispatch({
        type: SELECT_FILTER_PAGE,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
//------------------MERCADOPAGO-------------------------------
export function addCart(book) {
  return {
    type: ADD_CART,
    payload: book,
  };
}
export function removeCart(bookId) {
  return {
    type: REMOVE_CART,
    payload: bookId,
  };
}
export function getMercadoPagoFailure() {
  return async function (dispatch) {
    try {
      //console.log(author);
      const response = await axios.get(`http://localhost:8000/failure`);
      return dispatch({
        type: GET_FAILURE,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
export function getMercadoPagoSucces() {
  return async function (dispatch) {
    try {
      //console.log(author);
      const response = await axios.get(`http://localhost:8000/succes`);
      return dispatch({
        type: GET_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
export function getMercadoPagoPending() {
  return async function (dispatch) {
    try {
      //console.log(author);
      const response = await axios.get(`http://localhost:8000/pending`);
      return dispatch({
        type: GET_PENDING,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
export function postMercadoPago(buyerData) {
  return async function (dispatch) {
    try {
      //console.log(buyerData);
      // buyerData={name,email,IdBook,carrito,typeMoney,userId}
      //carrito=[{nombre,unit_price,quantity},...]
      const response = await axios.post(
        `http://localhost:8000/mercadoPago`,
        buyerData
      );
      return dispatch({
        type: POST_MERCADOPAGO,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
export function postWebhookPago(payment) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:8000/webhook-pago?payment=${payment}`
      );
      return dispatch({
        type: POST_WEBHOOK_PAGO,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
//--------------------EMAIL------------------------
// dataEmail= {mensaje,email, subject, name}
export function postEmail(dataEmail) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:8000/sendEmail`,
        dataEmail
      );
      return dispatch({
        type: POST_EMAIL,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
//--------------------WHATSAPP--------------------
// dataSms = {message, sender}
export function postSmsWhatsapp(dataSms) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:8000/SMS-Whatsapp`,
        dataSms
      );
      return dispatch({
        type: POST_SMS_WHATSAPP,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
//--------------------ORDER BY--------------------
export function orderByPrice(order) {
  return {
    type: ORDER_BY_PRICE,
    payload: order,
  };
}
export function orderByTitle(order) {
  return {
    type: ORDER_BY_TITLE,
    payload: order,
  };
}
export function orderByPublishedDate(order) {
  return {
    type: ORDER_BY_PUBLISHED_DATE,
    payload: order,
  };
}
//--------------------COMMETS--------------------

export function getComents() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:8000/getComments`);
      return dispatch({
        type: GET_COMMENTS,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
//comment= {rating, comment, bookId, userId}
export function postComment(comment) {
  return async function (dispatch) {
    try {
      //console.log(comment);
      const response = await axios.post(
        `http://localhost:8000/postComment`,
        comment
      );
      return dispatch({
        type: POST_COMMENT,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
//editCommet={id, rating, comment }
export function updateCommentById({ id, rating, comment }) {
  return async function (dispatch) {
    try {
      //console.log(id, rating, comment);
      const response = await axios.put(
        `http://localhost:8000/updateComment/${id}`,
        rating,
        comment
      );
      return dispatch({
        type: UPDATE_COMMENT_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
export function deleteCommentById(id) {
  return async function (dispatch) {
    try {
      //console.log(id);
      const response = await axios.delete(
        `http://localhost:8000/deleteComment/${id}`
      );
      return dispatch({
        type: DELETE_COMMENT_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
//-------------------------USER-----------------------
export function accessLogIn({ email, password }) {
  return async function (dispatch) {
    try {
      const userData = {
        id: "2",
        data1: email,
        data2: password,
      };
      const response = await axios.post(
        `http://localhost:8000/activateUser/`,
        userData
      );
      return dispatch({
        type: ACCESS,
        payload: { state: true, ref: response.data.detail.id },
      });
    } catch (error) {
      throw Error(error.response.data.text);
    }
  };
};

export function accessGoogle({email, name, imageUrl, googleId}, token) {
    return async function (dispatch) {
        try {
            const findUser = await axios.post(`http://localhost:8000/findUser/${email}`);

            //console.log(findUser.data);

            return dispatch({
                type: ACCESS,
                payload: { state: true, ref: findUser.data.detail.id },
            })
        } catch (error) {
            //throw Error(error.response.data.text);
            //console.log(error);
            //console.log(error.response.data.text);
            if(error.response.status === 400  && error.response.data.text === 'No users found'){
                try {
                    const userDataSignUp = {
                        name, 
                        email, 
                        password: "password",
                        phoneCode: "00",
                        phone: "0000000",
                        country: "null",
                        birthday: "null",  
                        photoUser: imageUrl,                  
                    };
                    const newUser = await axios.post(`http://localhost:8000/newUser`, userDataSignUp);
                    //console.log(newUser);

                    return dispatch({
                        type: ACCESS,
                        payload: { state: true, ref: newUser.data.detail.id },
                    })        
                } catch (error) {
                    throw Error(error.response.data.text);
                }
            }
            else throw Error(error.response.data.text);
        }
    }
}

export function accessUser(bool, ref) {
  return {
    type: ACCESS,
    payload: { state: bool, ref },
  };
}
export function overlayProfile(bool) {
  return {
    type: OVERLAY_PROFILE,
    payload: bool,
  };
}
export function listWish(bool) {
  return {
    type: SHOW_LISTWISH,
    payload: bool,
  };
}

export function getUsers() {
  return async function (dispatch) {
    try {
      const response = await axios.post(`http://localhost:8000/findUser`);
      console.log(response.data.detail);
      return dispatch({
        type: GET_USERS,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
export function getUserById(id) {
  return async function (dispatch) {
    try {
      //console.log(title);
      const response = await axios.post(`http://localhost:8000/findUser/${id}`);
      return dispatch({
        type: GET_USER_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
//userData={name, birthday, country, phone, phoneCode, gender, email, password, dniPasaport, status, rol, photoUser, listWish}
export function postUser(userData) {
  return async function (dispatch) {
    try {
      //console.log(userData);
      const response = await axios.post(
        `http://localhost:8000/newUser`,
        userData
      );
      //console.log(userData);
      return dispatch({
        type: POST_USER,
        payload: response.data,
      });
    } catch (error) {
      //console.log(error.response? error.response : error.message);
      throw Error(error.response? error.response.data.text : error.message);
    }
  };
}

export function activateUser(token) {
  return async function (dispatch) {
    try {
        const userData = {
            id: "1",
            data1: token,
            data2: "",
        }; 
        //console.log(userData);   
        const response = await axios.post(
            `http://localhost:8000/activateUser/`,
            userData
        );
        return dispatch({
            type: ACTIVATE_USER,
            payload: response.data,
        });
    } catch (error) {
        //console.log(error);
        throw Error(error.message);
    }
  };
}

//editUser={id,name, birthday, country, phone, phoneCode, gender, dniPasaport, status, rol, photoUser, listWish}
export function updateUser(userData) {
  return async function (dispatch) {
    try {
      //console.log(userData);
      const response = await axios.put(
        `http://localhost:8000/updUser`,
        userData
      );
      return dispatch({
        type: UPDATE_USER,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}

export function redirectToken(token) {
  return {
    type: REDIRECT_TOKEN,
    payload: token,
  };
}

export function passwordRequest(email) {
  return async function (dispatch) {
    try {
      const userData = {
        id: "3",
        data1: email,
        data2: "",
      };

      console.log(userData);
      const response = await axios.post(
        `http://localhost:8000/activateUser/`,
        userData
      );
      return dispatch({
        type: PASSWORD_REQUEST,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      throw Error(error.response ? error.response.data.text : error.message);
    }
  };
}

export function passwordChange(token, password) {
  return async function (dispatch) {
    try {
      const changeData = {
        id: "4",
        data1: token,
        data2: password,
      };

      const response = await axios.post(
        `http://localhost:8000/activateUser/`,
        changeData
      );
      return dispatch({
        type: PASSWORD_CHANGE,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      throw Error(error.response ? error.response.data.text : error.message);
    }
  };
}
