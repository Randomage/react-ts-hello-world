import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { appendTime, removeOldestTime } from "../../actions";
import { asVoid } from "../../asVoid";
import { TimeList, TimeListProps } from "../presentation/timeList";

const oldest = (maxLength: number) => (dates: Date[]) =>
    dates.sort((a, b) => b.getTime() - a.getTime()).slice(0, maxLength);

const threeMostRecent = oldest(3);

const mapStateToProps = (state: TimeListProps) => ({
    times: threeMostRecent(state.times),
});

const mapDispatchToProps = (dispatch: Dispatch) => (
    {
        addNewTime: asVoid(() => dispatch(appendTime(new Date()))),
        removeOldestTime: asVoid(() => dispatch(removeOldestTime()))
    }
);

const OldestTimeListComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeList);

export const OldestTimeList = hot(module)(OldestTimeListComponent);
