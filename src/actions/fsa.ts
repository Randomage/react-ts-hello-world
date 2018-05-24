
interface FsaSuccess<Action extends string, Payload, Meta> {

    type: Action;

    payload: Payload;

    meta: Meta;

    error?: false;
}

interface FsaError<Action extends string> {

    type: Action;

    payload: Error;

    error: true;
}

export type Fsa<Action extends string, Payload = undefined, Meta = undefined> =
    FsaSuccess<Action, Payload, Meta> | FsaError<Action>;

const x: (a: Fsa<"action", number> | Fsa<"otherAction">) => boolean =
    (action: Fsa<"action", number> | Fsa<"otherAction">) => {

        switch (action.error) {
            case false:
            case undefined:

                // nested switch doesn't give exhaustive discriminant checking
                const r = () => {
                    switch (action.type) {
                        case "action":
                            return false;
                        case "otherAction":
                            return false;
                    }
                };
                return r();
            case true:
                return true;
        }

    };
