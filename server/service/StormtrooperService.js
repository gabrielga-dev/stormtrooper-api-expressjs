import repository from "../repository/StormtrooperRepository.js";
import Optional from "optional-js";
import {StormtrooperNotFoundException} from "../dto/exceptions/stormtrooper/StormtrooperNotFoundException.js";


const StormtrooperService = {
    list(queryParams) {
        const {q, page} = queryParams;
        return repository.list(q, page)
    },
    async byId(id) {
        const result = await repository.byId(id);
        return Optional.ofNullable(result)
            .orElseThrow(
                () => new StormtrooperNotFoundException()
            );
    },
    create(stormtrooperRequest) {
        return repository.create(stormtrooperRequest);
    },
    async update(id, stormtrooperRequest) {
        await this.byId(id);
        await repository.update(stormtrooperRequest, id);
        return this.byId(id);
    },
    async delete(id) {
        await this.byId(id);
        return repository.delete(id)
    }
}

export default StormtrooperService;