class Filter {

    // filter by price
    static price(data, lowerPrice, upperPrice) {
        const res = []
        if (lowerPrice >= 10000) {
            data.forEach(element => {
                if (Number(element.price) > 10000) {
                    res.push(element)
                }
            })
        }
        else {
            data.forEach(element => {
                if (Number(element.price) > lowerPrice && Number(element.price) < upperPrice) {
                    res.push(element)
                }
            });
        }

        if (res.length === 0) {
            return null
        }

        return res
    }

    static search(data, searchValue) {
        const filteredData = data.filter(element => {
            const name = element.name.toLowerCase();
            const search = searchValue.toLowerCase();

            return name.includes(search);
        });
        
        if(filteredData.length === 0) return null;
        return filteredData;
    }




}

export const { price, search } = Filter;