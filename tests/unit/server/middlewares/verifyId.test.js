import verifyId from '../../../../server/middlewares/verifyId.js';
import {InvalidStormtrooperId} from "../../../../server/dto/exceptions/stormtrooper/InvalidStormtrooperId.js";

const didVerifyIdHasError = (id) => {
    const request = {
        params: {
            id: id
        }
    }
    const next = () => {}
    let hasError = false;
    let error = null;
    try {
        verifyId(request, {}, next)
    } catch (err) {
        hasError = true;
        error = err;
    }
    return {hasError, error}
}

test('verifyId - when id is valid, then does not throw', () => {
    const result = didVerifyIdHasError('67635242c35a09e3a2d37a26')
    const hasError = result.hasError
    const error = result.error
    expect(hasError).toEqual(false);
    expect(error).toBeNull();
});

test('verifyId - when id is invalid, then throws InvalidStormtrooperId', () => {
    const result = didVerifyIdHasError('111')
    const hasError = result.hasError
    const error = result.error
    expect(hasError).toEqual(true);
    expect(error instanceof InvalidStormtrooperId).toBe(true);
});