import {Component} from "react";
import {Messenger} from "../Messenger/Messenger";
import {CreateUser} from "../User/CreateUser/CreateUser";

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