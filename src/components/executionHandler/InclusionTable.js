import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default class InclusionTable extends React.Component {
  render() {
    return (
      <div className="container" id="tableContainer">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Apply</th>
              <th scope="col">Key</th>
              <th scope="col">Value</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                {' '}
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />{' '}
              </th>
              <td>
                Mark<i className="bi bi-pen-fill"></i>
              </td>
              <td>
                Otto<i className="bi bi-pen-fill"></i>
              </td>
              <td>
                My Description <i className="bi bi-pen-fill"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">
                {' '}
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />{' '}
              </th>

              <td>Jacob</td>
              <td>Thornton</td>
            </tr>

            <span>
              {' '}
              Add
              <i className="bi bi-plus-lg"></i>
            </span>
          </tbody>
        </table>
      </div>
    );
  }
}
