import react from "react";

const Avatar = (props) => {
    const { user } = props;
    return (
        <img
            src={props.src}
            alt={props.alt}
            className="avatar-profile-image"
        />
    )
}

export default Avatar;