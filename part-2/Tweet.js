function Tweet({ username, name, date, message }) {
    return (
        <div className="Tweet">
            <h1> {name} </h1>
            <h3> {username} {date} </h3>
            <p> {message} </p>
        </div>
    );
};