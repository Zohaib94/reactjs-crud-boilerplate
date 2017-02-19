import React, {PropTypes} from 'react';
import {Link} from 'react-router';

export default function CourseListRow({course}) {
    return(
        <tr>
            <td><a href={course.watchHref} target="_blank">{course.title}</a></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
        </tr>
    );    
}

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired
};