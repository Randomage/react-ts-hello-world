import { List } from "immutable";

import { appendTime, default as reducer, removeOldestTime } from "./times";

describe("times", () => {

    describe("reducer", () => {

        describe("with appendTime action", () => {

            it("adds time to list", () => {

                const result = reducer(
                    { times: List<Date>([new Date(2018, 1, 2, 12, 11, 10)]) },
                    {
                        type: "APPEND_TIME",
                        payload: new Date(2016, 0, 1, 12, 11, 10)
                    }
                );

                expect(result).toEqual({
                    times: List<Date>([
                        new Date(2018, 1, 2, 12, 11, 10),
                        new Date(2016, 0, 1, 12, 11, 10)
                    ])
                });

            });

        });

        describe("with removeOldestTime action", () => {

            describe("and a populated list", () => {

                it("removes the oldest time from the list", () => {

                    const result = reducer(
                        {
                            times: List<Date>([
                                new Date(2018, 1, 2, 12, 11, 10),
                                new Date(2018, 1, 2, 10, 11, 10),
                                new Date(2018, 1, 2, 11, 11, 10)
                            ])
                        },
                        {
                            type: "REMOVE_OLDEST_TIME"
                        }
                    );

                    expect(result).toEqual({
                        times: List<Date>([
                            new Date(2018, 1, 2, 12, 11, 10),
                            new Date(2018, 1, 2, 11, 11, 10)
                        ])
                    });

                });
            });

            describe("and an empty list", () => {

                it("returns empty", () => {

                    const result = reducer(
                        {
                            times: List<Date>()
                        },
                        {
                            type: "REMOVE_OLDEST_TIME"
                        }
                    );

                    expect(result).toEqual({ times: List<Date>() });

                });

            });

        });

    });

    describe("appendTime action creator", () => {

        it("creates an appendTime action", () => {

            const action = appendTime(new Date(2018, 1, 2, 12, 11, 10));

            expect(action).toEqual({
                type: "APPEND_TIME",
                payload: new Date(2018, 1, 2, 12, 11, 10)
            });
        });
    });

    describe("removeOldestTime action creator", () => {

        it("creates a removeOldestTime action", () => {

            const action = removeOldestTime();

            expect(action).toEqual({
                type: "REMOVE_OLDEST_TIME"
            });
        });

    });

});
