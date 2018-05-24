import { hot } from "react-hot-loader";
import { connect } from "react-redux";

import { appendTime } from "../../actions";
import { TimeList } from "../presentation/timeList";

const oldest = (maxLength: number, dates: Date[]) =>
    dates.sort((a, b) => b.getTime() - a.getTime()).slice(0, maxLength);

const threeMostRecent = oldest.bind(undefined, 3);

const mapStateToProps = (state: any) => ({
    times: threeMostRecent(state.times),
});

const mapDispatchToProps = (dispatch: any) => (
    {
        onClick: () => dispatch(appendTime(new Date())),
    }
);

const OldestTimeListComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeList);

export const OldestTimeList = hot(module)(OldestTimeListComponent);
