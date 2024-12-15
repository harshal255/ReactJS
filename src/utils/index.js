export const checkeveryTrueInObject = obj => Object.keys(obj).every((ele) => obj[ele]);

export const checkSomeFalseInObject = obj => Object.keys(obj).some((ele) => !obj[ele]);

export const EmptyKeysInObject = obj => Object.keys(obj).filter((ele) => !obj[ele] || obj[ele] === "0");

export const objToValidObj = obj => {
    const validObj = {};
    Object.keys(obj).map(el => {
        return !obj[el] || obj[el] === "0" ? validObj[el] = 0 : validObj[el] = 1;
    });
    return validObj;
}

export const checkBothObjSame = (obj1, obj2) => {
    if (Object.values(obj2).length !== Object.values(obj1).length) return [false, 0];
    let count = 0;
    let ans = true;
    let obj = {};
    for (let key in obj2) {
        count++;
        if (!obj1[key] || (obj1[key] !== obj2[key])) {
            count--;
            ans = false;
            obj[key] = 0;
        }
        else {
            obj[key] = obj2[key];
        }
    }
    const percentage = Object.values(obj2).length ? Math.floor((parseInt((count / Object.values(obj2).length) * 100) / 5)) * 5 : 0;
    return ans ? [true, percentage, obj] : [false, percentage, obj];
}

export const objToValidNestedObj = obj => {
    const validNestedObj = {};
    Object.keys(obj).map(el => {
        validNestedObj[el] = {};
        Object.keys(obj[el]).map((elm) => {
            return !obj[el][elm] || obj[el][elm] === "0" ? validNestedObj[el][elm] = 0 : validNestedObj[el][elm] = 1;
        })
    });
    return validNestedObj;
}

export const checkBothNestedObjSame = (obj1, obj2) => {
    if (Object.values(obj2).length !== Object.values(obj1).length) return false;
    let count = 0;
    let totalCount = 0;
    let ans = true;
    let obj = {};
    Object.keys(obj2).map(el => {
        obj = { ...obj, [el]: {} };
        for (let key in obj2[el]) {
            count++;
            totalCount++;
            if (!obj1[el][key] || (obj1[el][key] !== obj2[el][key])) {
                count--;
                ans = false;
                obj[el][key] = 0;
            } else {
                obj[el][key] = obj2[el][key];
            }
        }
    })
    // console.log("count", count, "total count", totalCount);
    const percentage = totalCount ? Math.floor((parseInt((count / totalCount) * 100) / 5)) * 5 : 0;
    return ans ? [true, percentage, obj] : [false, percentage, obj];
}

//https://stackoverflow.com/questions/4215737/how-to-convert-an-array-into-an-object
export const removeLastElementFromObject = obj => {
    const arr = Object.values(obj).slice(0, -1);
    return arr.reduce((result, item, index, array) => {
        result[index + 1] = item;
        return result;
    }, {});
};

export const removeSpecificElementFromObject = (obj, key) => {
    const arr = [...Object.values(obj).slice(0, key), ...Object.values(obj).slice(key + 1)];
    return arr.reduce((result, item, index, array) => {
        result[index + 1] = item;
        return result;
    }, {});
}
