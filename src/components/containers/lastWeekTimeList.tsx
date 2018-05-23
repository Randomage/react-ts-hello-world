import { connect } from "react-redux";
import { appendTime } from "../../actions";
import { TimeList } from "../presentation/timeList";

const lastWeeksTimes = Array(7).map((_, index) => new Date(Date.now() - index));

const mapStateToProps = (state: any = { times: lastWeeksTimes }) => ({
    times: state.times
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        onClick: () => {
            dispatch(appendTime(new Date()))
        }
    }
};

export const LastWeekTimeList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeList);
