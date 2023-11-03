//ternary operator || optional chaining || nullish coalescing operator

const age: number = 15;
if (age >= 18) {
    console.log('adult');

} else {
    console.log("not adult");
}


const isAdultt = (age: number) => 18 ? 'adult' : 'not adult'

//nullish coalescing operator
//null or undefined --> decision making

const isAuthenticated = null; //eta null & undefined er upor base kore kaj korbe but conditional chaining tru/falsy value r upor kaj korbe

const result1=isAuthenticated ?? 'Guest'
const result2 = isAuthenticated ? isAuthenticated : 'Guest'

type UgandaUser = {
    name: string;
    adress: {
        city: string;
        road: string;
        presentAdress: string;
        permanentAddress?: string;

    }
}

const user5: UgandaUser = {
    name: 'Persinal',
    adress: {
        city: 'ctg',
        road: 'Awsonme road',
        presentAdress: 'ctg town'
    }

}

const permanentAddress = user5?.adress?.permanentAddress ?? "no"


//nullable types

const searchName = (value: string | null ) => {
    if (value) {
        console.log('Searching');

    } else {
        console.log('There is nothing to search')
    }
};

searchName(null)


//unknown types -- we can understand in runtime

const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === 'number') {
        const convertedSpeed = (value * 1000);
        console.log(`The speed is ${convertedSpeed}ms^-1`)
    }

   else if (typeof value === 'string') {
        const [result , unit] = value.split(' ');
     const convertedSpeed =(parseFloat(result)*1000/3600)

    }

    else {
        console.log('wrong input')
    }
}

getSpeedInMeterPerSecond(`1000kmh^-1`)


//never type
//throw function never return any type

function throwError(msg:string): never {
    throw new Error(msg)
}

