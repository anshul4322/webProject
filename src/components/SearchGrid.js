import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function SearchGrid() {
  const [firstNameFilter, setFirstNameFilter] = useState('');
  const [lastNameFilter, setLastNameFilter] = useState('');
  const [userName, setUserName] = useState('');

  return (
    <div className="d-flex justify-content-around">
      <Card style={{ margin: '5rem auto 0 auto', width: '45rem' }}>
        <Table striped bordered hover size="sm" >
          <thead>
            <tr>
              <th>#</th>
              <th>
                First Name
                <br />
                <input
                  type="text"
                  value={firstNameFilter}
                  onChange={(e) =>
                    setFirstNameFilter(e.target.value)
                  }
                />
              </th>
              <th>
                Last Name
                <br />
                <input
                  type="text"
                  value={lastNameFilter}
                  onChange={(e) =>
                    setLastNameFilter(e.target.value)
                  }
                />
              </th>
              <th>
                Username
                <br />
                <input
                  type="text"
                  value={userName}
                  onChange={(e) =>
                    setUserName(e.target.value)
                  }
                />
              </th>
              <th>
                <button>Search</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </div >

  );
}
export default SearchGrid;