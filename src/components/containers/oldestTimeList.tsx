import { connect } from "react-redux";
import { appendTime } from "../../actions";
import { TimeList } from "../presentation/timeList";
import { hot } from "react-hot-loader";

const oldest = (maxLength: number, dates: Date[]) =>
    dates.sort((a, b) => b.getTime() - a.getTime()).slice(0, maxLength);

const threeMostRecent = oldest.bind(undefined, 3);

const mapStateToProps = (state: any) => ({
    times: threeMostRecent(state.times)
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        onClick: () => {
            dispatch(appendTime(new Date()))
        }
    }
};

const OldestTimeListComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeList);

export const OldestTimeList = hot(module)(OldestTimeListComponent);