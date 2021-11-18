import React ,{useEffect ,useCallback,useState} from 'react';
import {Link ,useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import {  apiAdminFilm } from '../../../services/adminApi';
import FilmTable from './Components/FilmTable';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchsRequest } from '../../../Redux/Actions/Admin/filmAction';
import InputSearch from '../../../components/Admin/InputSearch';
ListFilmAdmin.propTypes = {
    
};

function ListFilmAdmin(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    var films = useSelector(state => state.FilmsReducer);
    const [keyword ,setKeyword] = useState('');
    var filmsData = films;
    console.log(filmsData);
    console.log('render' ,films);
    const onClickUpdate = (film) => {
        const editFilmUrl = `/admin/film/edit/${film.id}`;
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
                    apiAdminFilm.fetchApiDeleteFilm(id).then(res => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                          dispatch(actFetchsRequest());
                    })
                }
            })
        },
        [],
    )

    useEffect(() => {
            dispatch(actFetchsRequest());
            console.log("renderad");
    }, []);
    if(keyword !== '') {
        filmsData =  filmsData.filter((item,index)=> {
            return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        });
        console.log("cuoi",filmsData);
    }
    console.log("dau",films);
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
                            <Link to="film/add">
                                <button  type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i className="fe fe-plus mr-2" />ADD Film</button>
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
                                        <h3 className="card-title">Films List</h3>
                                        <InputSearch setKeyword={setKeyword}/>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-striped table-vcenter table-hover mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Name</th>
                                                        <th>Director</th>
                                                        <th>Actor</th>
                                                        <th>Duration</th>
                                                        <th>National</th>
                                                        <th>Kind Of Firm</th>
                                                        <th>Choose Episode</th>
                                                        <th>Choose Type</th>
                                                        <th>Upload Image</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                        filmsData.length > 0 ?
                                                        filmsData.map((item, index) => <FilmTable key={index} index={index} data={item}
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

export default ListFilmAdmin;