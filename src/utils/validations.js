export const checkNotEmptyStringValid = str => str.trim() !== "" ? 1 : 0;

export const regexValid = (str, regex) => regex.test(str.toLowerCase()) && str.trim() !== "" ? 1 : 0;

export const yearValid = (str) => str.length === 4 ? 1 : 0;

export const validCommaSeparated = (str, l) => {
    const vre = new RegExp(/^([a-z0-9\s]+,)*([a-z0-9\s]+){1}$/i).test(str);
    const vne = str.trim();
    const vml = [...new Set(str.split(","))].length >= l;
    return vre && vne && vml ? 1 : 0;
};

export const validPercentage = (str) => {
    const x = parseFloat(str);
    return (isNaN(x) || x < 0 || x > 100) ? 0 : 1;
}

export const validMinLength = (str, l) => str.split(",").length >= l ? 1 : 0;

//https://stackoverflow.com/questions/72425855/how-to-validate-and-get-data-of-a-radio-button-with-input-box-in-reactjs
export const radioValid = (name) => {
    const radios = document.getElementsByName(name);
    let isValid = 0;
    let i = 0;
    while (!isValid && i < radios.length) {
        if (radios[i].checked) isValid = 1;
        i++;
    }
    return isValid;
}

export const validDob = (dob, minAge, maxAge) => {
    // console.log(dob, minAge, maxAge);
    const [year, month, day] = dob.split("-");
    const today = new Date();
    let age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
        age--;
    }
    // console.log(age >= minAge && age <= maxAge ? 1 : 0);
    return age >= minAge && age <= maxAge ? 1 : 0;
}

export const checkValidationAccordingToInputType = (type, setData, validation, name, value) => {
    if (type === "non-empty") {
        setData((prevData) => ({ ...prevData, [name]: checkNotEmptyStringValid(value) }));
    }
    else if (type === "regex") {
        setData((prevData) => ({ ...prevData, [name]: regexValid(value, validation[name]["regex"]) }));
    }
    else if (type === "radio") {
        setData((prevData) => ({ ...prevData, [name]: radioValid(validation[name]["name"]) }));
    }
    else if (type === "year") {
        setData((prevData) => ({ ...prevData, [name]: yearValid(value) }));
    }
    else if (type === "comma-separate") {
        setData((prevData) => ({ ...prevData, [name]: validCommaSeparated(value, validation[name]["minValue"]) }));
    }
    else if (type === "valid-date") {
        setData((prevData) => ({ ...prevData, [name]: validDob(value, validation[name]["minAge"], validation[name]["maxAge"]) }));
    }
    else if (type === "percentage") {
        setData((prevData) => ({ ...prevData, [name]: validPercentage(value) }));
    }
    else {
        return;
    }
}

