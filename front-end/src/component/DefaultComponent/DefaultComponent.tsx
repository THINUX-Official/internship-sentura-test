import {Component} from "react";
import {Messenger} from "../Messenger/Messenger";

export class DefaultComponent extends Component {
    render() {
        return (
            <>
                <div>
                    <Messenger/>
                </div>
            </>
        );
    }
}