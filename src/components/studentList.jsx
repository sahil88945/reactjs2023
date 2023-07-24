import React from 'react';
import TableRow from './TableRow';

function StudentList(props) {
    const data=[
        {id:1,name:'Aman',course:'Full stack',gender:'Mail',fees:30000},
        {id:2,name:'Sahil',course:'Front End',gender:'Mail',fees:40000},
        {id:3,name:'Kamal',course:'Front End',gender:'Mail',fees:50000},
        {id:4,name:'Varun',course:'Back End',gender:'Mail',fees:60000},
    ]
    const [studentData,setStudentData]=usestate(data)
    const deleteStudent=()=>{
        const filteredval=studentData.filter((item)=>{
            return item.id=id;
        })
        setStudentData(filteredval)
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Gender</th>
                        <th>Fees</th>
                    </tr> </thead>
                    <tbody>
                        {
                            studentData.map((item)=>{
                                return(
                                    <TableRow Key='(item.id)' item={item}onDelete={deleteStudent}/>
                                )
                            })
                        }
                    </tbody>
                    
                        
                    
            </table>
    
        </div>
    );
}

export default StudentList;