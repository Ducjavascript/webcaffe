const STORAGE_KEY = '__cart'

let saveListener = null;
export const listen = (cb) => { saveListener = cb }; // ugly but storage listener is not working for the same window..

export const list = (key) => JSON.parse(localStorage.getItem(key || STORAGE_KEY)) || [];

export const save = (data, key) => {
    localStorage.setItem(key || STORAGE_KEY, JSON.stringify(data));
    if(saveListener) saveListener(list(key || STORAGE_KEY))
}

export const clear = (key) => {
    localStorage.removeItem(key || STORAGE_KEY)
    if(saveListener) saveListener(list(key || STORAGE_KEY))
}


const get = (_id) => list().find((product) => product._id === _id)

const exists = (_id) => !!get(_id)

const add = (product, quantity) => isVal_id(product) ? exists(product._id) ? update(product._id, 'quantity', get(product._id).quantity + (quantity || 1)) : save(list().concat({ ...product, quantity: quantity || 1 })) : null;

const remove = (_id) => save(list().filter((product) => product._id !== _id))

const quantity = (_id, diff) => exists(_id) && get(_id).quantity + diff > 0 ? update(_id, 'quantity', get(_id).quantity + diff) : remove(_id);

const update = (_id, field, value) => save(list().map((product) => product._id === _id ? ({ ...product, [field]: value }) : product))

const total = (cb) => list().reduce((sum, product) => isCallback(cb) ? cb(sum, product) : (sum += subtotal(product)), 0);

const destroy = () => clear()

const onChange = (cb) => isCallback(cb) ? listen(cb) : console.log(typeof cb)


const isVal_id = (product) => product._id && product.price

const subtotal = (product) => isCalcable(product) ? (product.price * product.quantity) : 0

const isCalcable = (product) => (product && product.price && product.quantity)

const isCallback = (cb) => cb && typeof cb === "function"

export { get, add, remove, update, quantity, total, destroy, exists, subtotal, onChange };
