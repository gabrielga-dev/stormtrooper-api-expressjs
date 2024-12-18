import ExceptionHandler from "../../../../server/handlers/ExceptionHandler.js";

const mockedResponse = {
    myJson: {},
    statusResponse: 0,
    json(newJson) {
        this.myJson = newJson;
    },
    status(newStatusResponse) {
        this.statusResponse = newStatusResponse;
        return this;
    }
}

test('ExceptionHandler - when status code is null or undefined, then set 500 status response', () => {
    const err = {statusCode: null}
    const req = {}

    ExceptionHandler(err, req, mockedResponse, {})
    expect(mockedResponse.statusResponse).toEqual(500);
    expect(mockedResponse.myJson.status).toEqual(500);
});

test('ExceptionHandler - when status code is not null or undefined, then set expected status response', () => {
    const err = {statusCode: 404}
    const req = {}

    ExceptionHandler(err, req, mockedResponse, {})
    expect(mockedResponse.statusResponse).toEqual(err.statusCode);
    expect(mockedResponse.myJson.status).toEqual(err.statusCode);
});

test('ExceptionHandler - when message is null or undefined, then set default message', () => {
    const err = {message: null}
    const req = {}

    ExceptionHandler(err, req, mockedResponse, {})
    expect(mockedResponse.myJson.messages).toEqual(['Internal server error']);
});

test('ExceptionHandler - when message is not null or undefined, then set expected message', () => {
    const err = {message: 'Testing'}
    const req = {}

    ExceptionHandler(err, req, mockedResponse, {})
    expect(mockedResponse.myJson.messages).toEqual([err.message]);
});