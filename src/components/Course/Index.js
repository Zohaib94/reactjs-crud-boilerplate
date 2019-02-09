import React from "react";
import PropTypes from "prop-types";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const getCaret = direction => {
  if (direction === "asc") {
    return (
      <span>
        {" "}
        <i className="fa fa-sort-asc" aria-hidden="true" />
      </span>
    );
  }

  if (direction === "desc") {
    return (
      <span>
        {" "}
        <i className="fa fa-sort-desc" aria-hidden="true" />
      </span>
    );
  }

  return (
    <span>
      {" "}
      <i className="fa fa-sort" aria-hidden="true" />
    </span>
  );
};

const titleFormatter = (cell, row) => {
  return `<a href=${row.watchHref} target="_blank">${cell}</a>`;
};

const buttonFormatter = (cell, row, props) => {
  return (
    <div>
      <button
        className="btn btn-warning mr-2"
        onClick={() => props.handleEditButton(row.id)}
      >
        <i className="fa fa-pencil" aria-hidden="true" /> Edit
      </button>

      <button
        className="btn btn-danger"
        onClick={() => props.handleDeleteButton(row.id)}
      >
        <i className="fa fa-trash" aria-hidden="true" /> Delete
      </button>
    </div>
  );
};

class CourseList extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      sortIndicator: true,
      noDataText: "No data"
    };
  }

  render() {
    return (
      <BootstrapTable
        data={this.props.courses}
        selectRow={this.selectRowProp}
        options={this.options}
        bordered={false}
        striped
        hover
        condensed
      >
        <TableHeaderColumn dataField="id" isKey hidden>
          Id
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="title"
          dataFormat={titleFormatter}
          dataSort={true}
          caretRender={getCaret}
          filter={{ type: "TextFilter", delay: 0 }}
          columnTitle
        >
          Title
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="length"
          dataSort={true}
          caretRender={getCaret}
          columnTitle
        >
          Length
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="category"
          dataSort={true}
          caretRender={getCaret}
          filter={{ type: "TextFilter", delay: 0 }}
          columnTitle
        >
          Category
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="button"
          dataFormat={buttonFormatter}
          formatExtraData={this.props}
        >
          Actions
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  handleDeleteButton: PropTypes.func.isRequired,
  handleEditButton: PropTypes.func.isRequired
};

export default CourseList;
