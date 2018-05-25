import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { appendTime, removeOldestTime } from "../../actions";
import { asVoid } from "../../asVoid";
import { TimeList, TimeListProps } from "../presentation/timeList";

const mostRecent = (maxLength: number) => (dates: Date[]) =>
    dates.sort((a, b) => a.getTime() - b.getTime()).slice(0, maxLength);

const threeMostRecent = mostRecent(3);

const mapStateToProps = (state: TimeListProps) => ({
    times: threeMostRecent(state.times)
});

const mapDispatchToProps = (dispatch: Dispatch) => (
    {
        addNewTime: asVoid(() => dispatch(appendTime(new Date()))),
        removeOldestTime: asVoid(() => dispatch(removeOldestTime()))
    }
);

const MostRecentTimeListComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeList);

export const MostRecentTimeList = hot(module)(MostRecentTimeListComponent);
