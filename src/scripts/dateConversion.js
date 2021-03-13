import moment from "moment";

export const convertToDatetime = (timestamp)=>{
    const date = new Date(timestamp);
    const result = moment(date).format('MMM Do h:mm a');
    return result;
}

export const convertToTime = (timestamp)=>{
    const date = new Date(timestamp);
    const result = moment(date).format('h:mm a');
    return result;
}