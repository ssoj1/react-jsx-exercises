function Person({ name, age, hobbies }) {
    const voteMessage = age >= 18 
                        ?  "Please go vote!" 
                        : "You must be 18" ;

    const hobbiesList = hobbies.map(h => <li>{h}</li>);

    return (
        <div>
            <p> Learn some information about this person: </p>
            <ul>
                <li>Name: {name.slice(0, 6)}</li>
                <li>Age: {age}</li>
                <ul>
                    Hobbies: {hobbiesList}
                </ul>
            </ul>
            <h3>{voteMessage}</h3>
        </div>
    );
}