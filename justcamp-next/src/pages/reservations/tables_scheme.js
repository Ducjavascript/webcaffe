import React from "react";
import { getData, postData, putData } from "../../utils/fetchData";
import { useState, useContext, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { borderRadius } from "polished";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
let tablseBooking = {}


const TableScheme = () => {
  const initialState = { userName: '', phoneNumber: '',startTime: '', countPerson: '', notes: ''}
  const [userData, setUserData] = useState(initialState)
  const {userName, phoneNumber, startTime, countPerson, notes} = userData
  const classes = useStyles();

  const [tablesData, setTablesData] = useState([{}]);  
  const [show, setShow] = useState(false);

  const handleChangeInput = e =>{
    const {name, value} = e.target
    console.log(name)

    setUserData( { ...userData, [name]:value } )
  }

  const handleClose = () => setShow(false);
  const handleShow = () =>  setShow(true);
  
  const onBooking = () => {
    handleShow()
  }
  useEffect(() => {
    async function abc() {
      const res = await getData("http://localhost:3000/api/tables");
      setTablesData(res.tables || []);
    }
    abc();
  }, []);

  return (
    <div>
      <div
        className="container"

        style={{
          marginTop: 100,
        }}
      >
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner"  style={{borderRadius: '10px!important'}}>
                <div className="carousel-item active">
                  <img className="d-block w-100" src="https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-coffee-fresh-brown-poster-banner-background-image_133007.jpg" alt="First slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="http://www.dcmtlblog.com/wp-content/uploads/2016/05/Cafe-coffee-beans-DCMTL.jpg" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://trangtricafejan.files.wordpress.com/2014/01/banner12.jpg" alt="Third slide"/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 100,
              marginBottom:"50px"}} >
              <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </nav>
            </div>

        <div className="row">
          {tablesData.map((table, index) => (
            <div className="col" key={index}>
              {/*  */} 
              <div className="card" style={{ width: "18rem", marginBottom: "5rem" }}>
                <img
                  src="http://hotcoffee.themerex.net/wp-content/uploads/2016/02/table-7-1.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title"> Bàn số {table.number}</h5>
                  <p className="card-text">
                    {table.isBook ? "Bàn đã đặt" : "Bàn trống"}
                  </p>

                  <Button variant="primary" 
                   disabled={table.isBook }
                 
                   onClick={() => {
                    tablseBooking = table
                    setShow(true)
                   }}>
                     Đặt bàn
                  </Button>
                </div>
              </div>

              {/*  done table*/}

              {/* init modal */}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Đặt bàn trực tuyến - Bàn số { `${tablseBooking.number}` }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                       
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Họ tên"
                          onChange={handleChangeInput}
                          name="userName"

                          value={userName}
                        />
                      </div>
                      <div className="form-group col-md-6">
                       
                        <input
                          type="text"
                          className="form-control"
                          id="sdt"
                          placeholder="Số điện thoại"
                          onChange={handleChangeInput}
                          value={phoneNumber}
                          name="phoneNumber"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="inputAddress">Thời gian đặt bàn</label> 
                      <TextField
                        id="time"
                        label="Alarm clock"
                        type="time"
                        onChange={handleChangeInput}
                        value={startTime}
                        name="startTime"
                        defaultValue="07:30"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        id="count_person"
                        onChange={handleChangeInput}
                        placeholder="Số người"
                        min="1"
                        value={countPerson}
                        name="countPerson"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="notes"
                        onChange={handleChangeInput}
                        value={notes}
                        name="notes"
                        placeholder="Ghi chú"
                      />
                    </div>
                    <p>Quý khách đặt bàn trong thời gian 7h00 - 22h00</p>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={ () => {
                

                    const params  = {
                      appointment_schedule: {
                        info_user: {
                            name: userData.userName,
                            countPerson: userData.countPerson,
                            sdt: userData.phoneNumber
                        },
                        startTime: userData.startTime,
                    },
                    id: tablseBooking._id,
                    isBook: true,
                    number: 1
                  }
                   putData("http://localhost:3000/api/tables", params);
                   return setShow(false)
                  }}>
                    
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              {/*  done modal*/}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default TableScheme;
