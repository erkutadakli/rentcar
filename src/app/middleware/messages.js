exports.success= (http,data)=> {
const responseObj = {
    status: true,
    data
}
http.status(200).send(responseObj);
};

exports.error= (http,data)=> {
    const responseObj = {
        status: false,
        data
    }
    http.status(500).send(responseObj);
};