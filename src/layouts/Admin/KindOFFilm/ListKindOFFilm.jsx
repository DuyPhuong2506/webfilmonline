import React ,{useCallback, useEffect ,useState} from 'react';
import PropTypes from 'prop-types';
import { NavLink ,Link ,useHistory}  from 'react-router-dom'

import TableView from '../../../components/Admin/TableView/TableView'
import { apiAdmin, apiAdminKindFilm } from '../../../services/adminApi';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchsKindRequest } from '../../../Redux/Actions/Admin/filmAction';
import Swal from 'sweetalert2'
ListKindOFFilm.propTypes = {
    
};

function ListKindOFFilm(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const kindfilms = useSelector(state => state.KindFilmReducer);
    const [keyword ,setKeyword] = useState('');
    console.log(keyword);
    
    const onClickUpdate = (kindfilm) => {
        const editFilmUrl = `/admin/kindfilm/edit/${kindfilm.id}`;
        history.push(editFilmUrl);
    }

    const onClickDelete = useCallback(
        (id) => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    apiAdminKindFilm.fetchApiDeleteKindFilm(id).then(res => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                          dispatch(actFetchsKindRequest());
                    })
                }
            })
        },
        [],
    )

    useEffect(() => {
        if(kindfilms && keyword !== '') {
            let data = kindfilms.filter((item,index)=> {
                return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
            } );
        }else{
            
        }
    }, [keyword])
    useEffect(() => {
        dispatch(actFetchsKindRequest());
    }, []); 
     return (
        <>
        <div>
            <div>
                <div className={`section-body marginTop  `}>
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs page-header-tab">
                                <li className="nav-item"><a className="nav-link active" id="Departments-tab" data-toggle="tab" href="#Departments-list">List View</a></li>
                                <li className="nav-item"><a className="nav-link" id="Departments-tab" data-toggle="tab" href="#Departments-grid">Grid View</a></li>
                            </ul>
                            <div className="header-action">
                            <Link to="kindoffilm/add">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i className="fe fe-plus mr-2" />ADD</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-body mt-3">
                    <div className="container-fluid">
                        <div className="tab-content mt-3">
                            <div className="tab-pane fade show active" id="Departments-list" role="tabpanel">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Kind Of F</h3>
                                        <div className="card-options">
                                            <form>
                                                <div className="input-group">
                                                    <input type="text" className="form-control form-control-sm" placeholder="Search something..." name="s" 
                                                    onChange={(e) => setKeyword(e.target.value)}
                                                    />
                                                    <span className="input-group-btn ml-2"><button className="btn btn-icon" type="submit"><span className="fe fe-search" /></button></span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-striped table-vcenter table-hover mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th> Name</th>

                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        kindfilms.length > 0 ?
                                                        kindfilms.map((item, index) => <TableView key={index} index={index} data={item}
                                                        onClickDelete={onClickDelete}
                                                        onClickUpdate={onClickUpdate}
                                                        />)
                                                        : 'Khong co du lieu'
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="Departments-grid" role="tabpanel">
                                <div className="row clearfix">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <img className="img-thumbnail rounded-circle avatar-xxl" src="../assets/images/sm/avatar1.jpg" alt="fake_url" />
                                                <h6 className="mt-3">John Smith</h6>
                                                <div className="text-center text-muted mb-3">Web Development</div>
                                                <button type="button" className="btn btn-icon btn-outline-primary"><i className="fa fa-pencil" /></button>
                                                <button type="button" className="btn btn-icon btn-outline-danger"><i className="fa fa-trash" /></button>
                                            </div>
                                            <div className="card-footer text-center">
                                                <div className="row clearfix">
                                                    <div className="col-6">
                                                        <h5 className="mb-0">105</h5>
                                                        <div className="text-muted">Employee</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <h5 className="mb-0">$3100</h5>
                                                        <div className="text-muted">Earnings</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <img className="img-thumbnail rounded-circle avatar-xxl" src="../assets/images/sm/avatar2.jpg" alt="fake_url" />
                                                <h6 className="mt-3">Maryam Amiri</h6>
                                                <div className="text-center text-muted mb-3">Web Development</div>
                                                <button type="button" className="btn btn-icon btn-outline-primary"><i className="fa fa-pencil" /></button>
                                                <button type="button" className="btn btn-icon btn-outline-danger"><i className="fa fa-trash" /></button>
                                            </div>
                                            <div className="card-footer text-center">
                                                <div className="row clearfix">
                                                    <div className="col-6">
                                                        <h5 className="mb-0">105</h5>
                                                        <div className="text-muted">Employee</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <h5 className="mb-0">$3100</h5>
                                                        <div className="text-muted">Earnings</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <img className="img-thumbnail rounded-circle avatar-xxl" src="../assets/images/sm/avatar3.jpg" alt="fake_url" />
                                                <h6 className="mt-3">Fidel Tonn</h6>
                                                <div className="text-center text-muted mb-3">Web Development</div>
                                                <button type="button" className="btn btn-icon btn-outline-primary"><i className="fa fa-pencil" /></button>
                                                <button type="button" className="btn btn-icon btn-outline-danger"><i className="fa fa-trash" /></button>
                                            </div>
                                            <div className="card-footer text-center">
                                                <div className="row clearfix">
                                                    <div className="col-6">
                                                        <h5 className="mb-0">12</h5>
                                                        <div className="text-muted">Employee</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <h5 className="mb-0">$1800</h5>
                                                        <div className="text-muted">Earnings</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <img className="img-thumbnail rounded-circle avatar-xxl" src="../assets/images/sm/avatar4.jpg" alt="fake_url" />
                                                <h6 className="mt-3">Frank Camly</h6>
                                                <div className="text-center text-muted mb-3">Web Development</div>
                                                <button type="button" className="btn btn-icon btn-outline-primary"><i className="fa fa-pencil" /></button>
                                                <button type="button" className="btn btn-icon btn-outline-danger"><i className="fa fa-trash" /></button>
                                            </div>
                                            <div className="card-footer text-center">
                                                <div className="row clearfix">
                                                    <div className="col-6">
                                                        <h5 className="mb-0">105</h5>
                                                        <div className="text-muted">Employee</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <h5 className="mb-0">$3100</h5>
                                                        <div className="text-muted">Earnings</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <img className="img-thumbnail rounded-circle avatar-xxl" src="../assets/images/sm/avatar2.jpg" alt="fake_url" />
                                                <h6 className="mt-3">Maryam Amiri</h6>
                                                <div className="text-center text-muted mb-3">Web Development</div>
                                                <button type="button" className="btn btn-icon btn-outline-primary"><i className="fa fa-pencil" /></button>
                                                <button type="button" className="btn btn-icon btn-outline-danger"><i className="fa fa-trash" /></button>
                                            </div>
                                            <div className="card-footer text-center">
                                                <div className="row clearfix">
                                                    <div className="col-6">
                                                        <h5 className="mb-0">105</h5>
                                                        <div className="text-muted">Employee</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <h5 className="mb-0">$3100</h5>
                                                        <div className="text-muted">Earnings</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <img className="img-thumbnail rounded-circle avatar-xxl" src="../assets/images/sm/avatar1.jpg" alt="fake_url" />
                                                <h6 className="mt-3">John Smith</h6>
                                                <div className="text-center text-muted mb-3">Web Development</div>
                                                <button type="button" className="btn btn-icon btn-outline-primary"><i className="fa fa-pencil" /></button>
                                                <button type="button" className="btn btn-icon btn-outline-danger"><i className="fa fa-trash" /></button>
                                            </div>
                                            <div className="card-footer text-center">
                                                <div className="row clearfix">
                                                    <div className="col-6">
                                                        <h5 className="mb-0">55</h5>
                                                        <div className="text-muted">Employee</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <h5 className="mb-0">$12,024</h5>
                                                        <div className="text-muted">Earnings</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <img className="img-thumbnail rounded-circle avatar-xxl" src="../assets/images/sm/avatar2.jpg" alt="fake_url" />
                                                <h6 className="mt-3">Maryam Amiri</h6>
                                                <div className="text-center text-muted mb-3">Web Development</div>
                                                <button type="button" className="btn btn-icon btn-outline-primary"><i className="fa fa-pencil" /></button>
                                                <button type="button" className="btn btn-icon btn-outline-danger"><i className="fa fa-trash" /></button>
                                            </div>
                                            <div className="card-footer text-center">
                                                <div className="row clearfix">
                                                    <div className="col-6">
                                                        <h5 className="mb-0">23</h5>
                                                        <div className="text-muted">Employee</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <h5 className="mb-0">$5210</h5>
                                                        <div className="text-muted">Earnings</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Departments</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        <div className="modal-body">
                            <div className="row clearfix">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Departments Name" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Departments Head" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="number" className="form-control" placeholder="No of Employee" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default ListKindOFFilm;