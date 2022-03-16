import SimpleDateTime  from 'react-simple-timestamp-to-date';

export const cost = (rub) =>{
    if((rub>1000)&&(rub%1000!==0))
        return <>{Math.trunc(rub/1000)+","+rub%1000} </>
    else if (rub%1000===0)
        return <>{Math.trunc(rub/1000)+",000"} </>
    else
        return <>{Math.trunc(rub)}</>
}

export const Date = (date) =>{
    return <SimpleDateTime dateSeparator="." dateFormat="dd.MM.yyyy" showTime="0">{date}</SimpleDateTime>
}