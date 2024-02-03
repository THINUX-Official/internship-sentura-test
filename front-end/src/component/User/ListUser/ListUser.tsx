import {Component} from "react";
import React, {useEffect, useState} from 'react';

class User {
}

interface UserList {
    data: User[]; // Assuming it's an array of User objects
    start: number;
    end: number;
    count: number;
}

export class ListUser extends Component {
    // @ts-ignore
    render() {
        const UserList: React.FC = () => {
            const [userData, setUserData] = useState<UserList | null>(null);

            useEffect(() => {
                // ...
            }, []);

            return (
                <div>
                    <h2>User List</h2>
                    {userData && (
                        <div>

                        </div>
                    )}
                </div>
            );
        }
    }
}