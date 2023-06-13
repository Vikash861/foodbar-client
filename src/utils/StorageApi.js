class StorageApi {
    static setItem(product) {
        let getData = JSON.parse(localStorage.getItem('cart')) || [];
        const data = [...getData, product]

        localStorage.setItem('cart', JSON.stringify([...data]));


    }

    static getItem() {
        let getData = JSON.parse(localStorage.getItem('cart')) || [];
        return getData;
    }

    static updateItem(_id, quantity) {
        let getData = JSON.parse(localStorage.getItem('cart')) || [];
        let newData = getData.map((item) => {
            if (item._id === _id) {
                return { ...item, qnt: quantity };
            } else {
                return item;
            }
        });
        localStorage.setItem('cart', JSON.stringify(newData));
    }

    static removeItem(_id) {
        const cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
        const newData = cart.filter((item) => item?._id !== _id);
        localStorage.setItem('cart', JSON.stringify(newData));
    }

    static removeItems(){
        localStorage.removeItem('cart')
    }


}

export const { setItem, getItem, updateItem, removeItem, removeItems } = StorageApi;