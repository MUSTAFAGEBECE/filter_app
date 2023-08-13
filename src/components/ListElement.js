import "./filter.css"

const ListElement = ({ user }) => {
    
    const { name, phone, email, address } = user;
  
    return (
      <li className="userli">
        Name:{name}
        <br /><br/>
       Phone: {phone}
        <br /><br/>
       Zipcode: {address?.zipcode}
      </li>
    );
  };
  
  export default ListElement;