import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import localizedFormat from "dayjs/plugin/localizedFormat";
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);



// ********************************************************************
// Time Convertion into Timestamp
// ********************************************************************

export const convertToUTC = (timestamp) => {
    let inUTC = dayjs.utc(timestamp).unix();
    return inUTC;
}

export const convertFromUTC = (timestamp) => {
    dayjs.tz.setDefault('auto');
    const isMilliseconds = timestamp.toString().length === 13;
    const utcDate = isMilliseconds ? dayjs(timestamp) : dayjs.unix(timestamp);
    return utcDate;
}
export const formatAndConvertFromUTC = (timestamp, format = "DD MMM, YYYY") => {
    // detect and set users timezone 
    dayjs.tz.setDefault('auto');

    // Check if the timestamp is in milliseconds or seconds
    const isMilliseconds = timestamp.toString().length === 13;
    // Convert timestamp to dayjs object
    const utcDate = isMilliseconds ? dayjs(timestamp) : dayjs.unix(timestamp);
    // Return formatted date
    return utcDate.format(format);
}
