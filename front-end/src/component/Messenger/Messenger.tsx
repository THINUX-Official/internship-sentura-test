import React, {Component} from "react";

import {CreateUser} from "../User/CreateUser/CreateUser";

export class Messenger extends Component {
    render() {
        return (
            <>
                <div className="bg-yellow-300">
                    <div className="bg-yellow-300">
                        <h1 className="text-center">Crate User</h1>
                    </div>

                    <div>
                        <form>
                            <div>
                                <input type="text" placeholder={"Input ID"}/>
                            </div>

                            <div>
                                <input type="email" placeholder={"Input Email"}/>
                            </div>

                            <div>
                                <input type="text" placeholder={"Input Name"}/>
                            </div>

                            <div>
                                <input type="text" placeholder={"Input Contact Number"}/>
                            </div>

                            <div>
                                <input type="text" placeholder={"Input Picture"}/>
                            </div>
                        </form>

                        <div>
                            <button type="button">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}