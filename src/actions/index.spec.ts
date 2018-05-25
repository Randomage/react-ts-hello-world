import { appendTime, removeOldestTime } from ".";

describe("appendTime", () => {

    it("creates an appendTime action", () => {

        const action = appendTime(new Date(2018, 1, 2, 12, 11, 10));

        expect(action).toEqual({
            type: "APPEND_TIME",
            payload: new Date(2018, 1, 2, 12, 11, 10)
        });
    });
});

describe("removeOldestTime", () => {

    it("creates a removeOldestTime action", () => {

        const action = removeOldestTime();

        expect(action).toEqual({
            type: "REMOVE_OLDEST_TIME"
        });
    });

});
