export const getAllProducts = (length: any, data: any, func: any) => {
    let result = [];
    for (let i = 0; i < length; i++) {
        func(i);
        result.push(data)
    }
    return result;
};
