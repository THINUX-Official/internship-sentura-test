import React, {Component} from "react";

interface UserCrate {
    id: number;
    uid: string;
    display_name: string;
    email: string;
    given_name: string;
    middle_name: string;
    name: string;
    family_name: string;
    nickname: string;
    phone_number: string;
    comment: string;
    directory_id: number;
    picture_id: number;
    avatar_url: string;
    metadata: Record<string, any>; // Assuming metadata is an object with dynamic keys and values
    tags: string[];
    presence: string;
    created_at: string;
    modified_at: string;
    is_suspended: boolean;
    is_trashed: boolean;
}


export class CreateUser extends Component {
    // @ts-ignore
    render() {
        const UserProfile: React.FC<{ user: UserCrate }> = ({user}) => {
            return (
                <div>
                    <h2>{user.display_name}</h2>
                    <p>Email: {user.email}</p>
                    {/* Add other user information as needed */}
                </div>
            );
        };
    }
}