import React from 'react'

const OrderDetails = () => {
  return (
    <div>
       <div className="row">
  <div className="col-md-12">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Responsive tables</h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50}>id</th>
                <th>name</th>
                <th width={100}>status</th>
                <th width={100}>amount</th>
                <th width={100}>date</th>
                <th width={100}>actions</th>
              </tr>
            </thead>
            <tbody>                                            
              <tr id="trow_1">
                <td className="text-center">1</td>
                <td><strong>John Doe</strong></td>
                <td><span className="label label-success">New</span></td>
                <td>$430.20</td>
                <td>24/09/2014</td>
                <td>
                <button className="btn btn-default btn-rounded btn-sm">
                      <span className="fa fa-pencil"></span>
                    </button>
                    
                    <button
                      className="btn btn-danger btn-rounded btn-sm"
                      
                    >
                      <span className="fa fa-times"></span>
                    </button>
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>                                
      </div>
    </div>                                                
  </div>
</div>

    </div>
  )
}

export default OrderDetails