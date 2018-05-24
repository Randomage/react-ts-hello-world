import { createStandardAction } from "typesafe-actions";

export const appendTime = createStandardAction("APPEND_TIME")<Date>();

export const removeOldestTime = createStandardAction("REMOVE_OLDEST_TIME")();
