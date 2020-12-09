exports.success= (http,status,data)=> {
const responseObj = {
    status: true,
    data
}
http.status(status).send(responseObj);
};

exports.error= (http,status,data)=> {
    const responseObj = {
        status: false,
        data
    }
    http.status(status).send(responseObj);
};