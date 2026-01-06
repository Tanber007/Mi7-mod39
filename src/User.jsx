export default function User({user}){
    const {name, id, email} = user;

    return(
        <div style={{border: '2px solid'}}>
            <h3>User : </h3>
            <h5>Name : {name}</h5>
            <h5>ID : {id}</h5>
            <h5>Email : {email}</h5>
        </div>
    )
}