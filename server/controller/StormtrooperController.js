import StormtrooperService from "../service/StormtrooperService.js";

const StormtrooperController = {
    list(request, response, next) {
        StormtrooperService.list(request.query)
            .then(result => response.status(200).json(result))
            .catch(next);
    },
    byId(request, response, next) {
        StormtrooperService.byId(request.params.id)
            .then(result => response.status(200).json(result))
            .catch(next)

    },
    create(request, response, next) {
        StormtrooperService.create(request.body)
            .then(result => response.status(201).json(result))
            .catch(next)
    },
    update(request, response, next) {
        StormtrooperService.update(request.params.id, request.body)
            .then(result => response.status(200).json(result))
            .catch(next);
    },
    delete(request, response, next) {
        StormtrooperService.delete(request.params.id)
            .then(_ => response.sendStatus(204))
            .catch(next);
    }
}

export default StormtrooperController;