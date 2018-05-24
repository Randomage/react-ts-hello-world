import { hot } from "react-hot-loader";
import { connect } from "react-redux";

import { appendTime, removeOldestTime } from "../../actions";
import { TimeList } from "../presentation/timeList";

const mostRecent = (maxLength: number, dates: Date[]) =>
    dates.sort((a, b) => a.getTime() - b.getTime()).slice(0, maxLength);

const threeMostRecent = mostRecent.bind(undefined, 3);

const mapStateToProps = (state: any) => ({
    times: threeMostRecent(state.times)
});

const mapDispatchToProps = (dispatch: any) => (
    {
        addNewTime: () => dispatch(appendTime(new Date())),
        removeOldestTime: () => dispatch(removeOldestTime())
    }
);

const MostRecentTimeListComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeList);

export const MostRecentTimeList = hot(module)(MostRecentTimeListComponent);
