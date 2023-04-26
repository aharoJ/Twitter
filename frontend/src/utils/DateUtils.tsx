const MONTHS: string[]=[
    "",
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export const getMonths= ():JSX.Element[] => {
    return MONTHS.map((month, index)=> {
        if (index === 0){
            return <option value={index} key={month}> </option>
        }
        else{
            return <option value={index} key={month}> {month} </option>
        }
    })
}

export const getDays= ():JSX.Element[] => {
    let options:JSX.Element[]= [];

    for (let i=0; i <32; ++i){
        if (i===0){
            options.push(<option value={0} key={i}> </option>)
        } else{
            options.push(<option value={i} key={i}> {i} </option>)
        }
    }

    return options;
}

export const getYears=():JSX.Element[]=>{
    let options:JSX.Element[]= [];
    for (let i=2023; i> 1901; --i){
        if (i===2023){
            options.push(<option value={0} key={i}> </option>)
        } else{
            options.push(<option value={i} key={i}> {i} </option>)
        }
    }

    return options;
}