function TableRow(props){
const {item,onDelete}=props
if(item.gender=="Female"){var a='color'}
return(
    <tr Key={item.id}>
        <td>{item.name}</td>
        <td>{item.course}</td>
        <td>{item.gender}</td>
        <td>{item.fees}</td>
        <td><button onClick= {()=>{OnDelete (item.id)}}>Delete</button></td>

    </tr>
)}export default TableRow